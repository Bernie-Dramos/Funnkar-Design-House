function doPost(e) {
  try {
    // IMPORTANT: Replace this with your actual spreadsheet ID from the URL
    var SPREADSHEET_ID = '1t_79Zk1Q6BriYnZUvR2dTZRMRccBzS7EiHEpB7XS-PM';
    var SHEET_NAME = 'FDH_Website_Responses';
    
    // Open the spreadsheet by ID
    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // If the sheet doesn't exist, throw a clear error
    if (!sheet) {
      throw new Error('Sheet "' + SHEET_NAME + '" not found. Please check the sheet name.');
    }
    
    // Parse the form data
    var params = e.parameter;
    
    // Create timestamp in your timezone
    var timestamp = new Date();
    
    // Extract form fields (with fallback to empty string if undefined)
    var fullName = params.fullName || '';
    var company = params.company || '';
    var email = params.email || '';
    var phone = params.phone || '';
    var subject = params.subject || '';
    var message = params.message || '';
    
    // Log the incoming data for debugging (check Execution log in Apps Script)
    console.log('Received submission:', {
      fullName: fullName,
      company: company,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    });
    
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
    
    // Return success response with CORS headers
    var output = ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
    
    return output;
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error.toString());
    
    // Return error response with CORS headers
    var output = ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'message': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
    return output;
  }
}

// Test function to verify setup - access via the web app URL in browser
function doGet(e) {
  return ContentService
    .createTextOutput('Google Apps Script is running. Use POST to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// Manual test function - run this from Apps Script editor to test
function testManualSubmission() {
  var testData = {
    parameter: {
      fullName: 'Manual Test User',
      company: 'Test Company',
      email: 'test@example.com',
      phone: '+1 555-1234',
      subject: 'Manual Test',
      message: 'This is a manual test submission from Apps Script'
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
