import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/projects', label: 'Projects' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About' },
        { path: '/vision', label: 'Vision' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-text">Cornerstone</span>
                            <span className="logo-accent">Tech Studio</span>
                        </Link>
                        <p className="footer-description">
                            Building digital platforms that help businesses grow.
                            Your technology partner for the long term.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-title">Get In Touch</h4>
                        <p className="footer-contact">
                            Ready to discuss your project?
                        </p>
                        <Link to="/contact" className="footer-cta">
                            Let's Talk →
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Cornerstone Tech Studio. All rights reserved.
                    </p>
                    <p className="footer-tagline">
                        Built with passion. Designed to grow.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
