# Netlify Functions + Google Sheets Setup Guide

This guide walks you through setting up the Netlify Function to write contact form submissions to Google Sheets.

## Overview

The architecture:
```
Website Form → Netlify Function → Google Sheets API → Your Spreadsheet
```

**Security features:**
- ✅ Input validation & sanitization (server-side)
- ✅ Rate limiting (5 requests per IP per minute)
- ✅ API keys stored in environment variables (never exposed to client)
- ✅ CORS handled automatically by Netlify
- ✅ No direct client-to-Sheets connection

---

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown at the top
3. Click "New Project"
4. Name it: `Funnkar Design House`
5. Click "Create"
6. Wait for the project to be created

---

## Step 2: Enable Google Sheets API

1. In Google Cloud Console, search for "Google Sheets API"
2. Click on it and press "Enable"
3. You'll see "Credentials" button - click it

---

## Step 3: Create a Service Account

1. On the Credentials page, click "Create Credentials" → "Service Account"
2. Fill in the form:
   - **Service account name**: `funnkar-contact-form`
   - **Service account ID**: Auto-filled
   - **Description**: "Service account for website contact form submissions"
3. Click "Create and Continue"
4. On the next page, click "Create Key"
5. Choose **JSON** format
6. Click "Create"
7. A JSON file will download - **Save this file securely**, you'll need it

---

## Step 4: Add Service Account to Your Google Sheet

1. Open your Google Sheet (FDH_Website_Responses)
2. Click "Share" in the top right
3. Paste the service account email (it looks like: `funnkar-contact-form@your-project.iam.gserviceaccount.com`)
   - Find this email in the JSON file you downloaded, or in Google Cloud Console under Service Accounts
4. Give it **Editor** permission
5. Click "Share"

---

## Step 5: Configure Netlify Environment Variables

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Select your site: `funnkardesignhouse`
3. Go to **Site settings** → **Build & deploy** → **Environment**
4. Click "Edit variables"
5. Add two variables:

### Variable 1: GOOGLE_SHEETS_ID
- **Key**: `GOOGLE_SHEETS_ID`
- **Value**: Your spreadsheet ID (from the URL: `https://docs.google.com/spreadsheets/d/{ID}/edit`)
- Example: `1t_79Zk1Q6BriYnZUvR2dTZRMRccBzS7EiHEpB7XS-PM`

### Variable 2: GOOGLE_SHEETS_CREDENTIALS
- **Key**: `GOOGLE_SHEETS_CREDENTIALS`
- **Value**: The entire JSON file you downloaded (paste the raw JSON)
- ⚠️ **Important**: Keep this secret! Never commit it to GitHub

### Optional Variable 3: GOOGLE_SHEETS_TAB
- **Key**: `GOOGLE_SHEETS_TAB`
- **Value**: Your sheet tab name (the name of the tab at the bottom of the spreadsheet, e.g., `FDH_Website_Responses` or `Sheet1`)
- If omitted, the function defaults to `Sheet1`.

6. Click "Save"

---

## Step 6: Ensure Sheet Structure

Make sure your Google Sheet has these headers in row 1 (on the tab you configured):
```
Timestamp | Full Name | Company | Email Address | Phone | Subject | Message
```

The Netlify Function will append data to columns A through G on the configured tab.

---

## Step 7: Deploy

1. Commit your changes to GitHub:
   ```bash
   git add .
   git commit -m "Add Netlify contact form function with Google Sheets integration"
   git push
   ```

2. Netlify will automatically redeploy. You can check the status in your Netlify Dashboard.

3. Once deployed, test the contact form on your website.

---

## Step 8: Verify It's Working

### Test on your website:
1. Go to your deployed site (funnkardesignhouse.netlify.app)
2. Fill out the contact form with test data
3. Click Submit
4. Check your Google Sheet - you should see a new row with your test submission

### Check function logs:
1. In Netlify Dashboard, go to **Functions** → **contact-form**
2. Click "Logs" tab
3. You'll see real-time logs of form submissions

---

## Troubleshooting

### ❌ "Error: Missing GOOGLE_SHEETS_CREDENTIALS"
- Solution: Make sure you added the environment variable in Netlify. Redeploy after adding it.

### ❌ "Error: Permission denied"
- Solution: Make sure you shared the Google Sheet with the service account email (in Edit mode)

### ❌ "Data not appearing in sheet"
- Solution: 
  - Check the sheet tab name is "Sheet1" (or update line in the function)
  - Verify the service account has Editor access to the sheet
  - Check function logs for errors

### ❌ "Rate limit error (429)"
- This is intentional - only 5 requests per IP per minute allowed
- Rate limiting protects against spam/abuse

---

## Security Notes

✅ **What's secure:**
- API credentials are **never sent to the browser**
- All credentials stored in **Netlify environment variables**
- **Server-side validation** prevents invalid data
- **Rate limiting** prevents abuse
- Input sanitization prevents injection attacks

⚠️ **Never do this:**
- Don't commit the JSON credentials file to GitHub
- Don't put API keys in front-end code
- Don't skip input validation

---

## Future Enhancements

If needed, you can add:
- Email notifications when a form is submitted
- Slack/Discord notifications
- Custom rate limiting (per user, per country, etc.)
- Advanced spam detection
- Automatic reply emails

---

## Support

If you encounter issues:
1. Check Netlify Functions logs
2. Check Google Cloud Service Account permissions
3. Verify environment variables are set correctly
4. Check browser DevTools Network tab for function response
