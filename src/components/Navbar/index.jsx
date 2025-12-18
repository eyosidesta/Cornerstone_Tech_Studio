import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/projects', label: 'Projects' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About' },
        { path: '/vision', label: 'Vision' },
        { path: '/contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-text">Cornerstone</span>
                    <span className="logo-accent">Tech Studio</span>
                </Link>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
            )}
        </nav>
    );
};

export default Navbar;
