/**
 * Projects data — portfolio project card definitions.
 * Adding a new project = one new object in this array.
 * Setting featured: true gives it the full-width enhanced card.
 */
import type { Project } from '../types';

/** All portfolio projects, ordered by progression. */
export const PROJECTS: Project[] = [
    {
        title: 'Personal Portfolio Site',
        description:
            'This site. Built with React, TypeScript, and Tailwind CSS. Deployed on Vercel with automatic deploys on every git push.',
        stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        status: 'live',
        liveUrl: '',
        githubUrl: 'https://github.com/KVOclares/personal-developer-portfolio',
    },
    {
        title: 'Alberta Program Finder',
        description:
            'A searchable, filterable directory of Government of Alberta programs. Built with React and TypeScript, powered by a static JSON dataset.',
        stack: ['React', 'TypeScript', 'Tailwind CSS'],
        status: 'coming-soon',
    },
    {
        title: 'Personal Budget Tracker',
        description:
            'Full CRUD budget tracking app with income and expense management, running totals, and category breakdowns. First full stack project with a REST API.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        status: 'coming-soon',
    },
    {
        title: 'Edmonton Housing Data Explorer',
        description:
            'Productionizing the NAIT capstone housing analytics project as a live web app with an API layer serving model results to a React frontend.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python'],
        status: 'coming-soon',
    },
    {
        title: 'Developer Notes App',
        description:
            'Markdown note-taking app with full user authentication. Covers JWT auth, bcrypt password hashing, protected routes, and middleware-guarded API endpoints.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT'],
        status: 'coming-soon',
    },
    {
        title: 'Cloud Cost Explainer Tool',
        description:
            'A web version of the GoA Cloud Cost dashboard. Users upload a CSV and an AI layer generates a plain-English summary of cost drivers and anomalies.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Anthropic SDK'],
        status: 'coming-soon',
    },
    {
        title: 'PR Quality Gate Bot',
        description:
            'A GitHub Actions workflow that uses an AI model to review pull requests and post a structured security and quality report as a PR comment.',
        stack: ['GitHub Actions', 'Node.js', 'Anthropic SDK', 'CI/CD'],
        status: 'coming-soon',
    },
    {
        title: 'Alberta Benefits Navigator',
        description:
            'The flagship project. A public-facing AI chatbot that matches Albertans to government benefit programs based on their situation. Full stack with conversation state, PostgreSQL session history, and an AI model doing the matching and response generation.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Anthropic SDK', 'REST APIs'],
        status: 'coming-soon',
        featured: true,
    },
];
