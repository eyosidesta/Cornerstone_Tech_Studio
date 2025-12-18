import { Link } from 'react-router-dom';
import './style.css';

const Button = ({
    children,
    variant = 'primary',
    href,
    to,
    onClick,
    type = 'button',
    size = 'medium',
    fullWidth = false,
    disabled = false,
    className = ''
}) => {
    const buttonClasses = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`.trim();

    // External link
    if (href) {
        return (
            <a
                href={href}
                className={buttonClasses}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }

    // Internal link (React Router)
    if (to) {
        return (
            <Link to={to} className={buttonClasses}>
                {children}
            </Link>
        );
    }

    // Regular button
    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
