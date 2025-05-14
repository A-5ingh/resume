import pptxgen from 'pptxgenjs';
import type { ResumeData } from '../data/types';

// Function to remove emojis and special characters
const cleanText = (text: string) => {
  return text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]|[🚀💻⭐️]/gu, '').trim();
};

export const exportAsPDF = (data: ResumeData) => {
  const printWindow = window.open('', '', 'width=800,height=800');
  if (!printWindow) return;

  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${data.personal.name} - Resume</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
          padding: 0.75in;
          max-width: 8.5in;
          margin: 0 auto;
          line-height: 1.4;
          color: #000000;
        }
        
        h1, h2, h3 {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif;
          color: #000000;
          margin-top: 0;
          font-weight: 600;
        }
        
        h1 {
          font-size: 18pt;
          margin-bottom: 12pt;
          letter-spacing: -0.3px;
        }
        
        h2 {
          font-size: 14pt;
          margin-bottom: 12pt;
          padding-bottom: 6pt;
          border-bottom: 1px solid #000000;
        }
        
        h3 {
          font-size: 12pt;
          margin-bottom: 8pt;
        }
        
        .section {
          margin-bottom: 24pt;
          page-break-inside: avoid;
        }

        .subsection {
          margin-bottom: 18pt;
        }
        
        p {
          margin: 0 0 12pt;
          font-size: 11pt;
          color: #000000;
        }
        
        .role {
          font-size: 13pt;
          margin-bottom: 16pt;
          font-weight: 500;
        }
        
        .role-header {
          margin-bottom: 8pt;
        }
        
        .role-period {
          font-weight: 500;
          margin-bottom: 6pt;
          font-size: 11pt;
          color: #333333;
        }
        
        .tech-list {
          margin: 8pt 0;
          padding-left: 18pt;
          list-style-type: disc;
        }
        
        ul {
          margin: 8pt 0;
          padding-left: 18pt;
          list-style-type: disc;
        }
        
        li {
          margin-bottom: 4pt;
          font-size: 11pt;
          color: #000000;
        }
        
        @media print {
          body {
            padding: 0.5in;
          }
          
          .section {
            break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <main>
        <header class="section">
          <h1>${data.personal.name}</h1>
          <p class="role">${cleanText(data.personal.role)}</p>
          <p>${data.personal.summary}</p>
        </header>
        
        <section class="section">
          <h2>Experience</h2>
          ${data.experience.map(exp => `
            <div class="subsection">
              <div class="role-header">
                <h3>${cleanText(exp.role)}</h3>
                <div class="role-period">${exp.period}</div>
              </div>
              <p>${exp.description}</p>
              <ul class="tech-list">
                ${exp.technologies.map(tech => 
                  `<li>${cleanText(tech)}</li>`
                ).join('')}
              </ul>
            </div>
          `).join('')}
        </section>
        
        <section class="section">
          <h2>Projects</h2>
          ${data.projects.map(proj => `
            <div class="subsection">
              <h3>${cleanText(proj.title)}</h3>
              <p>${proj.description}</p>
              <ul class="tech-list">
                ${proj.tech.map(tech => 
                  `<li>${cleanText(tech)}</li>`
                ).join('')}
              </ul>
            </div>
          `).join('')}
        </section>

        <section class="section">
          <h2>Skills</h2>
          ${data.skills.map(category => `
            <div class="subsection">
              <h3>${cleanText(category.category)}</h3>
              <ul>
                ${category.items.map(item => 
                  `<li>${cleanText(item)}</li>`
                ).join('')}
              </ul>
            </div>
          `).join('')}
        </section>
      </main>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(content);
  printWindow.document.close();
  
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 250);
};

export const exportAsDoc = (data: ResumeData) => {
  const content = `
# ${data.personal.name}
## ${cleanText(data.personal.role)}

${data.personal.summary}

## Experience
${data.experience.map(exp => `
### ${cleanText(exp.role)}
${exp.period}
${exp.description}

Technologies: ${exp.technologies.map(cleanText).join(', ')}`).join('\n\n')}

## Projects
${data.projects.map(proj => `
### ${cleanText(proj.title)}
${proj.description}

Technologies: ${proj.tech.map(cleanText).join(', ')}`).join('\n\n')}
  `.trim();

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportAsPPT = (data: ResumeData) => {
  try {
    const pptx = new pptxgen();

    // Title slide
    let slide = pptx.addSlide();
    slide.addText(data.personal.name, {
      x: 1,
      y: 1,
      fontSize: 24,
      bold: true,
    });
    slide.addText(cleanText(data.personal.role), {
      x: 1,
      y: 1.5,
      fontSize: 18,
    });

    // Experience slide
    slide = pptx.addSlide();
    slide.addText('Experience', {
      x: 1,
      y: 0.5,
      fontSize: 20,
      bold: true,
    });
    data.experience.forEach((exp, idx) => {
      slide.addText(`${cleanText(exp.role)} (${exp.period})`, {
        x: 1,
        y: 1 + idx * 1.5,
        fontSize: 16,
        bold: true,
      });
      slide.addText(exp.description, {
        x: 1,
        y: 1.3 + idx * 1.5,
        fontSize: 14,
      });
    });

    // Projects slide
    slide = pptx.addSlide();
    slide.addText('Projects', {
      x: 1,
      y: 0.5,
      fontSize: 20,
      bold: true,
    });
    data.projects.forEach((proj, idx) => {
      slide.addText(cleanText(proj.title), {
        x: 1,
        y: 1 + idx * 1.5,
        fontSize: 16,
        bold: true,
      });
      slide.addText(proj.description, {
        x: 1,
        y: 1.3 + idx * 1.5,
        fontSize: 14,
      });
    });

    // Save the presentation
    pptx.writeFile({ fileName: 'resume.pptx' });
  } catch (error) {
    console.error('Error generating PPTX:', error);
  }
};
