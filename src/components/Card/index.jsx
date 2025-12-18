import { Link } from 'react-router-dom';
import './style.css';

const Card = ({
    image,
    title,
    description,
    link,
    linkText = 'View Details',
    variant = 'default',
    onClick,
    comingSoon = false,
    className = ''
}) => {
    const cardContent = (
        <>
            {image && (
                <div className="card-image">
                    <img src={image} alt={title} loading="lazy" />
                    {comingSoon && <span className="card-badge">Coming Soon</span>}
                </div>
            )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                {description && <p className="card-description">{description}</p>}
                {link && !comingSoon && (
                    <span className="card-link">
                        {linkText} <span className="arrow">→</span>
                    </span>
                )}
            </div>
        </>
    );

    const cardClasses = `card card-${variant} ${comingSoon ? 'card-coming-soon' : ''} ${className}`.trim();

    if (link && !comingSoon) {
        return (
            <Link to={link} className={cardClasses}>
                {cardContent}
            </Link>
        );
    }

    return (
        <div className={cardClasses} onClick={onClick}>
            {cardContent}
        </div>
    );
};

export default Card;
