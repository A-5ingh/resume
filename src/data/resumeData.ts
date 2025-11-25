import { z } from 'zod';
import type { ResumeData } from './types';
import { BsGithub, BsLinkedin, BsEnvelope, BsMedium, BsStackOverflow } from 'react-icons/bs';
import { FaCloud, FaCode, FaSearch, FaRobot } from 'react-icons/fa';

// Zod Schema for Validation
export const ResumeSchema = z.object({
  personal: z.object({
    name: z.string().min(1),
    role: z.string().min(1),
    summary: z.string().min(10),
    email: z.string().email(),
    phone: z.string().optional(),
    avatarUrl: z.string().url().optional(),
  }),
  experience: z.array(z.object({
    role: z.string().min(1),
    company: z.string().min(1),
    period: z.string().min(1),
    description: z.string().min(10),
    technologies: z.array(z.string()),
    icon: z.any().optional(), // React icons are functions/objects
  })),
  projects: z.array(z.object({
    title: z.string().min(1),
    category: z.string(),
    description: z.string().min(10),
    tech: z.array(z.string()),
    link: z.string().url().optional(),
  })),
  skills: z.array(z.object({
    category: z.string().min(1),
    items: z.array(z.string()),
  })),
  certifications: z.array(z.object({
    name: z.string().min(1),
    issuer: z.string().min(1),
    date: z.string().min(1),
  })),
  social: z.array(z.object({
    platform: z.string().min(1),
    url: z.string().url(),
    icon: z.any(),
  })),
});

