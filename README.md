# Dynamic Portfolio Template

A modern, customizable portfolio template built with React, TypeScript, and styled-components. Features a dark/light theme toggle, smooth animations, comprehensive sections for showcasing your professional experience, and export functionality.

## Features

- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Comprehensive sections:
  - About/Hero
  - Experience
  - Skills showcase
  - Project portfolio
  - Certifications
  - Contact form
- 🚀 Export functionality (PDF, DOC, PPT)
- 📝 Data-driven content management
- 🔧 Built with TypeScript
- 🎭 Modern design with fluid animations

## Technologies Used

- React 18 + TypeScript
- Vite for blazing-fast development
- styled-components for styling
- Framer Motion for animations
- React Icons
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
     ]
   };

   // themeConfig.ts - Customize colors
   export const themeConfig: ThemeConfig = {
     light: {
       primary: '#YOUR_COLOR',
       // ... other colors
     },
     dark: {
       primary: '#YOUR_COLOR',
       // ... other colors
     }
   };
   ```

## Project Structure

```
resume/
├── src/
│   ├── components/
│   │   ├── animations/    # Animation components
│   │   ├── layout/        # Layout components
│   │   └── sections/      # Main content sections
│   │       ├── Hero/      # Introduction
│   │       ├── Experience/# Work history
│   │       ├── Skills/    # Skills showcase
│   │       ├── Projects/  # Portfolio
│   │       ├── Certifications/
│   │       └── Contact/   # Contact form
│   ├── context/          # React Context providers
│   ├── data/            # Content and configuration
│   ├── styles/          # Theme and global styles
│   └── utils/           # Helper functions
└── public/             # Static assets
```

## Deployment

Automatically deploys to GitHub Pages via GitHub Actions. The workflow:
1. Installs dependencies cleanly
2. Builds the project
3. Deploys to gh-pages branch

For manual deployment:
```bash
npm run build
npm run preview # Test the build
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
