import Button from '../../components/Button';
import Card from '../../components/Card';
import Testimonial from '../../components/Testimonial';
import { getFeaturedProjects } from '../../data/projects';
import { testimonials } from '../../data/testimonials';
import './style.css';

const Home = () => {
    const featuredProjects = getFeaturedProjects();

    const howWeHelp = [
        {
            icon: '🌐',
            title: 'Professional Online Presence',
            description: 'Build trust with a website that reflects the quality of your business.'
        },
        {
            icon: '📈',
            title: 'Increased Visibility',
            description: 'Be found by customers who are searching for what you offer.'
        },
        {
            icon: '⚡',
            title: 'Scalable Digital Systems',
            description: 'Grow your business with technology that grows with you.'
        },
        {
            icon: '🤝',
            title: 'Long-Term Partnership',
            description: 'We\'re not just builders—we\'re your technology partners.'
        }
    ];

    return (
        <main className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title animate-fade-in">
                            Building Digital Platforms
                            <span className="text-gradient"> That Help Businesses Grow</span>
                        </h1>
                        <p className="hero-subtitle animate-fade-in">
                            We create professional websites and technology solutions that
                            establish trust, reach more customers, and scale with your vision.
                        </p>
                        <div className="hero-buttons animate-fade-in">
                            <Button to="/projects" variant="primary" size="large">
                                View Projects
                            </Button>
                            <Button to="/contact" variant="secondary" size="large">
                                Let's Talk
                            </Button>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-glow"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">What Clients Say</h2>
                        <p className="section-subtitle">
                            Real feedback from businesses we've partnered with
                        </p>
                    </div>
                    <Testimonial testimonials={testimonials} />
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="section projects-section">
                <div className="container">
                    <div className="section-header">
                        <div>
                            <h2 className="section-title">Featured Projects</h2>
                            <p className="section-subtitle">
                                Real solutions we've built for real businesses
                            </p>
                        </div>
                        <Button to="/projects" variant="outline" size="medium">
                            View All Projects
                        </Button>
                    </div>
                    <div className="projects-grid">
                        {featuredProjects.map((project) => (
                            <Card
                                key={project.id}
                                image={project.thumbnail}
                                title={project.name}
                                description={project.shortDescription}
                                link={`/projects/${project.id}`}
                                linkText="View Project"
                                comingSoon={project.comingSoon}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="section help-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">How We Help Businesses Grow</h2>
                        <p className="section-subtitle">
                            Simple, outcome-focused solutions for your digital needs
                        </p>
                    </div>
                    <div className="help-grid">
                        {howWeHelp.map((item, index) => (
                            <div key={index} className="help-item glass">
                                <span className="help-icon">{item.icon}</span>
                                <h3 className="help-title">{item.title}</h3>
                                <p className="help-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Built in Public Section */}
            <section className="section evolving-section">
                <div className="container">
                    <div className="evolving-content glass">
                        <div className="evolving-text">
                            <h2>Always Building. Always Improving.</h2>
                            <p>
                                This website and our business are continuously evolving. We believe in
                                transparency, growth, and building in the open. Every project teaches us
                                something new, and we bring those lessons to every client we serve.
                            </p>
                        </div>
                        <div className="evolving-cta">
                            <Button to="/vision" variant="outline">
                                See Our Vision →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Build Something Great?</h2>
                        <p>
                            Let's discuss how we can help your business grow with technology.
                        </p>
                        <Button to="/contact" variant="primary" size="large">
                            Start the Conversation
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
