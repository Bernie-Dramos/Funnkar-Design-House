# Google Forms Integration Setup Guide

This guide will help you set up Google Forms to receive contact form submissions from the Funnkar Design House website.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click the **+** icon to create a new form
3. Give it a title: "Funnkar Design House - Contact Submissions"
4. Add the following fields in order:

### Form Fields to Add:

1. **Full Name** (Text)
   - Question type: Short answer
   - Required: Yes

2. **Company** (Text)
   - Question type: Short answer
   - Required: No

3. **Email Address** (Text)
   - Question type: Short answer
   - Required: Yes

4. **Phone Number** (Text)
   - Question type: Short answer
   - Required: No

5. **Subject** (Text)
   - Question type: Short answer
   - Required: Yes

6. **Message** (Long Text)
   - Question type: Paragraph
   - Required: Yes

7. **What service do you need?** (Dropdown)
   - Question type: Dropdown
   - Options:
     - Graphics Design
     - 3D Animation
     - UI/UX Design
     - Branding
     - Web Development
     - VFX
   - Required: No

## Step 2: Get Your Form ID

1. In your Google Form, look at the URL in your browser
2. Copy the form ID from the URL path:
   - URL format: `https://docs.google.com/forms/d/YOUR_FORM_ID/edit`
   - Copy just the ID part (between `/d/` and `/edit`)

## Step 3: Get Form Field Entry IDs

1. Click the **Send** button (top right)
2. Click the **Link** icon
3. Check **Shorten URL** checkbox
4. Copy the shortened link
5. In a new tab, go to: `https://docs.google.com/forms/d/YOUR_FORM_ID/prefill`
6. Fill out the form with test data and submit
7. Look at the resulting URL - it will contain entry IDs like: `entry.1234567890`

**Alternative Method:**
1. Right-click on any form field
2. Inspect the element
3. Find the `name` attribute (e.g., `name="entry.1234567890"`)
4. This is your entry ID for that field

## Step 4: Update the JavaScript Code

Edit the file: `js/contact.js`

Find this section at the top:

```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

const GOOGLE_FORM_FIELDS = {
    name: 'entry.1234567890',
    company: 'entry.1234567891',
    email: 'entry.1234567892',
    phone: 'entry.1234567893',
    subject: 'entry.1234567894',
    message: 'entry.1234567895',
    service: 'entry.1234567896'
};
```

Replace:
- `YOUR_FORM_ID` with your actual Google Form ID
- Each `entry.XXXXXXXXXX` with the actual entry IDs from your form

### Example:

If your form URL is: `https://docs.google.com/forms/d/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4aB/edit`

And your entry IDs from the prefill test are:
- Full Name: `entry.123456789`
- Company: `entry.234567890`
- Email: `entry.345678901`
- etc.

Then update the code to:

```javascript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT1uV2wX3yZ4aB/formResponse';

const GOOGLE_FORM_FIELDS = {
    name: 'entry.123456789',
    company: 'entry.234567890',
    email: 'entry.345678901',
    phone: 'entry.456789012',
    subject: 'entry.567890123',
    message: 'entry.678901234',
    service: 'entry.789012345'
};
```

## Step 5: Create a Google Sheet (Optional)

Google Forms automatically creates a response spreadsheet. To view responses:

1. In your Google Form, go to the **Responses** tab
2. Click the green **Google Sheets** icon
3. This will create a linked spreadsheet where all submissions appear automatically

## Step 6: Test the Integration

1. Go to your contact page
2. Fill out the contact form with test data
3. Click "Send Message"
4. You should see a success notification
5. Check your Google Form responses to confirm the data was submitted

## Troubleshooting

### Form not submitting?
- Check the browser console (F12) for any errors
- Verify all entry IDs are correct
- Ensure the form URL is in the correct format

### Responses not appearing in Google Sheets?
- Make sure the form is set to collect email addresses
- Check that you've selected the correct response sheet
- Try refreshing the sheet manually

### CORS errors?
- This is normal! Google Forms uses `no-cors` mode which doesn't return response data
- As long as the form submission completes without throwing errors, the data is being sent

## Support

For help with Google Forms:
- [Google Forms Help Center](https://support.google.com/docs/answer/7032287)
- [Form Entry ID Documentation](https://support.google.com/docs/answer/7676592)

For website integration issues, check the browser console for detailed error messages.
