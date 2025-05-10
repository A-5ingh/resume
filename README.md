# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and styled-components. Features a dark/light theme toggle, smooth animations, and sections for experience, projects, and contact information.

## Features

- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Sections for experience, projects, and contact
- 🚀 Optimized for performance
- 📝 Clean and modern UI
- 🔧 Built with TypeScript for better type safety

## Technologies Used

- React
- TypeScript
- styled-components
- Framer Motion
- Vite
- GitHub Actions (CI/CD)

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
│   │   ├── layout/
│   │   ├── sections/
│   │   └── shared/
│   ├── styles/
│   │   ├── theme.ts
│   │   └── globalStyles.ts
│   └── assets/
├── public/
├── .github/workflows/
└── package.json
```

## Contact

For any inquiries, please reach out to [amarbir1800@gmail.com](mailto:amarbir1800@gmail.com).
