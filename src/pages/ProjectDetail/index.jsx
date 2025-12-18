import { useParams, Link } from 'react-router-dom';
import Button from '../../components/Button';
import ProjectGallery from '../../components/ProjectGallery';
import { getProjectById } from '../../data/projects';
import './style.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    if (!project) {
        return (
            <main className="project-detail-page">
                <div className="container">
                    <div className="not-found glass">
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist or has been moved.</p>
                        <Button to="/projects" variant="primary">
                            View All Projects
                        </Button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="project-detail-page">
            {/* Hero Section */}
            <section className="project-hero">
                <div className="container">
                    <Link to="/projects" className="back-link">
                        ← Back to Projects
                    </Link>
                    <h1 className="project-title">{project.name}</h1>
                    <div className="project-meta">
                        <span className="meta-item category">{project.category}</span>
                        <span className="meta-item year">{project.year}</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div className="project-content">
                        {/* Overview */}
                        <div className="project-overview">
                            <h2>Project Overview</h2>
                            <p>{project.description}</p>

                            {project.features && project.features.length > 0 && (
                                <div className="project-features">
                                    <h3>Key Features</h3>
                                    <ul>
                                        {project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.liveUrl && (
                                <div className="project-cta">
                                    <Button href={project.liveUrl} variant="primary" size="medium">
                                        Visit Live Website →
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Testimonial */}
                        {project.testimonial && (
                            <div className="project-testimonial glass">
                                <div className="quote-icon">"</div>
                                <blockquote>
                                    {project.testimonial.quote}
                                </blockquote>
                                <cite>
                                    <strong>{project.testimonial.name}</strong>
                                    <span>{project.testimonial.organization}</span>
                                </cite>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
                <section className="section gallery-section">
                    <div className="container">
                        <h2>Project Gallery</h2>
                        <ProjectGallery images={project.images} projectName={project.name} />
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2>Want something similar for your business?</h2>
                        <p>Let's discuss how we can build a custom solution for you.</p>
                        <Button to="/contact" variant="primary" size="large">
                            Start a Conversation
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetail;
