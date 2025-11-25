import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TabStopType, TabStopPosition } from 'docx';
import { saveAs } from 'file-saver';
import type { ResumeData } from '../data/types';

// Function to remove emojis and special characters
const cleanText = (text: string) => {
  return text
    .replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{1F200}-\u{1F2FF}]|[\u{1F004}]|[\u{1F0CF}]|[\u{1F170}-\u{1F171}]|[\u{1F17E}-\u{1F17F}]|[\u{1F18E}]|[\u{3030}]|[\u{2B50}]|[\u{2B55}]|[\u{2934}-\u{2935}]|[\u{2B05}-\u{2B07}]|[\u{2B1B}-\u{2B1C}]|[\u{3297}]|[\u{3299}]|[\u{1F000}-\u{1F0FF}]/gu, '')
    .replace(/[🚀💻⭐️👨‍💻🐳🔄⚛️💚🎯🤖💾💰🔍📊🛠️🏗️⚡🛡️📚☁️🌟💪🐍🔌📐📝🔧⚙️]/g, '') // Explicitly remove specific emojis used in data
    .trim();
};

export const exportAsPDF = () => {
  window.print();
};

export const exportAsDoc = async (data: ResumeData) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Name
        new Paragraph({
          text: data.personal.name,
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
        }),
        // Role
        new Paragraph({
          text: cleanText(data.personal.role),
          heading: HeadingLevel.HEADING_2,
          alignment: AlignmentType.CENTER,
        }),
        // Contact Info
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: data.personal.email }),
            new TextRun({ text: " | " }),
            new TextRun({ text: data.personal.phone || "" }),
            new TextRun({ text: " | " }),
            new TextRun({ text: data.social.find(s => s.platform === 'LinkedIn')?.url || "" }),
          ],
        }),
        new Paragraph({ text: "" }), // Spacer

        // Summary
        new Paragraph({
          text: "Professional Summary",
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          text: data.personal.summary,
        }),
        new Paragraph({ text: "" }),

        // Experience
        new Paragraph({
          text: "Experience",
          heading: HeadingLevel.HEADING_1,
        }),
        ...data.experience.flatMap(exp => [
          new Paragraph({
            children: [
              new TextRun({
                text: cleanText(exp.role),
                bold: true,
                size: 24,
              }),
              new TextRun({
                text: `\t${exp.period}`,
                bold: true,
              }),
            ],
            tabStops: [
              {
                type: TabStopType.RIGHT,
                position: TabStopPosition.MAX,
              },
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: exp.company,
                italics: true,
              }),
            ],
          }),
          new Paragraph({
            text: exp.description,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Technologies: ${exp.technologies.map(cleanText).join(', ')}`,
                italics: true,
              }),
            ],
          }),
          new Paragraph({ text: "" }),
        ]),

        // Projects
        new Paragraph({
          text: "Projects",
          heading: HeadingLevel.HEADING_1,
        }),
        ...data.projects.flatMap(proj => [
          new Paragraph({
            text: cleanText(proj.title),
            heading: HeadingLevel.HEADING_3,
          }),
          new Paragraph({
            text: proj.description,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Technologies: ${proj.tech.map(cleanText).join(', ')}`,
                italics: true,
              }),
            ],
          }),
          new Paragraph({ text: "" }),
        ]),

        // Skills
        new Paragraph({
          text: "Skills",
          heading: HeadingLevel.HEADING_1,
        }),
        ...data.skills.flatMap(skill => [
          new Paragraph({
            children: [
              new TextRun({
                text: `${cleanText(skill.category)}: `,
                bold: true,
              }),
              new TextRun({
                text: skill.items.map(cleanText).join(', '),
              }),
            ],
          }),
        ]),

        // Certifications
        new Paragraph({ text: "" }),
        new Paragraph({
          text: "Certifications",
          heading: HeadingLevel.HEADING_1,
        }),
        ...data.certifications.map(cert =>
          new Paragraph({
            children: [
              new TextRun({
                text: cert.name,
                bold: true,
              }),
              new TextRun({
                text: ` - ${cert.issuer} (${cert.date})`,
              }),
            ],
          })
        ),
      ],
    }],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${data.personal.name.replace(/\s+/g, '_')}_Resume.docx`);
};
