// Project data - structured for future backend API integration
import geecWelcome from '../assets/images/geec_welcome.jpg';
import geecHeroServices from '../assets/images/geec_hero_services.jpg';
import geecContact from '../assets/images/geec_contact.jpg';
import geecSermons from '../assets/images/geec_sermons.jpg';
import geecFooter from '../assets/images/geec_footer.jpg';

export const projects = [
    {
        id: 'geec-vancouver',
        name: 'GEEC Vancouver Church',
        category: 'organization',
        description: 'A comprehensive church platform built for Grace Ethiopian Evangelical Church Vancouver. Features include a dynamic sermon management system with bilingual support (English and Amharic), an integrated event calendar, ministry pages, and a welcoming online presence that serves their diverse community. The website enables members to stay connected, access sermons, and engage with church activities.',
        shortDescription: 'Community church platform with bilingual sermon support and ministry management',
        thumbnail: geecWelcome,
        images: [geecWelcome, geecHeroServices, geecContact, geecSermons, geecFooter],
        liveUrl: 'https://geecvancouver.org',
        features: [
            'Bilingual sermon library (English & Amharic)',
            'Event management system',
            'Ministry showcase pages',
            'Contact form integration',
            'Mobile-responsive design'
        ],
        testimonial: {
            quote: 'Cornerstone Tech Studio understood our vision and built a platform that truly serves our community. The bilingual features have helped us connect with members across generations.',
            name: 'Church Leadership Team',
            organization: 'GEEC Vancouver'
        },
        year: '2024'
    },
    {
        id: 'coming-soon-1',
        name: 'Business Platform',
        category: 'business',
        description: 'A modern business management platform designed to streamline operations and enhance customer engagement. Currently in development.',
        shortDescription: 'Streamlined business operations platform',
        thumbnail: null,
        images: [],
        liveUrl: null,
        features: [
            'Customer management',
            'Analytics dashboard',
            'Automated workflows'
        ],
        testimonial: null,
        year: '2025',
        comingSoon: true
    },
    {
        id: 'coming-soon-2',
        name: 'Community Hub',
        category: 'community',
        description: 'A digital platform designed to connect community members and facilitate meaningful interactions. Currently in development.',
        shortDescription: 'Digital community connection platform',
        thumbnail: null,
        images: [],
        liveUrl: null,
        features: [
            'Member directory',
            'Event coordination',
            'Resource sharing'
        ],
        testimonial: null,
        year: '2025',
        comingSoon: true
    }
];

export const getProjectById = (id) => {
    return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
    if (!category || category === 'all') return projects;
    return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
    return projects.filter(project => !project.comingSoon).slice(0, 4);
};

export default projects;
