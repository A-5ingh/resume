# Dynamic Portfolio Template

A modern, customizable portfolio template built with React, TypeScript, and styled-components. Features a dark/light theme toggle, smooth animations, sections for experience, projects, contact information, and export functionality.

## Features

- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Sections for experience, projects, and contact
- 🚀 Export functionality (PDF, DOC, PPT)
- 📝 Data-driven content management
- 🔧 Built with TypeScript
- 🎭 Programmer-friendly fonts

## Technologies Used

- React + TypeScript
- Vite for fast development
- styled-components for styling
- Framer Motion for animations
- GitHub Actions for CI/CD

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
       email: "your.email@example.com"
     },
     experience: [
       {
         role: "Your Role",
         period: "2020 - Present",
         description: "Your responsibilities...",
         technologies: ["Tech1", "Tech2"]
       }
     ],
     // ... other sections
   };

   // themeConfig.ts
   export const themeConfig: ThemeConfig = {
     light: {
       primary: '#YOUR_COLOR',
       // ... other color settings
     },
     dark: {
       primary: '#YOUR_COLOR',
       // ... other color settings
     }
   };
   ```
3. Optional: Modify components in `src/components/` for layout changes
4. Update fonts in `index.html` if desired

## Export Options

- **PDF Export**: Clean, printable format
- **DOC Export**: Editable text format
- **PPT Export**: Presentation format

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/a-5ingh/resume.git
cd resume
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173/resume/
```

## Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The workflow is triggered on every push to the main branch.

To deploy manually:

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

3. Deploy to GitHub Pages:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Action will automatically build and deploy the site to the gh-pages branch.

## Project Structure

```
resume/
├── src/
│   ├── components/
│   │   ├── layout/          # Layout components (Header, Footer, Layout)
│   │   ├── sections/        # Main content sections (Hero, Experience, Projects, Contact)
│   │   └── shared/         # Reusable components
│   ├── data/              # Data and configuration files
│   │   ├── types.ts       # TypeScript interfaces
│   │   ├── resumeData.ts  # Your personal information
│   │   └── themeConfig.ts # Theme and styling configuration
│   ├── styles/
│   │   ├── theme.ts       # Theme types
│   │   ├── styled.d.ts    # styled-components type declarations
│   │   └── globalStyles.ts # Global styles
│   ├── context/          # React Context providers
│   ├── utils/            # Utility functions (export helpers)
│   └── assets/           # Static assets
├── public/              # Public assets
├── .github/
│   └── workflows/       # GitHub Actions deployment config
└── package.json
```

### Key Files
- `src/data/resumeData.ts`: Update this file with your information
- `src/data/themeConfig.ts`: Customize colors and styling
- `src/components/sections/`: Modify section layouts
- `.github/workflows/deploy.yml`: GitHub Pages deployment config

## Contact

For any inquiries, please reach out to [amarbir1800@gmail.com](mailto:amarbir1800@gmail.com).

## License

This project is open source and available under the [MIT License](LICENSE).
