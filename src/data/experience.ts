/**
 * Experience data — work history entries for the timeline component.
 */
import type { ExperienceEntry } from '../types';

/** Ordered (newest first) work experience. */
export const EXPERIENCE: ExperienceEntry[] = [
    {
        kind: 'experience',
        title: 'Machine Learning Developer',
        company: 'Government of Alberta',
        period: 'June 2025 – Present',
        location: 'Edmonton, AB',
        current: true,
        description: [
            'Designing and deploying AI-assisted data pipelines and machine learning models to support provincial program delivery.',
            'Integrating Azure AI Services with internal systems to automate reporting and support data-driven decision-making.',
            'Collaborating cross-functionally with policy and analytics teams to translate business requirements into scalable technical solutions.',
        ],
    },
    {
        kind: 'experience',
        title: 'Communication Lead Technician',
        company: 'ASCCI - North Inc.',
        period: 'Aug 2021 – Aug 2024',
        location: 'Fort McMurray, AB',
        description: [
            'Led installation, commissioning, and maintenance of industrial communication and control systems across Alberta\'s oil sands operations.',
            'Coordinated with multidisciplinary engineering teams to troubleshoot and resolve complex electrical and network issues on-site.',
            'Managed field crews and ensured compliance with safety regulations (NFPA, CEC) across all project phases.',
        ],
    },
    {
        kind: 'experience',
        title: 'Machine Operator',
        company: 'Silent-Aire',
        period: 'Oct 2020 – Jul 2021',
        location: 'Edmonton, AB',
        description: [
            'Operated precision CNC machinery and assembly equipment for the manufacture of data center cooling units.',
            'Maintained strict quality control standards and contributed to lean process improvement initiatives on the production floor.',
        ],
    },
];
