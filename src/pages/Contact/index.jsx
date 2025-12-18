import { useState } from 'react';
import Button from '../../components/Button';
import './style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        business: '',
        inquiryType: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inquiryTypes = [
        { value: '', label: 'Select an option...' },
        { value: 'new-project', label: 'New Project' },
        { value: 'consultation', label: 'General Consultation' },
        { value: 'partnership', label: 'Partnership Opportunity' },
        { value: 'other', label: 'Other' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Simulate form submission (replace with actual API call when backend is ready)
        try {
            // For now, just log to console and show success
            console.log('Form submitted:', formData);

            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            setStatus({
                type: 'success',
                message: 'Thank you for reaching out! We\'ll get back to you within 24-48 hours.'
            });
            setFormData({ name: '', email: '', business: '', inquiryType: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or email us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contact-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Let's Talk</h1>
                    <p className="page-subtitle">
                        Have an idea? A question? Just want to say hello?
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <div className="contact-form-wrapper glass">
                            <h2>Send Us a Message</h2>
                            <p className="form-intro">
                                Tell us a bit about yourself and what you're looking for.
                                We'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="business">Business/Organization Name</label>
                                    <input
                                        type="text"
                                        id="business"
                                        name="business"
                                        value={formData.business}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inquiryType">What are you looking for?</label>
                                    <select
                                        id="inquiryType"
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                    >
                                        {inquiryTypes.map(type => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your project or question..."
                                    />
                                </div>

                                {status.message && (
                                    <div className={`form-status ${status.type}`}>
                                        {status.message}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    fullWidth
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <div className="info-card glass">
                                <h3>Prefer to email directly?</h3>
                                <p>
                                    Reach out to us at <a href="mailto:hello@cornerstonetech.studio">hello@cornerstonetech.studio</a>
                                </p>
                            </div>

                            <div className="info-card glass">
                                <h3>What happens next?</h3>
                                <ol>
                                    <li>We'll review your message within 24 hours</li>
                                    <li>We'll schedule a call to discuss your needs</li>
                                    <li>We'll provide a clear proposal if we're a good fit</li>
                                </ol>
                            </div>

                            <div className="info-card glass">
                                <h3>No pressure. No obligations.</h3>
                                <p>
                                    Every conversation starts with listening. We're here to
                                    understand your needs, not to push a sale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
