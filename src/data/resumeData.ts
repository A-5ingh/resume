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
    link: z.url().optional(),
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
    summary: "14 years of expertise in software development, DevOps, and open-source contributions. Demonstrated expertise in designing and implementing developer tools, automation workflows, and cloud-native solutions. Demonstrated technical leadership as an active contributor to projects such as jHipster and Kyverno, spearheading the design of innovative, scalable CI/CD pipelines and infrastructure as code solutions. Skilled in multiple languages including JavaScript/TypeScript, C#, and Python.",
    email: "amarbir1800@gmail.com",
    phone: "+1 (xxx)-xxx xxxx",
    avatarUrl: "https://github.com/a-5ingh.png"
  },
  experience: [
    {
      role: "Senior Technologist 👨‍💻",
      company: "Infosys Limited, Canada",
      period: "Apr 2022 - Present",
      icon: FaCloud,
      description: "Spearheaded cloud-native transformation and DevOps initiatives for a major education system, driving adoption of automated CI/CD pipelines, infrastructure as code, and modern development practices to foster a culture of automation and continuous improvement. Implemented DevOps practices, automated CI/CD pipelines, and infrastructure as code, resulting in 20% reduction in deployment times and improved operational efficiency. Mentored 15+ junior developers in modern development practices, driving adoption of automated workflows and continuous improvement initiatives.",
      technologies: [
        "Azure DevOps 🔄",
        "IaC using Bicep 🏗️",
        ".NET Core & C# 👨‍💻",
        "Azure & AWS ☁️",
        "DevSecOps 🔒"
      ],
    },
    {
      role: "Specialist Programmer 👨‍💻",
      company: "Infosys Limited",
      period: "Jan 2020 - Apr 2022",
      icon: FaCode,
      description: "Led development of iLEAD platform with multi-cloud deployment capabilities. Implemented comprehensive CI/CD pipelines, containerization strategies, and infrastructure automation. Developed full-stack applications using modern frameworks.",
      technologies: [
        "Kubernetes & Docker 🐳",
        "Jenkins & CI/CD 🔄",
        "React/Vue.js ⚛️",
        "Node.js 💚",
        "OpenShift/Rancher 🎯"
      ],
    },
    {
      role: "Specialist Programmer/SDET 👨‍💻",
      company: "Infosys Limited",
      period: "Dec 2019 - Dec 2020",
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
      period: "Feb 2011 - Dec 2019",
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
      description: "Authored and published comprehensive technical articles on Infrastructure as Code, contributing to team knowledge sharing and supporting collaborative learning. Developed reusable enterprise modules for cloud resource provisioning, with a focus on developer experience and automation. Implemented GitOps practices for infrastructure management.",
      tech: ["Azure", "Bicep", "ARM Templates", "PowerShell", "DevOps"],
      link: "https://medium.com/@a.student/infrastructure-as-code-azure-bicep-fd2b66076afe"
    },
    {
      title: "JHipster Framework Enhancement ⚡",
      category: "Open Source",
      description: "Collaborated with the JHipster dotnetcore community as an active contributor and maintainer. Contributed to fix various bugs, new features (terraform scripts), and documentation.",
      tech: ["EJS", "Node.js", "TypeScript", "Terraform", "IaC", "DotnetCore"],
      link: "https://github.com/jhipster/jhipster-dotnetcore/graphs/contributors"
    },
    {
      title: "Kyverno Security & Policy Engine 🛡️",
      category: "Open Source",
      description: "Contributing to Kubernetes policy management, implementing security policies and enhancing documentation. Focus on policy as code and security implementations.",
      tech: ["Kubernetes", "Go", "Policy as Code", "Security", "DevOps"],
      link: "https://github.com/kyverno/community/blob/main/CONTRIBUTORS.md"
    },
    {
      title: "Cloud Migration & Modernization 📚",
      category: "Industry",
      description: "Strategically led and collaborated with cross-functional teams to architect and execute the successful migration of a large-scale education system to Azure cloud. Collaborated with cross-functional teams to pioneer modern DevOps practices, automate deployment processes, and drive improvements in overall system reliability.",
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
      name: "GitOps Certified Associate (CGOA) 🌟",
      issuer: "The Linux Foundation",
      date: "Dec 2025",
      link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/29cf353c-53e9-469d-8a23-7da6d6231e7d-amarbir-singh-e1018b52-9d79-4b01-af18-92d738a5e759-certificate.pdf"
    },
    {
      name: "Certified Kyverno Associate (CKA) 🌟",
      issuer: "The Linux Foundation",
      date: "Dec 2025",
      link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/29cf353c-53e9-469d-8a23-7da6d6231e7d-amarbir-singh-c276134a-0d6d-44df-93bc-c811d457d5dd-certificate.pdf"
    },
    {
      name: "Microsoft Azure Administrator Associate (AZ-104) ⭐",
      issuer: "Microsoft",
      date: "Nov 2024",
      link: "https://learn.microsoft.com/en-us/users/amarbirsingh/transcript/dl9gnbe3k1og66q"
    },
    {
      name: "Microsoft Azure AI Engineer Associate (A1-102) ⭐",
      issuer: "Microsoft",
      date: "Sep 2024",
      link: "https://learn.microsoft.com/en-us/users/amarbirsingh/transcript/dl9gnbe3k1og66q"
    },
    {
      name: "Microsoft DevOps Solutions (AZ-400) ⭐",
      issuer: "Microsoft",
      date: "Jun 2023",
      link: "https://learn.microsoft.com/en-us/users/amarbirsingh/transcript/dl9gnbe3k1og66q"
    },
    {
      name: "Associate Cloud Engineer 🌩️",
      issuer: "Google",
      date: "Mar 2023",
      link: "https://www.credly.com/badges/194c9bab-6188-4374-97c9-91bb022e77c9"
    },
    {
      name: "Azure Fundamentals (AZ-900) ☁️",
      issuer: "Microsoft",
      date: "Jun 2023",
      link: "https://learn.microsoft.com/en-us/users/amarbirsingh/transcript/dl9gnbe3k1og66q"
    },
    {
      name: "AWS Cloud Practitioner ⚡",
      issuer: "Amazon",
      date: "Mar 2023",
      link: "https://www.credly.com/badges/8c217a54-7ab6-43bf-8518-bab33282fb9d"
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
