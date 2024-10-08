import { ReactNode } from "react";

export interface projectsContentProps {
  title: string;
  summary: string;
  previewUrl: ReactNode;
  skills: string[];
}

export const projectsContent: projectsContentProps[] = [
  // { title: 'Mythology Stories Application', summary: "Mythology Stories", previewUrl: 'https://github.com/ruffinweb/DevOpsGuide', skills: ['JavaScript', 'React', 'Material UI', 'Django', 'PostgreSQL']  },

  {
    title: "OuiParle Technical Lead",
    summary:
      "Currently leading the development of a language-learning app focused on providing social mobility to African diaspora in France. Our international cross-functional team centered in Philadelphia, PA is working to build and deploy the app in 2025.",
    previewUrl: "https://github.com/ruffinweb/ruffinweb",
    skills: [
      "Django Rest Framework",
      "React Native",
      "AWS",
      "GDPR Compliance",
      "Jira",
    ],
  },

  {
    title: "Sassy Hair Salon Web Marketing",
    summary:
      "Developed and deployed a promotional web app with React and Node.js, enhancing customer experience with streamlined booking feature and improving customer engagement with a detailed review page. Built AWS-based architecture for scalable content management and optimized performance.",
    previewUrl: "https://github.com/ruffinweb?tab=repositories",
    skills: ["React", "Node.js", "AWS S3", "Cloudfront", "Stripe"],
  },

  {
    title: "Accenture Frontend Development",
    summary:
      "Led frontend development of responsive websites using semantic HTML, CSS, and Vanilla JavaScript, ensuring high accessibility and compliance with web standards. Also built a Python and SQL-based customer order system for efficient data handling.",
    previewUrl: "https://github.com/ruffinweb?tab=repositories",
    skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  },

  {
    title: "Hack the Hood System Administration",
    summary:
      "Developed a system monitoring dashboard to track CPU, memory, disk, and network activity in real time. Automated administrative tasks using Bash and Powershell, enhancing operational efficiency across Unix/Linux systems.",
    previewUrl: "https://github.com/ruffinweb?tab=repositories",
    skills: ["Python", "Bash", "Powershell"],
  },
];

export default projectsContent;
