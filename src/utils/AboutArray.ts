interface About {
  title: string;
  text: string;
  icons: string[];
}

const AboutArray: About[] = [
  {
    title: "Full Stack Web Development",
    text: "With 4 years of experience, I cover both frontend and backend development, ensuring end-to-end solutions for various projects. My expertise spans from database design to UI implementation, making me proficient in delivering robust and scalable applications.",
    icons: ["/media/dev.svg", "/media/web.svg"],
  },
  {
    title: "Python/Django Backend",
    text: "Specializing in Python and Django, I focus on building reliable backend systems that power data-intensive applications. My experience includes developing RESTful APIs, handling authentication, and optimizing database performance for efficient data management.",
    icons: ["/media/python.svg", "/media/django.svg"],
  },
  {
    title: "TypeScript /React Frontend",
    text: "Exploring JavaScript/Typescript and React, I craft interactive user interfaces and dynamic web applications. Leveraging modern frontend technologies, I prioritize user experience and accessibility to create engaging digital experiences.",
    icons: ["/media/javascript.svg", "/media/react.svg"],
  },
  {
    title: "Database Administration",
    text: "Proficient in database administration, I manage PostgreSQL for large-scale production databases and SQLite for lightweight applications. My expertise ensures data reliability, performance, and security across diverse database environments.",
    icons: ["/media/postgresql.svg", "/media/sqlite.svg"],
  },
  {
    title: "Cloud Infrastructure Management",
    text: "Leveraging AWS services like EC2, S3, CloudFront, IAM, Route53 and more, I streamline deployment and management of scalable infrastructure. From serverless architectures to containerized solutions, I optimize cloud resources for efficient operations.",
    icons: ["/media/aws.svg", "/media/docker.svg"],
  },
  {
    title: "Project Management",
    text: "Experienced in project management using Jira and Scrum methodology, I facilitate team collaboration, sprint planning, and backlog grooming to deliver high-quality software products on time. By leveraging Jira's robust features, I track project progress, manage tasks, and adapt to changing requirements to ensure project success.",
    icons: ["/media/jira.svg", "/media/scrum.svg"],
  },
];

export default AboutArray;
