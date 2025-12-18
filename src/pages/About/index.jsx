import Button from '../../components/Button';
import './style.css';

const About = () => {
    return (
        <main className="about-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">About Us</h1>
                    <p className="page-subtitle">
                        The story behind Cornerstone Tech Studio and why we exist.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-story">
                            <h2>Why We Exist</h2>
                            <p>
                                Cornerstone Tech Studio was founded with a simple belief:
                                <strong> technology should empower businesses, not overwhelm them.</strong>
                            </p>
                            <p>
                                Too many businesses struggle with outdated websites, confusing systems,
                                and technology that doesn't work for them. We saw an opportunity to
                                be different—to build solutions that actually help businesses grow,
                                not just check a box.
                            </p>
                            <p>
                                We're not just developers who write code and disappear. We're partners
                                who invest in understanding your business, your challenges, and your
                                vision. When you work with us, you're getting more than a website—you're
                                getting a long-term relationship with someone who cares about your success.
                            </p>
                        </div>

                        <div className="about-values glass">
                            <h3>What We Believe</h3>
                            <ul className="values-list">
                                <li>
                                    <span className="value-icon">🤝</span>
                                    <div>
                                        <strong>Partnership Over Transactions</strong>
                                        <p>We build long-term relationships, not one-off projects.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="value-icon">🎯</span>
                                    <div>
                                        <strong>Outcomes Over Features</strong>
                                        <p>We focus on business results, not just technical deliverables.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="value-icon">💡</span>
                                    <div>
                                        <strong>Clarity Over Complexity</strong>
                                        <p>We communicate in plain language and build simple solutions.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="value-icon">🌱</span>
                                    <div>
                                        <strong>Growth Over Perfection</strong>
                                        <p>We believe in continuous improvement—for ourselves and our clients.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section approach-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Approach</h2>
                        <p className="section-subtitle">
                            How we work with businesses and organizations
                        </p>
                    </div>
                    <div className="approach-grid">
                        <div className="approach-item glass">
                            <h3>We Listen First</h3>
                            <p>
                                Before we write a single line of code, we take time to understand
                                your business, your customers, and your goals. This ensures that
                                what we build actually serves your needs.
                            </p>
                        </div>
                        <div className="approach-item glass">
                            <h3>We Communicate Clearly</h3>
                            <p>
                                No technical jargon. No confusing proposals. We explain everything
                                in plain language so you always know what you're getting and why.
                            </p>
                        </div>
                        <div className="approach-item glass">
                            <h3>We Build for the Long Term</h3>
                            <p>
                                We don't just build and leave. We create solutions designed to
                                grow with your business, and we're here to support you as you evolve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="section community-section">
                <div className="container">
                    <div className="community-content glass">
                        <h2>Community-Driven</h2>
                        <p>
                            We have a special place in our hearts for organizations that serve
                            their communities—churches, non-profits, community groups. We understand
                            the unique challenges you face and the impact technology can have on
                            your mission.
                        </p>
                        <p>
                            When you work with us, you're not just getting a service provider.
                            You're getting a partner who shares your values and wants to see
                            your community thrive.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container text-center">
                    <h2>Let's Build Something Together</h2>
                    <p>
                        Ready to see how we can help your business or organization grow?
                    </p>
                    <Button to="/contact" variant="primary" size="large">
                        Start a Conversation
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default About;
