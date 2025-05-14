# Dynamic Portfolio Template

A modern, customizable portfolio template built with React, TypeScript, and styled-components. Features a dark/light theme toggle, smooth animations, comprehensive sections for showcasing your professional experience, and multi-format export functionality.

## Features

- 🎨 Dark/Light theme support with customizable colors
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Comprehensive sections:
  - About/Hero
  - Experience
  - Skills showcase
  - Projects portfolio
  - Certifications
  - Contact form
- 🚀 Export functionality:
  - PDF (A4 format)
  - Word Document (DOC)
  - PowerPoint Presentation (16:9)
- 📝 Data-driven content management
- 🎭 Modern design with fluid animations
- 🔤 Custom typography with JetBrains Mono and Fira Code fonts
- 🔗 Social media integration
- ⚡ Type animations for dynamic text

## Technologies Used

- React 18 + TypeScript
- Vite 6 for blazing-fast development
- styled-components for styling
- Framer Motion for animations
- React Icons
- React Type Animation
- pptxgenjs for PowerPoint export
- GitHub Actions for CI/CD

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/a-5ingh/resume.git
cd resume
```

2. Clean install dependencies:
```bash
npm clean-install
```

3. Start development server:
```bash
npm run dev
```

4. View in browser:
```
http://localhost:5173
```

## Customization

1. Fork this repository
2. Update the data files in `src/data/`:
   ```typescript
   // resumeData.ts
   export const resumeData: ResumeData = {
     personal: {
       name: "Your Name",
       role: "Your Role",
       summary: "Your professional summary...",
       email: "your.email@example.com",
       phone: "Your Phone" // Optional
     },
     experience: [
       {
         role: "Position Title",
         company: "Company Name",
         period: "2020 - Present",
         description: "Your responsibilities...",
         technologies: ["Tech1", "Tech2"],
         icon: YourIcon // Optional icon from react-icons
       }
     ],
     projects: [
       {
         title: "Project Name",
         category: "Category",
         description: "Project description...",
         tech: ["Tech1", "Tech2"],
         link: "https://project-url.com" // Optional
       }
     ],
     skills: [
       {
         category: "Category Name",
         items: ["Skill 1 ⭐", "Skill 2 🚀", "Skill 3 💻"]
       }
     ],
     certifications: [
       {
         name: "Certification Name",
         issuer: "Issuer",
         date: "2023"
       }
     ],
     social: [
       {
         platform: "GitHub",
         url: "https://github.com/username",
         icon: BsGithub // Icon from react-icons
       }
     ]
   };

   // themeConfig.ts - Customize colors and settings
   export const themeConfig: ThemeConfig = {
     light: {
       primary: '#2EA043',
       secondary: '#0D1117',
       text: '#24292F',
       // ... other color settings
     },
     dark: {
       primary: '#2EA043',
       secondary: '#161B22',
       text: '#C9D1D9',
       // ... other color settings
     },
     defaultMode: 'dark' // Set default theme mode
   };

   // Font configuration
   export const fontConfig = {
     primary: "'JetBrains Mono', monospace",
     secondary: "'Fira Code', monospace",
     preloadUrls: [
       // Font URLs for preloading
     ]
   };
   ```

## Project Structure

```
resume/
├── src/
│   ├── components/
│   │   ├── animations/    # Animation components
│   │   ├── layout/        # Layout components
│   │   ├── shared/        # Shared/reusable components
│   │   └── sections/      # Main content sections
│   │       ├── Hero/      # Introduction
│   │       ├── Experience/# Work history
│   │       ├── Skills/    # Skills showcase
│   │       ├── Projects/  # Portfolio
│   │       ├── Certifications/
│   │       └── Contact/   # Contact form
│   ├── context/          # React Context providers
│   ├── data/            # Content and configuration
│   ├── styles/          # Theme, fonts, and global styles
│   ├── utils/           # Helper functions for export and formatting
│   └── assets/         # Static assets and images
└── public/            # Static files and favicons
```

## Deployment

This project uses GitHub Actions to automatically deploy to GitHub Pages. Here's how to set it up:

1. **Repository Settings**:
   - Go to repository Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Ensure GitHub Pages is enabled for the repository

2. **Permissions Setup**:
   - Go to Settings > Actions > General
   - Under "Workflow permissions":
     - Enable "Read and write permissions"
     - Check "Allow GitHub Actions to create and approve pull requests"

3. **Deployment Process**:
   The workflow automatically:
   - Installs dependencies cleanly
   - Builds the project with correct base URL
   - Deploys to GitHub Pages
   - Provides deployment URL in the workflow summary

4. **Troubleshooting Deployment**:
   If deployment fails:
   - Verify repository settings as described above
   - Check Actions tab for detailed error logs
   - Ensure your repository has GitHub Pages feature enabled
   - Verify branch permissions allow workflow deployment

For manual testing before deployment:
```bash
npm run build
npm run preview # Test the build locally
```

## Troubleshooting

If you encounter dependency issues:
```bash
npm run clean    # Removes node_modules, package-lock.json, and dist
npm run reinstall # Clean install of dependencies
```

Requirements:
- Node.js >=16.0.0
- npm >=8.0.0

## Contact

For questions or suggestions, reach out to [amarbir1800@gmail.com](mailto:amarbir1800@gmail.com)

## License

This project is open source under the [MIT License](LICENSE).
