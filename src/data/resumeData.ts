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
    description: z.union([z.string().min(1), z.array(z.string().min(1))]),
    technologies: z.array(z.string()),
    icon: z.any().optional(), // React icons are functions/objects
  })),
  projects: z.array(z.object({
    title: z.string().min(1),
    category: z.string(),
    description: z.union([z.string().min(1), z.array(z.string().min(1))]),
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
    summary: "Highly skilled Cloud Architect with 15 years of experience leading multi-disciplinary teams across software development, DevOps, and automation. Demonstrated expertise in designing and implementing developer tools, automation workflows, and cloud- native solutions. Proven technical leadership as an active contributor to open-source projects like jHipster and Kyverno. Spearheading the design of innovative, scalable CI/CD pipelines and infrastructure as code solutions. Skilled in multiple languages including JavaScript/TypeScript, C#, and Python.",
    email: "amarbir1800@gmail.com",
    phone: "+1 (xxx)-xxx xxxx",
    avatarUrl: "https://github.com/a-5ingh.png"
  },
  experience: [
    {
      role: "Senior Technologist (Azure Cloud/DevOps Architect) 👨‍💻",
      company: "Infosys Limited | Mississauga, Canada",
      period: "Apr 2022 - Present",
      icon: FaCloud,
       description: [
         "Reduced deployment cycles by 20% for a Tier-1 education student information system by architecting cloud-native CI/CD pipelines and Bicep-driven IaC.",
         "Mentored 15+ engineers in modern Cloud, Application Design & DevOps practices, resulting in 100% adoption of automated infrastructure workflows across 4+ teams.",
         "Increased operational efficiency by implementing a standardized .NET Core architecture that supported cross-functional scaling and continuous delivery.",
       ],
      technologies: [
        "Azure DevOps 🔄",
        "IaC using Bicep 🏗️",
        ".NET Core & C# 👨‍💻",
        "Azure & AWS ☁️",
        "DevSecOps 🔒"
      ],
    },
    {
      role: "Specialist Programmer (Full Stack / DevOps Lead) 👨‍💻",
      company: "Infosys Limited | Chandigarh, India",
      period: "Oct 2019 - Apr 2022",
      icon: FaCode,
       description: [
         "Platform Engineering: Architected the Infosys in-house platform, enabling 15-minute rapid deployment of production-ready web applications across Azure, AWS, and On-Prem environments.",
         "Enabled seamless multi-cloud deployment for the iLEAD platform as measured by 99.9% system availability through the implementation of Kubernetes, Docker, and OpenShift strategies.",
         "Architected a 'Shift-Left' security framework by integrating DevSecOps pipelines into CloudBees Jenkins and Azure DevOps, standardizing automated security gates across all development workstreams.",
         "Developed interchangeable, high-standard templates using Angular, React, and VueJS integrated with NodeJS (NestJS) and Spring Boot, supporting complex features like SAP UI5 controls and form-based authentication.",
         "Engineered containerized solutions for diverse technology stacks (Dotnetcore, NodeJS, Spring boot etc.), improving resource utilization and portability across IIS and cloud-native clusters.",
       ],
      technologies: [
        "Kubernetes & Docker 🐳",
        "Jenkins & CI/CD 🔄",
        "React/Vue.js ⚛️",
        "Node.js 💚",
        "OpenShift/Rancher 🎯"
      ],
    },
    {
      role: "QA/Automation Lead/SDET 👨‍💻",
      company: "Infosys Limited | Irvine, US & Chandigarh, India",
      period: "Feb 2011 - Sept 2019",
      icon: FaRobot,
       description: [
         "Achieved 40% enhancement in test coverage for high-stakes financial applications by leading the design of automated report comparison tools and VBA-based frameworks.",
         "Automated 85% of regression testing for equity trading platforms by designing custom testing frameworks and implementing RPA solutions using Blue Prism.",
         "Validated end-to-end business flow for high-stakes Equity Trading Platform and Account Systems, ensuring 100% data accuracy for day-to-day transactions and reporting.",
         "Established code review standards in Bitbucket and modular automation libraries for 60+ applications, improving code maintainability and decreasing script failure by 20%.",
         "Coordinated global delivery across US and Indian hubs, ensuring zero-defect releases for major financial services client.",
         "Engineered custom Excel macros and automated CI batches that accelerated data comparison and report migration tasks, saving estimated 10 hours of manual labor per week.",
         "Orchestrated the migration of legacy Java/SQR reports to Business Objects, utilizing advanced SQL queries to validate data integrity across thousands of financial records.",
       ],
      technologies: [
        "Blue Prism RPA 🤖",
        "SQL Server 💾",
        "Testing Frameworks 🎯",
        "Financial Systems 💰"
      ],
    }
  ],
  projects: [
    {
      title: "Infrastructure as Code Resources 🏗️",
      category: "Industry",
       description: [
         "Developed reusable enterprise modules for cloud resource provisioning, which scaled a defense-focused automation strategy across multiple global teams, standardizing deployment practices.",
         "Implemented robust GitOps practices for infrastructure management, resulting in measurable improvements in deployment consistency and audit compliance.",
         "Published technical papers on IaC principles, fostering collaborative learning and establishing best practices across the engineering department.",
       ],
      tech: ["Azure", "Bicep", "ARM Templates", "PowerShell", "DevOps"],
      link: "https://medium.com/@a.student/infrastructure-as-code-azure-bicep-fd2b66076afe"
    },
    {
      title: "Cloud Migration & Modernization 📚",
      category: "Industry",
       description: [
         "Architected and executed the successful migration of mission critical student information system to the Azure cloud platform, ensuring zero-downtime and enhanced system reliability.",
         "Pioneered modern DevOps practices in collaboration with cross-functional teams, streamlining deployment processes and driving system reliability improvements by an estimated 25% faster deployment lead time.",
       ],
      tech: ["Azure", "DevOps", "CI/CD", "Infrastructure as Code", "Automation"],
    },
    {
      title: "JHipster Framework Enhancement ⚡",
      category: "Open Source",
       description: [
         "Collaborated with the JHipster dotnetcore community as an active contributor and maintainer.",
         "Contributed fixes for various bugs, added new features (terraform scripts), and improved documentation.",
       ],
      tech: ["EJS", "Node.js", "TypeScript", "Terraform", "IaC", "DotnetCore"],
      link: "https://github.com/jhipster/jhipster-dotnetcore/graphs/contributors"
    },
    {
      title: "Kyverno Security & Policy Engine 🛡️",
      category: "Open Source",
       description: [
         "Contributing to Kubernetes policy management, implementing security policies and enhancing documentation.",
         "Focus on policy as code and security implementations.",
       ],
      tech: ["Kubernetes", "Go", "Policy as Code", "Security", "DevOps"],
      link: "https://github.com/kyverno/community/blob/main/CONTRIBUTORS.md"
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
      name: "Certified Kyverno Associate (CKA) 🌟",
      issuer: "The Linux Foundation",
      date: "Dec 2025",
      link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/29cf353c-53e9-469d-8a23-7da6d6231e7d-amarbir-singh-c276134a-0d6d-44df-93bc-c811d457d5dd-certificate.pdf"
    },
    {
      name: "GitOps Certified Associate (CGOA) 🌟",
      issuer: "The Linux Foundation",
      date: "Nov 2025",
      link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/29cf353c-53e9-469d-8a23-7da6d6231e7d-amarbir-singh-e1018b52-9d79-4b01-af18-92d738a5e759-certificate.pdf"
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
