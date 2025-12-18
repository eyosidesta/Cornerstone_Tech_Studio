import Button from '../../components/Button';
import { services } from '../../data/services';
import './style.css';

const Services = () => {
    return (
        <main className="services-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">How We Help</h1>
                    <p className="page-subtitle">
                        We build digital solutions that solve real business problems.
                        No jargon, no unnecessary complexity—just technology that works for you.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card glass">
                                <div className="service-icon">{service.icon}</div>
                                <h2 className="service-title">{service.title}</h2>
                                <p className="service-description">{service.description}</p>

                                <div className="service-benefits">
                                    <h3>What You Get</h3>
                                    <ul>
                                        {service.benefits.map((benefit, index) => (
                                            <li key={index}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-problems">
                                    <h3>Problems We Solve</h3>
                                    <ul>
                                        {service.problemsSolved.map((problem, index) => (
                                            <li key={index}>{problem}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="service-cta">
                                    <Button to="/contact" variant="outline" size="medium">
                                        Let's Talk About This
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">How We Work</h2>
                        <p className="section-subtitle">
                            A simple, collaborative process focused on delivering real value
                        </p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step glass">
                            <span className="step-number">01</span>
                            <h3>Discover</h3>
                            <p>We listen to understand your business, goals, and challenges.</p>
                        </div>
                        <div className="process-step glass">
                            <span className="step-number">02</span>
                            <h3>Design</h3>
                            <p>We create a plan that addresses your needs and fits your budget.</p>
                        </div>
                        <div className="process-step glass">
                            <span className="step-number">03</span>
                            <h3>Build</h3>
                            <p>We develop your solution with regular updates and feedback.</p>
                        </div>
                        <div className="process-step glass">
                            <span className="step-number">04</span>
                            <h3>Grow</h3>
                            <p>We continue to support and evolve your platform as you grow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content glass">
                        <h2>Ready to discuss your project?</h2>
                        <p>
                            Every project starts with a conversation. Let's talk about
                            what you're looking to achieve.
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

export default Services;
