// Testimonials data - structured for future backend API integration

export const testimonials = [
    {
        id: 1,
        quote: 'Cornerstone Tech Studio understood our vision and built a platform that truly serves our community. The bilingual features have helped us connect with members across generations.',
        name: 'Church Leadership Team',
        organization: 'GEEC Vancouver',
        role: 'Client',
        image: null
    },
    // {
    //     id: 2,
    //     quote: 'Working with Cornerstone was a great experience. They took the time to understand our needs and delivered a solution that exceeded our expectations.',
    //     name: 'Future Client',
    //     organization: 'Business Name',
    //     role: 'Founder',
    //     image: null
    // },
    // {
    //     id: 3,
    //     quote: 'The attention to detail and commitment to quality sets Cornerstone Tech Studio apart. They are true partners in building digital solutions.',
    //     name: 'Community Leader',
    //     organization: 'Organization Name',
    //     role: 'Director',
    //     image: null
    // }
];

export const getFeaturedTestimonials = () => {
    return testimonials.slice(0, 3);
};

export default testimonials;
