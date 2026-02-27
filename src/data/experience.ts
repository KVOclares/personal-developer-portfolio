/**
 * Experience data — work history entries for the timeline component.
 */
import type { ExperienceEntry } from '../types';

/** Ordered (newest first) work experience. */
export const EXPERIENCE: ExperienceEntry[] = [
    {
        kind: 'experience',
        title: 'Machine Learning Developer Intern',
        company: 'Government of Alberta',
        period: 'June 2025 – Present',
        location: 'Edmonton, Alberta (Remote)',
        current: true,
        highlights: [
            '99% Data Accuracy',
            '5+ hrs/week Saved',
            '4+ SQL Databases',
            'Executive Dashboards',
        ],
        description: [
            'Engineered and deployed machine learning models to production using Azure AI Services, improving system prediction accuracy to 99%.',
            'Automated data pipelines to process and analyze over 4+ SQL Databases seamlessly, optimizing query performance.',
            'Developed comprehensive Executive Dashboards using React and Power BI to surface actionable insights for stakeholders.',
            'Streamlined internal reporting processes, eliminating manual data entry and resulting in 5+ hrs/week saved for analytics teams.',
            'Collaborated cross-functionally with policy analysts and engineers to translate complex business requirements into scalable technical solutions.',
            'Implemented robust CI/CD pipelines using GitHub Actions to ensure reliable and secure ML model deployments.',
            'Conducted rigorous data validation and exploratory data analysis to maintain high data quality and integrity across projects.',
            'Mentored junior developers and established best practices for code quality, version control, and agile methodologies.',
        ],
    },
    {
        kind: 'experience',
        title: 'Senior Communication Technician',
        company: 'ASCCI - North Inc.',
        period: 'August 2021 – August 2024',
        location: 'Edmonton, Alberta',
        current: false,
        description: [
            'Led the end-to-end installation, commissioning, and maintenance of intricate industrial communication and control systems across Alberta\'s oil sands operations.',
            'Coordinated effectively with multidisciplinary engineering teams to troubleshoot and resolve complex electrical and network issues in challenging on-site environments.',
            'Managed diverse field crews, optimizing daily workflows and consistently delivering projects ahead of schedule while maintaining strict quality standards.',
            'Ensured rigorous compliance with safety regulations (NFPA, CEC) and industry best practices across all project phases.',
        ],
    },
    {
        kind: 'experience',
        title: 'Machine Operator',
        company: 'Silent-Aire',
        period: 'October 2020 – July 2021',
        location: 'Edmonton, Alberta',
        current: false,
        description: [
            'Operated and calibrated precision CNC machinery and complex assembly equipment for the high-volume manufacture of advanced data center cooling units.',
            'Maintained strict quality control standards, performing regular inspections to identify and resolve defects early in the production cycle.',
            'Contributed significantly to lean process improvement initiatives on the production floor, enhancing overall operational efficiency and reducing waste.',
        ],
    },
];
