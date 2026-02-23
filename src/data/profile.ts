/**
 * Profile data — contact information and social links for Kier Vincent Oclares.
 */

/** Represents a single social/contact link. */
export interface SocialLink {
    label: string;
    url: string;
    icon: 'email' | 'phone' | 'linkedin' | 'github';
}

/** Core profile data shape. */
export interface Profile {
    name: string;
    titles: string[];
    location: string;
    email: string;
    phone: string;
    about: string;
    socials: SocialLink[];
}

/** Hardcoded profile constants. */
export const PROFILE: Profile = {
    name: 'Kier Vincent Oclares',
    titles: [
        'Full Stack Developer',
        'Data Engineer',
        'AI Integration Specialist',
    ],
    location: 'Edmonton, Alberta, Canada',
    email: 'KierVOclares@gmail.com',
    phone: '+1 (780) 920-8681',
    about:
        'I am a Full Stack Developer and Data Engineer with a strong foundation in electronics engineering technology and data analytics from NAIT. Currently working at the Government of Alberta, I design and build AI-assisted data pipelines, machine learning solutions, and web applications that turn complex systems into clear, actionable insights. My work bridges the gap between raw engineering discipline and modern software — combining Python, TypeScript, and Azure AI Services to deliver scalable, impactful tools.',
    socials: [
        {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kier-vincent-o-2150051a0/',
            icon: 'linkedin',
        },
        {
            label: 'GitHub',
            url: 'https://github.com/KVOclares',
            icon: 'github',
        },
        {
            label: 'KierVOclares@gmail.com',
            url: 'mailto:KierVOclares@gmail.com',
            icon: 'email',
        },
        {
            label: '+1 (780) 920-8681',
            url: 'tel:+17809208681',
            icon: 'phone',
        },
    ],
};
