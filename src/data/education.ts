/**
 * Education data — academic credential entries.
 */
import type { EducationEntry } from '../types';

/** All education entries (newest first). */
export const EDUCATION: EducationEntry[] = [
    {
        kind: 'education',
        degree: 'Diploma with Honors',
        field: 'Data Analytics',
        institution: 'Northern Alberta Institute of Technology (NAIT)',
        period: '2024 – 2025',
        honors: true,
        highlights: [
            'Python, R, SQL, Power BI, Machine Learning, ETL Pipelines',
            'Capstone: Predictive analytics dashboard for operational KPIs',
        ],
    },
    {
        kind: 'education',
        degree: 'Diploma with Honors',
        field: 'Electronic Engineering Technology',
        institution: 'Northern Alberta Institute of Technology (NAIT)',
        period: '2018 – 2020',
        honors: true,
        highlights: [
            'Industrial control systems, PLC programming, circuit design',
            'Dean\'s List, graduated with distinction',
        ],
    },
];
