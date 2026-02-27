/**
 * Projects data — portfolio project card definitions.
 * Adding a new project = one new object in this array.
 * Setting featured: true gives it the full-width enhanced card.
 */
import type { Project } from '../types';

/** All portfolio projects, ordered by progression. */
export const PROJECTS: Project[] = [
    {
        id: "goa-cloud-cost-dashboard",
        title: "Cloud Cost Invoice Dashboard",
        description: "Consolidated multiple fragmented legacy Cloud Cost Invoice dashboards into a single unified enterprise Power BI solution for executive decision support at the Government of Alberta. Improved data accuracy from 80% to 99% by migrating legacy hard-coded transformations to scalable SQL models. Implemented Row-Level Security for role-based access compliance across diverse business units.",
        stack: ["Power BI", "SQL", "T-SQL", "SSIS", "DAX", "ETL Pipelines", "Row-Level Security"],
        status: "live",
        featured: false,
        githubUrl: undefined,
        liveUrl: undefined,
        note: "Internal GoA project — not publicly available",
        isInternal: true
    },
    {
        id: "ai-chatbot-analysis",
        title: "AI Chatbot Intent Analysis",
        description: "Evaluated AI chatbot intent accuracy for a GoA contact centre by parsing 5,000 unstructured JSON conversation logs. Built a Python pipeline to map system outputs against user inputs and extract actionable insights that improved production model accuracy.",
        stack: ["Python", "Pandas", "JSON", "Data Analysis", "NLP"],
        status: "live",
        featured: false,
        githubUrl: undefined,
        liveUrl: undefined,
        note: "Internal GoA project — code not publicly available",
        isInternal: true
    },
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
        id: "grant-ai-reviewer",
        title: "Grant AI Reviewer",
        description: "An AI-powered grant application reviewer. The system OCRs uploaded PDF grant applications, extracts structured information, and runs it through an OpenAI model guided by carefully engineered prompts to evaluate whether applications should be approved or rejected. A React + Vite interface presents results to reviewers for final human-in-the-loop decision making.",
        role: [
            "Designed and executed end-to-end testing of the full application pipeline including OCR extraction accuracy, prompt evaluation consistency, and UI functionality",
            "Identified, documented, and reported system bugs across the OCR layer, AI evaluation layer, and React interface",
            "Proposed and validated improvements to evaluation prompts to increase AI decision accuracy and reduce false positives",
            "Suggested new features for the reviewer interface to improve usability and decision confidence",
            "Validated system behavior across edge cases including malformed PDFs, incomplete applications, and ambiguous eligibility scenarios",
            "Contributed to the Azure Logic Apps workflow that orchestrates the document processing pipeline"
        ],
        stack: [
            "React",
            "Vite",
            "TypeScript",
            "Azure Logic Apps",
            "OpenAI API",
            "OCR Pipeline"
        ],
        status: "in-progress",
        featured: false,
        githubUrl: undefined,
        liveUrl: undefined,
        environment: "Azure",
        isInternal: true
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
        id: "edmonton-housing",
        title: "Edmonton Housing Analytics Capstone",
        description: "End-to-end analytics pipeline on Edmonton housing inventory data. Translated complex datasets into actionable data stories and presentations for non-technical project sponsors at NAIT.",
        stack: ["Python", "Pandas", "R", "Data Visualization", "Statistical Analysis"],
        status: "live",
        featured: false,
        githubUrl: undefined,
        liveUrl: undefined
    },
    {
        title: 'Developer Notes App',
        description:
            'Markdown note-taking app with full user authentication. Covers JWT auth, bcrypt password hashing, protected routes, and middleware-guarded API endpoints.',
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT'],
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
