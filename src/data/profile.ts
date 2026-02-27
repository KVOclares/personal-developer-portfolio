/**
 * Profile data — contact information and social links for Kier Vincent Oclares.
 */
import type { Profile } from '../types';
import profilePhoto from '../assets/images/profile.webp';

/** Hardcoded profile constants. */
export const PROFILE: Profile = {
    name: 'Kier Vincent Oclares',
    titles: [
        'Machine Learning Developer',
        'Data & Systems Analyst',
        'Your Future Full Stack Developer',
    ],
    location: 'Edmonton, Alberta, Canada',
    email: 'KierVOclares@gmail.com',
    phone: '+1 (780) 920-8681',
    about:
        'Pipelines that don\'t break. Dashboards that actually get used. AI tools that make work faster and smarter. That\'s what I build — and I\'ve been doing it at the Government of Alberta.',
    bio: [
        'My path into tech started with Electronic Engineering Technology at NAIT, where I developed a systems-thinking mindset that most pure developers don\'t have. That foundation led me into telecommunications, then data analytics, and now AI-assisted development at the Government of Alberta.',
        'At the GoA, I build and maintain ETL pipelines that process thousands of daily records, engineer Power BI dashboards used by executives, and develop Python-based tools that automate what used to take hours. I care about data accuracy — I moved one system from 80% to 99% accuracy and I\'m proud of that number.',
        'I\'m now building full stack web applications to complement my data background. My goal is to be the developer who can own the entire stack — from the database query to the React component — and I\'m getting there one project at a time.',
    ],
    availability: true,
    availabilityNote: 'Available for Opportunities!',
    resumeUrl: "/assets/resume/KierVincentOclares_Resume.pdf",
    siteUrl: "https://kiervoclares.works",
    photo: profilePhoto,
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
