'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '',
    phone: '',
    subject: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [openAccordion, setOpenAccordion] = useState(0)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = (data) => {
    let isValid = true;
    const errors = {};

    // Require service selection
    if (!data.service) {
      errors.service = 'Please select a service.';
      isValid = false;
    }

    // Validate full name
    if (data.name.trim().length < 2) {
      errors.name = 'Please enter your full name';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate subject
    if (data.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters long';
      isValid = false;
    }

    // Validate message
    if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    return { isValid, errors };
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('Sending...')

    const { isValid, errors } = validateForm(formData);

    if (!isValid) {
      setFormStatus(Object.values(errors)[0]);
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          service: formData.service,
          email: formData.email,
          countryCode: formData.countryCode,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          countryCode: '',
          phone: '',
          subject: '',
          service: '',
          message: ''
        })
      } else {
        setFormStatus(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.')
    }
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }

  const faqs = [
    {
      title: 'What Services Do you Offer?',
      content: 'We Specialize In Graphics Design, 3D Animation, UI/UX Design, Web Design, Motion Graphics, Digital Marketing, Branding And Packaging.'
    },
    {
      title: 'How Do You Approach A New Project?',
      content: 'Our process begins with discovery and research, followed by concept development, design refinement, and final delivery. We maintain close collaboration with clients throughout, ensuring the final product exceeds expectations.'
    },
    {
      title: 'How Long Does It Take To Complete A Project?',
      content: 'Project timelines vary depending on scope and complexity. A typical branding project takes 2-3 months, while web development can range from 1-4 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      title: 'What Makes Your Design Process Unique?',
      content: 'We combine data-driven insights with creative innovation, ensuring designs that are both visually stunning and strategically effective. Our collaborative approach and attention to detail set us apart.'
    },
    {
      title: 'Can You Customize Designs Based On My Brand?',
      content: 'Absolutely! We tailor every design to reflect your unique brand identity and requirements.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container container">
          {/* Left: Hero Text & Info */}
          <div className="contact-hero-left">
            <p className="contact-kicker">CONTACT US</p>
            <h1 className="contact-title">Get in Touch with Us</h1>
            <p className="contact-subtitle">Craving Creativity or got feedback? Let's dive in. Whether you're interested in learning more about our services or need support,<br />we're happy to help.</p>
            <ul className="contact-list">
              <li><span className="checkmark">✓</span>User-Centric Design</li>
              <li><span className="checkmark">✓</span>Scalable Solutions</li>
              <li><span className="checkmark">✓</span>Innovative Concepts</li>
              <li><span className="checkmark">✓</span>Reliable Delivery</li>
            </ul>
            <div className="contact-info-block">
              <h3>GENERAL CONTACT INFO</h3>
              <p>For questions, technical assistance or collaboration <br /> opportunities reach out via the information provided.</p>
              <div><span className="label">Phone:</span> <span className="value">+91 898 351 6874</span></div>
              <div><span className="label">Email:</span> <span className="value">funnkar.designhouse@gmail.com</span></div>
              <div><span className="label">Location:</span> <span className="value">Nashik, Maharashtra</span></div>
            </div>
          </div>
          {/* Right: Contact Form Card */}
          <div className="contact-form-stack">
            <div className="contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
                <div id="formStatus" className="form-status" role="status" aria-live="polite">{formStatus}</div>
                <div className="contact-form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="name" className="form-label">Name<span className="required">*</span></label>
                    <input type="text" id="name" name="name" className="form-input" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="email" className="form-label">Email Address<span className="required">*</span></label>
                    <input type="email" id="email" name="email" className="form-input" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group phone-group-left">
                    <label htmlFor="countryCode" className="form-label">Phone Number</label>
                    <select id="countryCode" name="countryCode" className="form-select country-code-select" value={formData.countryCode} onChange={handleInputChange}>
                      <option value="">Country Code</option>
                      <option value="+1">US +1</option>
                      <option value="+91">IN +91</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="form-group phone-group-right">
                    <label htmlFor="phone" className="form-label" style={{ opacity: 0, pointerEvents: 'none' }}>Phone</label>
                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div className="form-group full-width">
                    <label htmlFor="subject" className="form-label">Subject<span className="required">*</span></label>
                    <input type="text" id="subject" name="subject" className="form-input" placeholder="Enter Subject" value={formData.subject} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Service<span className="required">*</span></label>
                    <div className="service-list" role="radiogroup" aria-label="Select a service">
                      {['graphics-design', '3d-animation', 'ui-ux-design', 'branding', 'web-design', 'motion-graphics', 'digital-marketing', 'packaging', 'other'].map(service => (
                        <label key={service} className="service-option">
                          <input type="radio" name="service" value={service} checked={formData.service === service} onChange={handleInputChange} required />
                          <span>{service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message<span className="required">*</span></label>
                    <textarea id="message" name="message" className="form-textarea" value={formData.message} onChange={handleInputChange} required placeholder="Write your message..."></textarea>
                  </div>
                </div>
              </form>
            </div>
            <button type="submit" onClick={handleSubmit} className="contact-submit-btn">Send Message</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'none', padding: 0, margin: 0 }}>
        <div style={{ maxWidth: '1350px', margin: '3rem auto 3rem auto', background: '#1a1a1a', borderRadius: '32px', padding: '3.5rem 2.5rem 3.5rem 2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'flex-start' }}>
          {/* Left: FAQ Title, Subtitle, and Image */}
          <div style={{ flex: '1 1 420px', minWidth: '320px', maxWidth: '600px' }}>
            <span style={{ display: 'inline-block', background: '#18191b', color: '#fff', fontSize: '0.95rem', fontWeight: 500, borderRadius: '18px', padding: '0.35em 1.2em 0.35em 1.2em', marginBottom: '1.5rem' }}>Frequently Asked Questions</span>
            <h2 style={{ color: '#fff', fontSize: '2.7rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.15 }}>Get All Your Questions<br />Answered Here</h2>
            <p style={{ color: '#a0a0a0', fontSize: '1.1rem', fontWeight: 400, marginBottom: '1.5rem' }}>Have Questions? Here Are Quick Answers To Some Of<br />The Most Common Queries About Our Services And Process</p>
            <img src="/tommy_cat.png" alt="FAQ Support" style={{ maxWidth: '420px', borderRadius: '15px', marginTop: '0.5px', marginLeft: '30px' }} loading="lazy" />
          </div>
          {/* Right: Accordion */}
          <div style={{ flex: '1 1 360px', minWidth: '340px', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item" style={{ background: '#2d2d2d', borderRadius: '12px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)', border: '1px solid #444' }}>
                <div className="accordion-header" style={{ padding: '1.2rem 1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} onClick={() => toggleAccordion(index)}>
                  <h3 className="accordion-title" style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 600, margin: 0 }}>{faq.title}</h3>
                  <span className="accordion-icon" style={{ fontSize: '1.5rem', color: '#fff' }}>{openAccordion === index ? '×' : '+'}</span>
                </div>
                {openAccordion === index && (
                  <div className="accordion-content" style={{ padding: '0 1.5rem 1.2rem 1.5rem', color: '#a0a0a0' }}>
                    {faq.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer Merged Section */}
      <section className="cta-footer-merged">
        <div className="cta-footer-content">
          <div className="cta-footer-bottom">
            <span className="cta-footer-copyright">Copyright © 2025 Funnkar Design House. All rights reserved</span>
            <span className="cta-footer-privacy"><a href="/privacy">Privacy & Terms</a></span>
            <div className="cta-footer-socials">
              <a href="https://www.linkedin.com/company/funnkar-design-house/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/funnkar_design_house?igsh=YnRvNjY5YmtuNHl5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/instagram-icon.svg" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
