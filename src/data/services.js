// Services data - business-focused descriptions without pricing

export const services = [
    {
        id: 'business-websites',
        title: 'Business Websites',
        description: 'Professional websites that establish your online presence and build trust with potential customers. Designed to convert visitors into clients.',
        icon: '🌐',
        benefits: [
            'Establish credibility and trust',
            'Reach customers 24/7',
            'Showcase your products and services',
            'Generate leads and inquiries'
        ],
        problemsSolved: [
            'No online presence',
            'Outdated website hurting credibility',
            'Difficulty reaching new customers',
            'Losing business to competitors'
        ]
    },
    {
        id: 'dynamic-platforms',
        title: 'Dynamic Platforms',
        description: 'Interactive web applications that grow with your business. From member portals to content management systems, we build platforms that work for you.',
        icon: '⚡',
        benefits: [
            'Automate repetitive tasks',
            'Manage content easily',
            'Engage users with interactive features',
            'Scale as your business grows'
        ],
        problemsSolved: [
            'Manual processes consuming time',
            'Difficulty managing content updates',
            'Limited user engagement',
            'Systems that don\'t scale'
        ]
    },
    {
        id: 'custom-solutions',
        title: 'Custom Digital Solutions',
        description: 'Unique technology solutions tailored to your specific business challenges. We partner with you to design and build exactly what you need.',
        icon: '🔧',
        benefits: [
            'Solutions built for your exact needs',
            'Competitive advantage',
            'Long-term partnership approach',
            'Ongoing support and evolution'
        ],
        problemsSolved: [
            'Off-the-shelf software doesn\'t fit',
            'Unique business requirements',
            'Integration challenges',
            'Need for custom workflows'
        ]
    }
];

export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};

export default services;
