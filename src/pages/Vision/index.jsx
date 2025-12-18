import Button from '../../components/Button';
import './style.css';

const Vision = () => {
    return (
        <main className="vision-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Our Vision</h1>
                    <p className="page-subtitle">
                        Where we came from, where we are, and where we're going.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section timeline-section">
                <div className="container">
                    <div className="timeline">
                        {/* The Beginning */}
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass">
                                <span className="timeline-label">The Beginning</span>
                                <h2>Why We Started</h2>
                                <p>
                                    Cornerstone Tech Studio was born from a simple observation:
                                    too many businesses and organizations struggle to find technology
                                    partners who truly understand their needs.
                                </p>
                                <p>
                                    We saw churches with outdated websites, small businesses missing
                                    opportunities online, and community organizations unable to reach
                                    the people they serve. We knew we could help.
                                </p>
                            </div>
                        </div>

                        {/* Today */}
                        <div className="timeline-item">
                            <div className="timeline-marker active"></div>
                            <div className="timeline-content glass">
                                <span className="timeline-label">Today</span>
                                <h2>What We're Building</h2>
                                <p>
                                    Right now, we're focused on creating meaningful digital
                                    solutions for businesses and organizations. Every project
                                    teaches us something new and makes us better at what we do.
                                </p>
                                <ul className="building-list">
                                    <li>High-quality websites that build trust and credibility</li>
                                    <li>Dynamic platforms that grow with our clients</li>
                                    <li>Long-term partnerships based on shared success</li>
                                    <li>A portfolio that speaks for itself</li>
                                </ul>
                            </div>
                        </div>

                        {/* The Future */}
                        <div className="timeline-item">
                            <div className="timeline-marker future"></div>
                            <div className="timeline-content glass">
                                <span className="timeline-label">The Future</span>
                                <h2>Where We're Going</h2>
                                <p>
                                    Our vision extends beyond individual projects. We're building
                                    toward a future where:
                                </p>
                                <div className="future-vision">
                                    <div className="vision-item">
                                        <span className="vision-icon">🏛️</span>
                                        <div>
                                            <h3>Platform Ecosystem</h3>
                                            <p>
                                                Creating integrated platforms that serve entire
                                                communities—not just individual businesses.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="vision-item">
                                        <span className="vision-icon">🌍</span>
                                        <div>
                                            <h3>Global Reach</h3>
                                            <p>
                                                Empowering businesses and organizations around
                                                the world with accessible technology.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="vision-item">
                                        <span className="vision-icon">🤖</span>
                                        <div>
                                            <h3>Innovation</h3>
                                            <p>
                                                Leveraging emerging technologies to create even
                                                more powerful solutions for our clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="section commitment-section">
                <div className="container">
                    <div className="commitment-content glass">
                        <h2>Our Commitment</h2>
                        <p>
                            No matter how we grow, our core commitment remains the same:
                            to be a trusted technology partner for businesses and communities
                            who want to grow with purpose.
                        </p>
                        <p>
                            We will always prioritize relationships over transactions,
                            outcomes over features, and long-term value over short-term gains.
                        </p>
                        <p>
                            This is our cornerstone. This is who we are.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Be Part of the Journey</h2>
                    <p>
                        We're always looking to partner with businesses and organizations
                        who share our values.
                    </p>
                    <Button to="/contact" variant="primary" size="large">
                        Let's Connect
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default Vision;
