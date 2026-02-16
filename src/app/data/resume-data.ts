import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
    profile: {
        name: 'VISHAL',
        phone: '+91 8590556670',
        email: 'vishalchandran6126@gmail.com',
        github: 'https://github.com/Vishal-WD',
        linkedin: 'https://linkedin.com/in/vishal-wd',
        summary: 'I am a driven Computer Science student specializing in Data Science with hands-on experience building scalable backend systems and intelligent applications. My focus areas include Retrieval-Augmented Generation (RAG), AI pipelines, and modern frameworks such as Fast API and PostgreSQL. My journey includes serving as a Data Analyst Intern at ISS and Project Intern at Infosys Springboard. With strong passion for creating solutions that merge automation, usability, and performance, I thrive in collaborative, cloud-ready environments.',
        images: {
            hero: 'assets/images/profile-1.jpg',
            about: 'assets/images/profile-2.jpg'
        }
    },
    experience: [
        {
            role: 'Project Intern',
            company: 'Infosys Springboard',
            details: [
                'Developed a backend water-quality monitoring system using FastAPI and PostgreSQL, integrating real-time global APIs and custom datasets to support NGO, admin, and user workflows.',
                'Implemented predictive alerting and automated analysis using NumPy and schedulers, delivering trend visualizations and early-warning insights through dynamic graphs and dashboards.'
            ]
        },
        {
            role: 'Data Analyst Intern',
            company: 'ISS',
            details: [
                'Leveraged Power BI, Excel, and SQL to design dashboards and reports that improved decision-making efficiency and applied statistical analysis and automation techniques to streamline workflows.'
            ]
        }
    ],
    education: [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'Kalasalingam Academic of Research and Education',
            cgpa: '8.45/10.0',
            year: '2023 – 2027'
        }
    ],
    skills: [
        {
            name: 'Languages',
            skills: ['Python', 'Java', 'React', 'Angular', 'C', 'JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'AI & Machine Learning',
            skills: ['Generative AI', 'LLMs', 'RAG', 'Prompt Engineering', 'Model Deployment (Pipelines)']
        },
        {
            name: 'AI Tools & Frameworks',
            skills: ['LangChain', 'Hugging Face', 'OpenAI APIs']
        },
        {
            name: 'Database & Backend',
            skills: ['PostgreSQL','FastAPI (REST APIs, JWT Authentication)', 'Firebase', 'DBMS(SQL)']
        },
        {
            name: 'Tools',
            skills: ['Google Colab', 'Git', 'Github', 'VS Code', 'Anaconda Environment']
        },
        {
            name: 'Data Analysis Tools',
            skills: ['Power BI', 'Tableau']
        }
    ],
    projects: [{
  "title": "AquaSense AI",
  "subtitle": "Real-Time Global Water Quality Monitoring & Predictive Analytics System",
  "technologies": [
    "React.js",
    "Tailwind CSS",
    "Leaflet.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Scikit-learn"
  ],
  "description": [
    "Architected a full-stack IoT dashboard to monitor 282+ water stations across the USA and UK, visualizing critical metrics like pH, Turbidity, and Dissolved Oxygen in real-time.",
    "Engineered a predictive analysis engine using Random Forest Regressors to forecast water quality trends and detect anomalies before they become critical hazards.",
    "Developed an automated alert system that triggers multi-level notifications (Critical/Warning/Info) based on dynamic sensor thresholds and historical patterns.",
    "Integrated Google Gemini AI to generate context-aware summary reports and actionable mitigation strategies for station managers based on complex sensor data."
  ]
},
        {
            title: 'Campus Connect',
            subtitle: 'Full-Stack Role-Based Web Platform',
            technologies: ['React', 'Firebase', 'JavaScript', 'HTML/CSS'],
            description: [
                'Integrated Firebase Auth and Firestore for secure login and real-time data sync.',
                'Developed a scalable campus communication platform with role-based access control and event registration, notices and integrate all the organization resources together.'
            ]
        },
        {
  title: 'LUNA',
  subtitle: 'GenAI Powered Terminal Assistant',
  technologies: ['Python', 'LangChain', 'OpenAI'],
  description: [
    'Built LUNA, a GenAI-powered assistant that wraps the native shell using a pseudo-terminal “carbon copy” layer to track commands and outputs.',
    'Implemented episodic memory with a structured JSON ledger and local RAG so LUNA can recall past errors and fixes and suggest inline remedies (e.g., `? fix this`).',
    'Added automated, session-based Markdown reports summarizing key errors, fixes, and important commands for documentation and standups.'
  ]
},
{
title: 'Vitality Compass',
subtitle: 'Personalized Health Analytics & Wellness Suite',
technologies: ['React', 'JavaScript', 'Google Gemini API', 'Firebase'],
description: [
'Engineered Vitality Compass to track and visualize longitudinal medical data, including blood markers, cholesterol levels, and biometric data (BMI/Height/Weight).',
'Developed a trend analysis engine that identifies patterns in historical health checkup data to provide users with a clear trajectory of their physical well-being.',
'Integrated LLM-driven reasoning to generate hyper-personalized diet and workout regimens based on the user’s specific medical profile and health goals.'
]
}

    ],
    publications: [
        {
            title: 'Voice Assistant – An Artificial Intelligence Speech Recognition Module that Trains the Machine to Perform Tasks Using Speech Recognition',
            journal: 'EPRA International Journal of Multidisciplinary Research (IJMR)',
            date: 'March 2022'
        }
    ],
    certifications: [
        'Industry Level Certifications at Deloitte',
        'TCS from Forage',
        'Skill development certification from Infosys'
    ]
};
