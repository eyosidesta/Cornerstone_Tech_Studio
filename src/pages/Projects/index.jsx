import { useState } from 'react';
import Card from '../../components/Card';
import { projects, getProjectsByCategory } from '../../data/projects';
import './style.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'organization', label: 'Organizations' },
        { id: 'business', label: 'Businesses' },
        { id: 'community', label: 'Community' }
    ];

    const filteredProjects = getProjectsByCategory(activeFilter);

    return (
        <main className="projects-page">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Our Projects</h1>
                    <p className="page-subtitle">
                        Real solutions we've built for real businesses and organizations.
                        Each project represents a partnership built on trust and shared vision.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="filter-section">
                <div className="container">
                    <div className="filter-buttons">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section">
                <div className="container">
                    <div className="projects-grid">
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                image={project.thumbnail}
                                title={project.name}
                                description={project.shortDescription}
                                link={`/projects/${project.id}`}
                                linkText="View Details"
                                comingSoon={project.comingSoon}
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="empty-state glass">
                            <p>No projects found in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Projects;
