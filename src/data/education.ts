/**
 * Education data — academic credential entries, certifications, and learning goals.
 */
import type { EducationEntry, Certification } from '../types';

/** All education entries (newest first). */
export const EDUCATION: EducationEntry[] = [
    {
        kind: 'education',
        degree: 'Post-Diploma Certificate with Honors',
        field: 'Data Analytics',
        institution: 'NAIT — Northern Alberta Institute of Technology',
        period: 'September 2024 – April 2025',
        honors: true,
        coursework: [
            'Statistical Learning',
            'Machine Learning',
            'Data Preparation',
            'Data Visualization',
            'Data Governance',
        ],
    },
    {
        kind: 'education',
        degree: 'Diploma with Honors',
        field: 'Electronic Engineering Technology',
        institution: 'NAIT — Northern Alberta Institute of Technology',
        period: '2018 – 2020',
        honors: true,
        coursework: [
            'Circuit Analysis',
            'Digital Systems',
            'Telecommunications',
            'Control Systems',
            'Technical Documentation',
        ],
    },
];

/** Certifications and professional training credentials. */
export const CERTIFICATIONS: Certification[] = [
    {
        title: 'CPR/AED/First Aid',
        issuer: 'St. John Ambulance',
        status: 'active' as const,
    },
];

/** Technologies currently being learned — rendered as animated pill badges. */
export const CURRENTLY_LEARNING: string[] = [
    'React + TypeScript',
    'Node.js + Express',
    'PostgreSQL',
    'Full Stack Architecture',
];
