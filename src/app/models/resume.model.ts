export interface Experience {
    role: string;
    company: string;
    duration?: string;
    description?: string; // Optional if not used
    details: string[]; // Bullet points
}

export interface Project {
    title: string;
    subtitle: string;
    technologies: string[];
    description: string[];
    link?: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface ResumeData {
    profile: {
        name: string;
        phone: string;
        email: string;
        github: string;
        linkedin: string;
        instagram?: string;
        summary: string;
        images?: {
            hero?: string;
            about?: string;
        };
    };
    experience: Experience[];
    education: {
        degree: string;
        institution: string;
        cgpa?: string;
        year: string;
    }[];
    skills: SkillCategory[];
    projects: Project[];
    publications: {
        title: string;
        journal: string;
        date: string;
    }[];
    certifications: string[];
}
