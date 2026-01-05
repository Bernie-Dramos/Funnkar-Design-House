# Google Apps Script Setup - Direct to Sheet (No Form)

This guide shows you how to set up Google Apps Script to receive contact form submissions directly to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **FDH_Website_Responses**
4. In the first row, add these column headers:
   - `Timestamp` | `Full Name` | `Company` | `Email` | `Phone` | `Subject` | `Message`

## Step 2: Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Copy and paste the code below

## Step 3: Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    
    // If Sheet1 doesn't exist, get the first sheet
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    }
    
    // Parse the form data
    var params = e.parameter;
    
    // Create timestamp
    var timestamp = new Date();
    
    // Extract form fields (with fallback to empty string if undefined)
    var fullName = params.fullName || '';
    var company = params.company || '';
    var email = params.email || '';
    var phone = params.phone || '';
    var subject = params.subject || '';
    var message = params.message || '';
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      fullName,
      company,
      email,
      phone,
      subject,
      message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify setup
function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 4: Deploy the Apps Script

1. Click the **Deploy** button (top right) → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Configure deployment:
   - **Description**: "Contact Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Authorize access** when prompted:
   - Review permissions
   - Click "Advanced"
   - Click "Go to [your project name] (unsafe)"
   - Click "Allow"
6. **Copy the Web App URL** - it will look like:
   ```
   https://script.googleapis.com/macros/s/AKfycby.../exec
   ```

## Step 5: Update Your Website Code

Open `js/contact.js` and find this line (around line 5):

```javascript
const GOOGLE_FORM_URL = 'https://script.googleapis.com/macros/s/AKfycbyBLhXXmwCR5CHPiQwWtIHMoTVoAQw-JW_Pcz0A_RnCJhUuhiPBvdWMjvloSeLw_L7N/exec';
```

Replace it with your **new Web App URL** from Step 4.

## Step 6: Test the Contact Form

1. Open your website in a browser
2. Go to the Contact page
3. Fill out the form with test data
4. Click Submit
5. Check your Google Sheet - you should see a new row with:
   - Current timestamp
   - Your test data in each column

## Troubleshooting

### ❌ Issue: "Authorization required"
**Solution**: Make sure you clicked "Allow" when authorizing the script

### ❌ Issue: Form submits but no data in sheet
**Solution**: 
1. Check the sheet name in the script matches your actual sheet name
2. Verify the Web App URL in `contact.js` is correct
3. Make sure deployment is set to "Anyone" can access

### ❌ Issue: "Script not found" error
**Solution**: 
1. Re-deploy the Apps Script
2. Copy the NEW Web App URL
3. Update `contact.js` with the new URL

### ❌ Issue: Data appears in wrong columns
**Solution**: Make sure your sheet headers match exactly:
- `Timestamp` | `Full Name` | `Company` | `Email` | `Phone` | `Subject` | `Message`

## Testing in Browser Console

Open browser DevTools (F12) and run this test:

```javascript
// Test the Apps Script endpoint
fetch('YOUR_WEB_APP_URL_HERE', {
  method: 'POST',
  body: new URLSearchParams({
    fullName: 'Test User',
    company: 'Test Company',
    email: 'test@example.com',
    phone: '+1 234-567-8900',
    subject: 'Test Subject',
    message: 'This is a test message'
  }),
  mode: 'no-cors'
})
.then(() => console.log('Form submitted! Check your Google Sheet'))
.catch(err => console.error('Error:', err));
```

## Viewing Submissions

Your Google Sheet will automatically populate with:
- **Timestamp**: When the form was submitted
- **Full Name**: User's full name
- **Company**: Company name (optional)
- **Email**: Email address
- **Phone**: Phone number with country code
- **Subject**: Message subject
- **Message**: Full message text

## Advanced: Email Notifications (Optional)

To receive an email notification when someone submits the form, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var params = e.parameter;
    
    var timestamp = new Date();
    var fullName = params.fullName || '';
    var company = params.company || '';
    var email = params.email || '';
    var phone = params.phone || '';
    var subject = params.subject || '';
    var message = params.message || '';
    
    // Append to sheet
    sheet.appendRow([timestamp, fullName, company, email, phone, subject, message]);
    
    // Send email notification
    MailApp.sendEmail({
      to: 'your-email@example.com', // Replace with your email
      subject: 'New Contact Form Submission - ' + subject,
      body: 'New submission from ' + fullName + '\n\n' +
            'Company: ' + company + '\n' +
            'Email: ' + email + '\n' +
            'Phone: ' + phone + '\n' +
            'Subject: ' + subject + '\n\n' +
            'Message:\n' + message
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Summary

✅ **No Google Form needed** - Direct website → Apps Script → Google Sheet  
✅ **Real-time updates** - Data appears in sheet immediately  
✅ **Free solution** - No hosting costs  
✅ **Custom validation** - You control form validation on the website  
✅ **CORS-friendly** - Works with no-cors mode  

---

**Need Help?** Check the Troubleshooting section or verify:
1. Apps Script is deployed as "Web app"
2. Access is set to "Anyone"
3. Web App URL is correct in `contact.js`
4. Google Sheet has the correct column headers
