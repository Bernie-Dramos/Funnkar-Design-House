// =============================================
// GOOGLE APPS SCRIPT WEB APP INTEGRATION
// =============================================
// Production-optimized Google Apps Script deployment URL
const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbzupof19fjwZplaCpuVssq9oT4BIWPh8Pu3gqX89srruEz2HoEAOg6Jr6u_AK3a-cbQ/exec';

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
    const formStatus = document.getElementById('formStatus');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear any existing inline status message
        setFormStatus('');

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
        } else {
            setFormStatus('Please fix the highlighted fields.', 'error');
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
    // Merge phone with country code for submission
    const phoneWithCode = formData.phone
        ? `${formData.countryCode ? formData.countryCode + ' ' : ''}${formData.phone}`.trim()
        : '';

    // Build payload for Apps Script
    const data = new URLSearchParams();
    data.append('fullName', formData.fullName);
    data.append('company', formData.company);
    data.append('email', formData.email);
    data.append('phone', phoneWithCode);
    data.append('subject', formData.subject);
    data.append('message', formData.message);

    // Send to Google Apps Script web app using no-cors mode
    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
    })
    .then(() => {
        // In no-cors mode, we can't read the response, so we wait a moment then assume success
        return new Promise(resolve => setTimeout(resolve, 500));
    })
    .then(() => {
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        setFormStatus('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    })
    .catch((error) => {
        showNotification('Failed to send message. Please try again later.', 'error');
        setFormStatus('Failed to send message. Please try again later.', 'error');
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

// Inline status banner near the form
function setFormStatus(message, type) {
    const statusEl = document.getElementById('formStatus');
    if (!statusEl) return;

    // Reset state
    statusEl.className = 'form-status';
    statusEl.textContent = '';

    if (!message) return;

    statusEl.textContent = message;
    statusEl.classList.add('show');

    if (type === 'success' || type === 'error') {
        statusEl.classList.add(type);
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
