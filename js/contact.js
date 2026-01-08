// =============================================
// NETLIFY FUNCTION INTEGRATION
// =============================================
// Serverless function endpoint for contact form submission
const CONTACT_FORM_ENDPOINT = '/.netlify/functions/contact-form';

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
        const selectedServiceEl = document.querySelector('input[name="service"]:checked');
        const selectedService = selectedServiceEl ? selectedServiceEl.value : '';

        const formData = {
            fullName: document.getElementById('fullName').value,
            service: selectedService,
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
// SUBMIT TO NETLIFY FUNCTION
// =============================================
function submitToGoogleForm(formData, submitBtn, originalText, form) {
    // Merge phone with country code for submission
    const phoneWithCode = formData.phone
        ? `${formData.countryCode ? formData.countryCode + ' ' : ''}${formData.phone}`.trim()
        : '';

    // Build payload for Netlify Function (JSON format)
    const payload = {
        fullName: formData.fullName,
        service: formData.service,
        email: formData.email,
        phone: phoneWithCode,
        subject: formData.subject,
        message: formData.message
    };

    // Send to Netlify Function
    fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        // Read response as JSON
        return response.json().then(data => ({
            status: response.status,
            data: data
        }));
    })
    .then(({ status, data }) => {
        if (status === 200 && data.success) {
            // Success
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            setFormStatus('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
        } else if (status === 429) {
            // Rate limited
            showNotification('Too many requests. Please wait a moment before trying again.', 'error');
            setFormStatus('Too many requests. Please try again later.', 'error');
        } else if (status === 400) {
            // Validation error
            const errorMsg = data.details ? data.details.join(', ') : data.error;
            showNotification('Please fix the errors: ' + errorMsg, 'error');
            setFormStatus('Validation error: ' + errorMsg, 'error');
        } else {
            // Other error
            showNotification(data.error || 'Failed to send message. Please try again later.', 'error');
            setFormStatus(data.error || 'Failed to send message. Please try again later.', 'error');
        }
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    })
    .catch((error) => {
        console.error('Form submission error:', error);
        showNotification('Network error. Please check your connection and try again.', 'error');
        setFormStatus('Network error. Please try again.', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// =============================================
// FORM VALIDATION
// =============================================
function validateForm(formData) {
    let isValid = true;

    // Require service selection
    if (!formData.service) {
        setFormStatus('Please select a service.', 'error');
        isValid = false;
    }

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
    const items = document.querySelectorAll('.accordion-item');
    const headers = document.querySelectorAll('.accordion-header');

    // Initialize all items collapsed with ARIA markup
    items.forEach((item, idx) => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        if (!header || !content) return;

        // Assign ids for ARIA linking
        const contentId = content.id || `faq-content-${idx+1}`;
        content.id = contentId;
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        header.setAttribute('aria-controls', contentId);
        header.setAttribute('aria-expanded', 'false');

        // Ensure collapsed state on load
        item.classList.remove('active');
        content.style.maxHeight = '0px';
        const icon = header.querySelector('.accordion-icon');
        if (icon) icon.textContent = '+';
    });

    function toggleItem(header) {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        const icon = header.querySelector('.accordion-icon');

        // Close all items
        items.forEach(item => {
            item.classList.remove('active');
            const c = item.querySelector('.accordion-content');
            if (c) c.style.maxHeight = '0px';
            const i = item.querySelector('.accordion-icon');
            if (i) i.textContent = '+';
            const h = item.querySelector('.accordion-header');
            if (h) h.setAttribute('aria-expanded', 'false');
        });

        // Open target if it was not active
        if (!isActive) {
            accordionItem.classList.add('active');
            const content = accordionItem.querySelector('.accordion-content');
            if (content) content.style.maxHeight = content.scrollHeight + 'px';
            if (icon) icon.textContent = '×';
            header.setAttribute('aria-expanded', 'true');
        }
    }

    headers.forEach(header => {
        header.addEventListener('click', () => toggleItem(header));
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleItem(header);
            }
        });
    });
}
