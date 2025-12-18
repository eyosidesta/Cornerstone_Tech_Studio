import { useState, useEffect, useCallback } from 'react';
import './style.css';

const Testimonial = ({ testimonials = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = useCallback(() => {
        if (testimonials.length <= 1) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setIsAnimating(false);
        }, 300);
    }, [testimonials.length]);

    const prevSlide = () => {
        if (testimonials.length <= 1) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
            );
            setIsAnimating(false);
        }, 300);
    };

    const goToSlide = (index) => {
        if (index === currentIndex || testimonials.length <= 1) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsAnimating(false);
        }, 300);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        if (testimonials.length <= 1) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length, nextSlide]);

    if (!testimonials.length) {
        return null;
    }

    const current = testimonials[currentIndex];

    return (
        <div className="testimonial-slider">
            <div className={`testimonial-card glass ${isAnimating ? 'animating' : ''}`}>
                <div className="testimonial-quote-icon">"</div>
                <blockquote className="testimonial-quote">
                    {current.quote}
                </blockquote>
                <div className="testimonial-author">
                    <div className="author-info">
                        <span className="author-name">{current.name}</span>
                        <span className="author-org">{current.organization}</span>
                    </div>
                </div>
            </div>

            {testimonials.length > 1 && (
                <>
                    <div className="testimonial-controls">
                        <button
                            className="control-btn prev"
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                        >
                            ←
                        </button>
                        <button
                            className="control-btn next"
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                        >
                            →
                        </button>
                    </div>

                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Testimonial;
