/**
 * Centralized type definitions for the portfolio application.
 * All interfaces are maintained here to ensure consistency across components and data files.
 */

// ─── Navigation ─────────────────────────────────────────────────────────────────

/** Navigation item definition. */
export interface NavItem {
    label: string;
    href: string;
}

// ─── Profile ────────────────────────────────────────────────────────────────────

/** Represents a single social/contact link. */
export interface SocialLink {
    label: string;
    url: string;
    icon: 'email' | 'phone' | 'linkedin' | 'github';
}

/** Core profile data shape. */
export interface Profile {
    name: string;
    titles: string[];
    location: string;
    emailUser: string;
    emailDomain: string;
    phone?: string;
    about: string;
    bio: string[];
    availability: boolean;
    availabilityNote: string;
    resumeUrl?: string;
    siteUrl?: string;
    photo: string;
    socials: SocialLink[];
}

// ─── Skills ─────────────────────────────────────────────────────────────────────

/** A single skill item. */
export interface Skill {
    name: string;
}

/** A category grouping related skills. */
export interface SkillCategory {
    category: string;
    color: string;
    skills: Skill[];
}

// ─── Experience ─────────────────────────────────────────────────────────────────

/** A single work experience entry. */
export interface ExperienceEntry {
    kind: 'experience';
    title: string;
    company: string;
    period: string;
    location: string;
    description: string[];
    current?: boolean;
    highlights?: string[];
}

// ─── Projects ───────────────────────────────────────────────────────────────────

/** Status of a project. */
export type ProjectStatus = 'coming-soon' | 'live' | 'in-progress';

/** A single project card. */
export interface Project {
    id?: string;
    title: string;
    subtitle?: string;
    description: string;
    role?: string[];
    stack: string[];
    status: ProjectStatus;
    featured?: boolean;
    githubUrl?: string;
    liveUrl?: string;
    note?: string;
    organization?: string;
    environment?: string;
    isInternal?: boolean;
}

// ─── Education ──────────────────────────────────────────────────────────────────

/** A single education entry. */
export interface EducationEntry {
    kind: 'education';
    degree: string;
    field: string;
    institution: string;
    period: string;
    honors: boolean;
    coursework?: string[];
    highlights?: string[];
}

/** A single certification or training credential. */
export interface Certification {
    title: string;
    issuer: string;
    status: 'active' | 'expired' | 'in-progress';
}
