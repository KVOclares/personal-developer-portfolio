/**
 * Skills data — categorized technical skills.
 * Icons are resolved at render-time via the SKILL_ICON_MAP in Skills.tsx.
 */
import type { SkillCategory } from '../types';

/** All skill categories and items. */
export const SKILLS: SkillCategory[] = [
    {
        category: 'Languages',
        color: 'electric',
        skills: [
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'Python' },
            { name: 'SQL' },
            { name: 'R' },
        ],
    },
    {
        category: 'Frontend',
        color: 'electric',
        skills: [
            { name: 'React' },
            { name: 'Tailwind CSS' },
            { name: 'HTML5' },
            { name: 'Vite' },
        ],
    },
    {
        category: 'Backend',
        color: 'electric',
        skills: [
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'REST APIs' },
        ],
    },
    {
        category: 'Data & ML',
        color: 'electric',
        skills: [
            { name: 'Power BI' },
            { name: 'Pandas' },
            { name: 'NumPy' },
            { name: 'Scikit-learn' },
            { name: 'ETL Pipelines' },
        ],
    },
    {
        category: 'Database',
        color: 'electric',
        skills: [
            { name: 'PostgreSQL' },
            { name: 'Supabase' },
            { name: 'Row-Level Security' },
            { name: 'SSIS' },
        ],
    },
    {
        category: 'Tools & DevOps',
        color: 'electric',
        skills: [
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'Docker' },
            { name: 'Azure AI' },
        ],
    },
];
