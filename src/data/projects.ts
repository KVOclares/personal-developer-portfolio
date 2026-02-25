/**
 * Projects data — portfolio project card definitions.
 */
import type { Project } from '../types';

/** All portfolio projects. */
export const PROJECTS: Project[] = [
    {
        title: 'Alberta Program Finder',
        description:
            'A web app that helps Albertans discover relevant government programs and services based on their personal situation using AI-powered search and natural language queries.',
        tech: ['React', 'TypeScript', 'Python', 'Azure AI', 'PostgreSQL'],
        status: 'coming-soon',
    },
    {
        title: 'Budget Tracker',
        description:
            'A personal finance dashboard for tracking income, expenses, and savings goals with visual breakdowns, CSV export, and monthly trend analysis.',
        tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
        status: 'coming-soon',
    },
    {
        title: 'Edmonton Housing Data Explorer',
        description:
            'An interactive data visualization tool for exploring Edmonton housing trends, neighborhood statistics, and price forecasts powered by open data from the City of Edmonton.',
        tech: ['Python', 'Pandas', 'Power BI', 'React', 'REST APIs'],
        status: 'coming-soon',
    },
    {
        title: 'Cloud Cost Explainer',
        description:
            'A tool that analyzes Azure billing data and generates plain-language explanations of cost drivers, with actionable recommendations to reduce cloud spend.',
        tech: ['Python', 'Azure APIs', 'TypeScript', 'React', 'Scikit-learn'],
        status: 'coming-soon',
    },
];
