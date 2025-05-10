import type { ResumeData } from './types';
import { BsGithub, BsLinkedin, BsEnvelope, BsMedium } from 'react-icons/bs';

export const resumeData: ResumeData = {
  personal: {
    name: "Amarbir Singh",
    role: "DevOps Architect & Full Stack Developer",
    summary: "With 14 years of experience in software development, cloud architecture, and DevOps, I specialize in building scalable infrastructure and delivering robust solutions. Certified in Azure and GCP, with expertise in MERN/MEAN stack development.",
    email: "amarbir1800@gmail.com",
  },
  experience: [
    {
      role: "Cloud & DevOps Architect",
      period: "2021 - Present",
      description: "Leading cloud migration initiatives and implementing DevOps best practices across multiple projects. Specializing in infrastructure as code, CI/CD automation, and cloud-native solutions.",
      technologies: ["Azure", "GCP", "GitHub Actions", "GitLab CI", "Infrastructure as Code"],
    },
    {
      role: "Full Stack Developer",
      period: "2016 - 2021",
      description: "Developed and maintained full-stack applications using MERN and MEAN stacks. Focused on building scalable and responsive web applications.",
      technologies: ["React", "Angular", "Node.js", "MongoDB", "Express"],
    },
    {
      role: "QA Engineer / SDET",
      period: "2009 - 2016",
      description: "Led automation testing initiatives and quality assurance processes. Developed robust test frameworks and implemented CI/CD testing pipelines.",
      technologies: ["Test Automation", "CI/CD", "Test Frameworks", "Quality Assurance"],
    },
  ],
  projects: [
    {
      title: "JHipster Contribution",
      category: "Open Source",
      description: "Contributing to JHipster, an open-source development platform for quickly generating, developing, and deploying modern web applications and microservices.",
      tech: ["Java", "Spring Boot", "Angular", "React", "Microservices"],
      link: "https://github.com/jhipster/generator-jhipster",
    },
    {
      title: "Kyverno Contribution",
      category: "Open Source",
      description: "Contributing to Kyverno, a policy engine designed for Kubernetes. Working on policy management and security implementations.",
      tech: ["Kubernetes", "Go", "Policy as Code", "Security"],
      link: "https://github.com/kyverno/kyverno",
    },
    {
      title: "Financial Domain Projects",
      category: "Industry",
      description: "Implemented cloud-native solutions and DevOps practices in the financial sector, focusing on secure and scalable infrastructure.",
      tech: ["Cloud Architecture", "DevOps", "Security", "Microservices"],
    },
    {
      title: "Insurance Platform",
      category: "Industry",
      description: "Developed and maintained insurance platforms using modern tech stack, implementing CI/CD pipelines and automated testing.",
      tech: ["MEAN Stack", "Azure", "CI/CD", "Automated Testing"],
    },
    {
      title: "Education Tech Solutions",
      category: "Industry",
      description: "Built scalable educational platforms, focusing on performance optimization and user experience.",
      tech: ["MERN Stack", "GCP", "Performance Optimization"],
    },
  ],
  skills: [
    {
      category: "Cloud & DevOps",
      items: [
        "Azure",
        "GCP",
        "Infrastructure as Code",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "GitLab",
        "GitHub Actions",
      ],
    },
    {
      category: "Full Stack Development",
      items: [
        "React",
        "Angular",
        "Node.js",
        "TypeScript",
        "MongoDB",
        "Express",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "Testing & QA",
      items: [
        "Test Automation",
        "Test Frameworks",
        "Quality Assurance",
        "Performance Testing",
      ],
    },
  ],
  certifications: [
    {
      name: "Azure Cloud Certification",
      issuer: "Microsoft",
      date: "2023",
    },
    {
      name: "GCP Cloud Certification",
      issuer: "Google",
      date: "2023",
    },
  ],
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/a-5ingh",
      icon: "BsGithub",
    },
    {
      platform: "LinkedIn",
      url: "#",
      icon: "BsLinkedin",
    },
    {
      platform: "Email",
      url: "mailto:amarbir1800@gmail.com",
      icon: "BsEnvelope",
    },
    {
      platform: "Medium",
      url: "#",
      icon: "BsMedium",
    },
  ],
};
