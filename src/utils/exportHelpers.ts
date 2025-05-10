import pptxgen from 'pptxgenjs';
import type { ResumeData } from '../data/types';

export const exportAsPDF = (data: ResumeData) => {
  const printWindow = window.open('', '', 'width=800,height=800');
  if (!printWindow) return;

  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${data.personal.name} - Resume</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1, h2, h3 { color: #333; }
        .section { margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <h1>${data.personal.name}</h1>
      <h2>${data.personal.role}</h2>
      <p>${data.personal.summary}</p>
      
      <div class="section">
        <h2>Experience</h2>
        ${data.experience.map(exp => `
          <h3>${exp.role} (${exp.period})</h3>
          <p>${exp.description}</p>
          <p><strong>Technologies:</strong> ${exp.technologies.join(', ')}</p>
        `).join('')}
      </div>
      
      <div class="section">
        <h2>Projects</h2>
        ${data.projects.map(proj => `
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <p><strong>Technologies:</strong> ${proj.tech.join(', ')}</p>
        `).join('')}
      </div>
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
## ${data.personal.role}

${data.personal.summary}

## Experience
${data.experience.map(exp => `
### ${exp.role}
${exp.period}
${exp.description}

Technologies: ${exp.technologies.join(', ')}`).join('\n\n')}

## Projects
${data.projects.map(proj => `
### ${proj.title}
${proj.description}

Technologies: ${proj.tech.join(', ')}`).join('\n\n')}
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
    slide.addText(data.personal.role, {
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
      slide.addText(`${exp.role} (${exp.period})`, {
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
      slide.addText(proj.title, {
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
