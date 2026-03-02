/**
 * Education data — academic credential entries, certifications, and learning goals.
 */
import type { EducationEntry, Certification } from '../types';

/** All education entries (newest first). */
export const EDUCATION: EducationEntry[] = [
    {
        kind: 'education',
        degree: 'Alberta AI Academy (Levels 1–3)',
        field: 'Applied AI & Enterprise Automation',
        institution: 'Government of Alberta',
        period: '2025 – 2026',
        honors: false,
        coursework: [
            'Prompt Engineering',
            'AI Agent Design',
            'Workflow Automation',
            'Enterprise AI Deployment',
            'Human-in-the-Loop AI Practices',
        ],
        highlights: [
            'Completed advanced hands-on AI training focused on real-world government use cases',
            'Collaborated in cross-functional groups to design and release production-ready AI applications',
            'Applied human-in-the-loop AI practices emphasizing safety, oversight, and measurable productivity improvements',
        ],
    },
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
    'AI Agent Orchestration',
    'Retrieval-Augmented Generation (RAG)',
    'Scalable Full Stack Architecture',
    'Cloud-Native System Design',
    'Microservices & API Engineering',
];