export const resumeData: ResumeData = {
  personal: {
    name: "Amarbir Singh",
    role: "Senior Technologist @ Infosys Limited | Cloud & DevOps Architect 🚀 | Full Stack Developer 💻",
    summary: "14+ years of expertise in software development, DevOps, and open source contributions. Passionate about developer tools, automation, and cloud-native solutions. Active contributor to projects like JHipster and Kyverno, with strong experience in designing scalable CI/CD pipelines and infrastructure as code. Skilled in multiple languages including JavaScript/TypeScript, C#, Python, and Go.",
    email: "amarbir1800@gmail.com",
    phone: "+1 (xxx)-xxx xxxx",
    avatarUrl: "https://github.com/a-5ingh.png"
  },
  experience: [
    {
      role: "Senior Technologist 👨‍💻",
      company: "Infosys Limited, Canada",
      period: "2022 - Present",
      icon: FaCloud,
      description: "Leading cloud-native transformation and DevOps initiatives for a major education system. Implementing GitOps practices, automated CI/CD pipelines, and infrastructure as code. Mentoring teams in modern development practices and fostering a culture of automation and continuous improvement.",
      technologies: [
        "GitHub Actions 🔄",
        "GitOps & IaC 🏗️",
        "Kubernetes & Docker 🐳",
        "Cloud Native 🚀",
        "DevSecOps 🔒"
      ],
    },
    {
      role: "Specialist Programmer 👨‍💻",
      company: "Infosys Limited",
      period: "2020 - 2022",
      icon: FaCode,
      description: "Led development of iLEAD platform with multi-cloud deployment capabilities. Implemented comprehensive CI/CD pipelines, containerization strategies, and infrastructure automation. Developed full-stack applications using modern frameworks.",
      technologies: [
        "Kubernetes & Docker 🐳",
        "Jenkins & CI/CD 🔄",
        "React/Vue.js ⚛️",
        "Node.js/NestJS 💚",
        "OpenShift/Rancher 🎯"
      ],
    },
    {
      role: "Specialist Programmer/SDET 👨‍💻",
      company: "Infosys Limited",
      period: "2019 - 2020",
      icon: FaRobot,
      description: "Developed and implemented automated testing solutions for equity trading platforms and complex financial systems. Pioneered RPA solutions using Blue Prism for business process automation.",
      technologies: [
        "Blue Prism RPA 🤖",
        "SQL Server 💾",
        "Testing Frameworks 🎯",
        "Financial Systems 💰"
      ],
    },
    {
      role: "Various (System Engineer, Test Analyst, SDET) 🔍",
      company: "Infosys Limited",
      period: "2011 - 2019",
      icon: FaSearch,
      description: "Led core automation initiatives and developed comprehensive testing frameworks. Created innovative solutions for automated report comparison and enhanced test coverage across multiple applications.",
      technologies: [
        "Test Automation 🔄",
        "VBA Development 📊",
        "SQL & Databases 💾",
        "Framework Design 🛠️"
      ],
    }
  ],
  projects: [
    {
      title: "Infrastructure as Code Resources 🏗️",
      category: "Industry",
      description: "Created and published comprehensive technical articles on Infrastructure as Code. Developed reusable enterprise modules for cloud resource provisioning, with a focus on developer experience and automation. Implemented GitOps practices for infrastructure management.",
      tech: ["Azure", "Bicep", "ARM Templates", "PowerShell", "DevOps"],
      link: "https://medium.com/@amarbir1800"
    },
    {
      title: "JHipster Framework Enhancement ⚡",
      category: "Open Source",
      description: "Active contributor to JHipster framework, focusing on Vue.js and Node.js generators. Identified and fixed critical security vulnerabilities in the Node.js generator, improving platform security.",
      tech: ["Vue.js", "Node.js", "TypeScript", "Security", "Microservices"],
      link: "https://github.com/jhipster/generator-jhipster"
    },
    {
      title: "Kyverno Security & Policy Engine 🛡️",
      category: "Open Source",
      description: "Contributing to Kubernetes policy management, implementing security policies and enhancing documentation. Focus on policy as code and security implementations.",
      tech: ["Kubernetes", "Go", "Policy as Code", "Security", "DevOps"],
      link: "https://github.com/kyverno/kyverno"
    },
    {
      title: "Cloud Migration & Modernization 📚",
      category: "Industry",
      description: "Architected and led the migration of large-scale education system to Azure cloud. Implemented modern DevOps practices, automated deployments, and enhanced system reliability.",
      tech: ["Azure", "DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    }
  ],
  skills: [
    {
      category: "DevOps & Cloud ☁️",
      items: [
        "GitHub Actions & CI/CD 🔄",
        "GitOps & GitHub Flow 🌟",
        "Containers & K8s 🐳",
        "Infrastructure as Code 🏗️",
        "Cloud Platforms ⚡",
        "DevSecOps 🔒",
        "Monitoring & SRE 📊",
        "Automation & CLI 🛠️"
      ],
    },
    {
      category: "Development 💻",
      items: [
        "JavaScript/TypeScript 💪",
        "Go & Python 🐍",
        "Node.js & React ⚛️",
        "API Design 🔌",
        "System Design 📐",
        "CLIs & Developer Tools 🛠️",
        "Testing & TDD 🎯",
        "Open Source 🌟"
      ],
    },
    {
      category: "Tools & Platforms 🛠️",
      items: [
        "Git & GitHub 🔧",
        "VS Code/VS 📝",
        "Jenkins & Azure DevOps 🔄",
        "Jira & Confluence 📚",
        "OpenShift & Rancher ⚙️",
        "PowerShell & Bash 💻"
      ],
    }
  ],
  certifications: [
    {
      name: "Microsoft Azure Administrator Associate (AZ-104) ⭐",
      issuer: "Microsoft",
      date: "Nov 2024"
    },
    {
      name: "Microsoft Azure AI Engineer Associate (A1-102) ⭐",
      issuer: "Microsoft",
      date: "Sep 2024"
    },
    {
      name: "Microsoft DevOps Solutions (AZ-400) ⭐",
      issuer: "Microsoft",
      date: "Jun 2023"
    },
    {
      name: "Associate Cloud Engineer 🌩️",
      issuer: "Google",
      date: "Mar 2023"
    },
    {
      name: "Azure Fundamentals (AZ-900) ☁️",
      issuer: "Microsoft",
      date: "Jun 2023"
    },
    {
      name: "AWS Cloud Practitioner ⚡",
      issuer: "Amazon",
      date: "Mar 2023"
    },
    {
      name: "Machine Learning Foundations 🤖",
      issuer: "eCornell",
      date: "Jul 2020"
    }
  ],
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/a-5ingh",
      icon: BsGithub
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/amarbir-singh",
      icon: BsLinkedin
    },
    {
      platform: "Stack Overflow",
      url: "https://stackoverflow.com/users/11640763/stud3nt",
      icon: BsStackOverflow
    },
    {
      platform: "Medium",
      url: "https://medium.com/@a.student",
      icon: BsMedium
    },
    {
      platform: "Email",
      url: "mailto:amarbir1800@gmail.com",
      icon: BsEnvelope
    }
  ],
};

// Validate data on load
try {
  ResumeSchema.parse(resumeData);
} catch (error) {
  console.error("Resume Data Validation Failed:", error);
}
