/**
 * Profile data — contact information and social links for Kier Vincent Oclares.
 */
import type { Profile } from '../types';

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
