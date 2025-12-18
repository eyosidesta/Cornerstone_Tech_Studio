import { useState } from 'react';
import './style.css';

const ProjectGallery = ({ images = [], projectName = 'Project' }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = '';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage(e);
        if (e.key === 'ArrowLeft') prevImage(e);
    };

    if (!images.length) {
        return (
            <div className="gallery-empty glass">
                <p>No images available</p>
            </div>
        );
    }

    return (
        <>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className="gallery-item"
                        onClick={() => openLightbox(index)}
                        aria-label={`View ${projectName} screenshot ${index + 1}`}
                    >
                        <img src={image} alt={`${projectName} screenshot ${index + 1}`} loading="lazy" />
                        <div className="gallery-overlay">
                            <span className="zoom-icon">🔍</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="lightbox"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-label="Image lightbox"
                >
                    <button
                        className="lightbox-close"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        ×
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt={`${projectName} full view`} />
                    </div>

                    {images.length > 1 && (
                        <>
                            <button
                                className="lightbox-nav prev"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                ←
                            </button>
                            <button
                                className="lightbox-nav next"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                →
                            </button>
                            <div className="lightbox-counter">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default ProjectGallery;
