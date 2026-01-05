// =============================================
// GOOGLE FORM INTEGRATION
// =============================================
// Form ID: 1FAIpQLSeGSEJRBLNta90MhFf0lcxkdT_kmxup42PAHk_YyehZZNI00Q

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeGSEJRBLNta90MhFf0lcxkdT_kmxup42PAHk_YyehZZNI00Q/formResponse';

// Map form field IDs to Google Form entry IDs
// Follow these steps to get entry IDs:
// 1. Go to: https://docs.google.com/forms/d/e/1FAIpQLSeGSEJRBLNta90MhFf0lcxkdT_kmxup42PAHk_YyehZZNI00Q/prefill
// 2. Right-click each form field and select "Inspect"
// 3. Find the 'name' attribute (e.g., name="entry.1234567890")
// 4. Copy that number and paste it below

const GOOGLE_FORM_FIELDS = {
    fullName: 'entry.1922293406',    // Full Name - REPLACE WITH ACTUAL ID
    company: 'entry.2005620554',     // Company Name - REPLACE WITH ACTUAL ID
    email: 'entry.1045781291',       // Email - REPLACE WITH ACTUAL ID
    phone: 'entry.1685846602',       // Phone - REPLACE WITH ACTUAL ID
    subject: 'entry.1065046570',     // Subject - REPLACE WITH ACTUAL ID
    message: 'entry.1166974658'      // Details - REPLACE WITH ACTUAL ID
};

// =============================================
// CONTACT FORM FUNCTIONALITY
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQAccordion();
});

// =============================================
// CONTACT FORM HANDLING
// =============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            countryCode: document.getElementById('countryCode').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (validateForm(formData)) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Submit to Google Form
            submitToGoogleForm(formData, submitBtn, originalText, form);
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

// =============================================
// SUBMIT TO GOOGLE FORM
// =============================================
function submitToGoogleForm(formData, submitBtn, originalText, form) {
    // Check if form ID is configured
    if (GOOGLE_FORM_URL.includes('YOUR_FORM_ID')) {
        showNotification('Error: Google Form is not configured. Please contact the administrator.', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        return;
    }

    // Create FormData object
    const data = new FormData();

    // Merge phone with country code for submission
    const phoneWithCode = formData.phone
        ? `${formData.countryCode ? formData.countryCode + ' ' : ''}${formData.phone}`.trim()
        : '';

    const payload = {
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: phoneWithCode,
        subject: formData.subject,
        message: formData.message
    };

    // Map form fields to Google Form entry IDs
    for (const [key, entryId] of Object.entries(GOOGLE_FORM_FIELDS)) {
        data.append(entryId, payload[key] || '');
    }

    // Send to Google Form using fetch with no-cors
    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
    })
    .then(() => {
        // Success - Google Forms doesn't return a success response in no-cors mode
        // So we assume success if no error is thrown
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    })
    .catch((error) => {
        console.error('Form submission error:', error);
        showNotification('Failed to send message. Please try again later.', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// =============================================
// FORM VALIDATION
// =============================================
function validateForm(formData) {
    let isValid = true;

    // Validate full name
    if (formData.fullName.trim().length < 2) {
        showFieldError('fullName', 'Please enter your full name');
        isValid = false;
    } else {
        clearFieldError('fullName');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearFieldError('email');
    }

    // Validate subject
    if (formData.subject.trim().length < 3) {
        showFieldError('subject', 'Subject must be at least 3 characters long');
        isValid = false;
    } else {
        clearFieldError('subject');
    }

    // Validate message
    if (formData.message.trim().length < 10) {
        showFieldError('message', 'Message must be at least 10 characters long');
        isValid = false;
    } else {
        clearFieldError('message');
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.id;

    switch (fieldName) {
        case 'fullName':
            if (value.length < 2) {
                showFieldError(fieldName, 'Please enter your full name');
            } else {
                clearFieldError(fieldName);
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(fieldName, 'Please enter a valid email address');
            } else {
                clearFieldError(fieldName);
            }
            break;
        case 'subject':
            if (value.length < 3) {
                showFieldError(fieldName, 'Subject must be at least 3 characters long');
            } else {
                clearFieldError(fieldName);
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError(fieldName, 'Message must be at least 10 characters long');
            } else {
                clearFieldError(fieldName);
            }
            break;
    }
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add error class
    field.classList.add('error');
    field.style.borderColor = 'var(--color-accent-coral)';

    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'var(--color-accent-coral)';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    field.classList.remove('error');
    field.style.borderColor = '';
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// =============================================
// NOTIFICATION SYSTEM
// =============================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styling
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? 'var(--color-accent-coral)' : 'var(--color-accent-blue)',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease-out',
        maxWidth: '400px'
    });

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// =============================================
// FAQ ACCORDION
// =============================================
function initFAQAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            const icon = this.querySelector('.accordion-icon');

            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                content.style.maxHeight = '0';
                const itemIcon = item.querySelector('.accordion-icon');
                if (itemIcon) itemIcon.textContent = '+';
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
                const content = accordionItem.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
                if (icon) icon.textContent = '×';
            } else {
                // If closing, set icon back to +
                if (icon) icon.textContent = '+';
            }
        });
    });
}
