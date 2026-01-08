// =====================================================
// NETLIFY FUNCTION: Contact Form Handler with Google Sheets
// =====================================================
// This function:
// 1. Validates & sanitizes all inputs
// 2. Rate limits by IP
// 3. Writes to Google Sheets via Sheets API
// 4. Returns secure JSON responses

const { google } = require('googleapis');

// =====================================================
// SECURITY: Rate Limiting (Simple IP-based)
// =====================================================
// In production, use a proper rate limiting service (Redis, etc.)
const requestCounts = new Map();
const RATE_LIMIT = 5; // requests
const RATE_LIMIT_WINDOW = 60000; // 1 minute in ms

function checkRateLimit(ip) {
  const now = Date.now();
  const key = ip;

  if (!requestCounts.has(key)) {
    requestCounts.set(key, []);
  }

  const timestamps = requestCounts.get(key);
  
  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);
  requestCounts.set(key, recentTimestamps);

  // Check if limit exceeded
  if (recentTimestamps.length >= RATE_LIMIT) {
    return false; // Rate limited
  }

  // Add current request
  recentTimestamps.push(now);
  return true; // Allowed
}

// =====================================================
// SECURITY: Input Validation & Sanitization
// =====================================================
function validateAndSanitize(data) {
  const errors = [];
  const sanitized = {};

  // Full Name: Required, 2-100 chars, alphanumeric + spaces/hyphens
  const fullName = (data.fullName || '').trim();
  if (!fullName || fullName.length < 2 || fullName.length > 100) {
    errors.push('Full Name must be between 2 and 100 characters');
  } else if (!/^[a-zA-Z\s\-']+$/.test(fullName)) {
    errors.push('Full Name contains invalid characters');
  } else {
    sanitized.fullName = fullName;
  }

  // Service: Optional, 0-100 chars, alphanumeric + hyphens
  const service = (data.service || '').trim();
  if (service && service.length > 100) {
    errors.push('Service must be 100 characters or less');
  } else if (service && !/^[a-zA-Z0-9\s\-]+$/.test(service)) {
    errors.push('Service contains invalid characters');
  } else {
    sanitized.service = service;
  }

  // Email: Required, valid email format
  const email = (data.email || '').trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email) || email.length > 254) {
    errors.push('Please enter a valid email address');
  } else {
    sanitized.email = email;
  }

  // Phone: Optional, basic format validation (10-20 chars, numbers/+/spaces/-/parentheses)
  const phone = (data.phone || '').trim();
  if (phone && !/^[\d\s\-+()]+$/.test(phone)) {
    errors.push('Phone contains invalid characters');
  } else if (phone && phone.replace(/\D/g, '').length < 7) {
    errors.push('Phone number must have at least 7 digits');
  } else if (phone && phone.length > 20) {
    errors.push('Phone number is too long');
  } else {
    sanitized.phone = phone;
  }

  // Subject: Required, 3-200 chars
  const subject = (data.subject || '').trim();
  if (!subject || subject.length < 3 || subject.length > 200) {
    errors.push('Subject must be between 3 and 200 characters');
  } else if (!/^[a-zA-Z0-9\s\-&.,!?():'"]+$/.test(subject)) {
    errors.push('Subject contains invalid characters');
  } else {
    sanitized.subject = subject;
  }

  // Message: Required, 10-5000 chars
  const message = (data.message || '').trim();
  if (!message || message.length < 10 || message.length > 5000) {
    errors.push('Message must be between 10 and 5000 characters');
  } else {
    // Allow more characters in message but prevent script injection
    sanitized.message = message.replace(/[<>]/g, '');
  }

  return { sanitized, errors };
}

// =====================================================
// GOOGLE SHEETS INTEGRATION
// =====================================================
async function appendToGoogleSheet(data) {
  try {
    // Credentials from environment variables
    const credentialsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;
    if (!credentialsJson) {
      throw new Error('Missing GOOGLE_SHEETS_CREDENTIALS environment variable');
    }

    const credentials = JSON.parse(credentialsJson);
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      throw new Error('Missing GOOGLE_SHEETS_ID environment variable');
    }

    // Optional: Sheet tab name (default to Sheet1)
    const sheetTab = (process.env.GOOGLE_SHEETS_TAB || 'Sheet1').trim();

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data
    const timestamp = new Date().toISOString();
    const row = [
      timestamp,
      data.fullName,
      data.service,
      data.email,
      data.phone,
      data.subject,
      data.message,
    ];

    // Append to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: `${sheetTab}!A:G`, // Use configured sheet tab
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return { success: true, response };
  } catch (error) {
    // Enhance error detail for common misconfigurations
    const msg = (error && error.response && error.response.data && error.response.data.error && error.response.data.error.message)
      ? error.response.data.error.message
      : (error.message || 'Unknown error');
    console.error('Google Sheets API Error:', msg);
    if (String(msg).includes('Unable to parse range')) {
      console.error(`Tip: Check the sheet tab name. Current configured tab: "${process.env.GOOGLE_SHEETS_TAB || 'Sheet1'}". Ensure the tab exists in the spreadsheet.`);
    }
    throw error;
  }
}

// =====================================================
// MAIN HANDLER
// =====================================================
exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    // Get client IP for rate limiting
    const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return {
        statusCode: 429,
        body: JSON.stringify({ 
          error: 'Too many requests. Please try again later.' 
        }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Parse form data
    const data = JSON.parse(event.body || '{}');

    // Validate & sanitize
    const { sanitized, errors } = validateAndSanitize(data);

    if (errors.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Validation failed',
          details: errors 
        }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    // Write to Google Sheets
    await appendToGoogleSheet(sanitized);

    // Success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Thank you! Your message has been received. We\'ll get back to you soon.' 
      }),
      headers: { 'Content-Type': 'application/json' },
    };

  } catch (error) {
    console.error('Error:', error);

    // Don't expose internal errors to client
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'An error occurred while processing your request. Please try again later.' 
      }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
