// FooterLink interface with additional content fields
export interface FooterLink {
  label: string;
  url: string;
  title: string;
  content: string[];
  last_updated: string;
}

// FooterLinkGroup interface for organizing links under categories
export interface footerPagesProps {
  title: string;
  links: FooterLink[];
}

// footerPages with completed content, consistent property names
export const footerPages: footerPagesProps[] = [
  {
    title: "Product",
    links: [
      {
        label: "Home",
        url: "/",
        title: "Home",
        content: [
          "Welcome to my digital resume and portfolio site.",
          "Explore my work, services, and blog to learn more about what I do.",
        ],
        last_updated: "2024-09-22",
      },
      {
        label: "About this Site",
        url: "/about-app",
        title: "About This Site",
        content: [
          "This web application was created to be my digital resume and online hub. Combining a robust backend with an interactive, high-performance frontend. On the backend, Django, a powerful web framework for Python, handles the core business logic. It is containerized and deployed using Docker which ensures smooth and consistent deployment. The entire backend is hosted on an Amazon EC2 instance. GitHub Actions is used to update both the backend and frontend through AWS Open ID Connect (OIDC).",
          "The site uses PostgreSQL as its database management system, hosted on the same EC2 instance as the backend. PostgreSQL is a powerful, open-source relational database that ensures data integrity and provides efficient handling of the application's data. This setup allows the backend to easily communicate with the database, enabling fast and reliable storage and retrieval of information. By hosting both the database and backend on the same instance, the application remains cost-effective while maintaining a high level of performance.",
          "The frontend of the site is built using React with TypeScript, a technology that ensures a dynamic user experience with strong typing for better development practices. The frontend is deployed on Amazon's S3 service, which offers reliable storage, and is delivered globally through CloudFront, a content delivery network (CDN) that enhances the site's loading speed and security.",
          "I use PyCharm as my integrated development environment (IDE), paired with Git Bash via Windows Subsystem for Linux (WSL). The overall cloud infrastructure, including EC2, S3, CloudFront, WAF (Web Application Firewall), and VPC (Virtual Private Cloud), costs approximately $20 per month, providing a secure and scalable setup for the site with room for upward scaling.",
        ],
        last_updated: "2024-09-22",
      },
      {
        label: "Contact",
        url: "/contact",
        title: "Get in Touch",
        content: [
          "I'd love to hear from you! Whether you're looking for a developer, have a project idea, or just want to connect, feel free to drop me a message.",
          "Use the contact form below, and I'll get back to you as soon as possible.",
        ],
        last_updated: "2024-09-22",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        url: "/blog",
        title: "",
        content: [""],
        last_updated: "",
      },
      {
        label: "Help Center",
        url: "/help",
        title: "Help Center",
        content: [
          "I offer full-stack development services for individuals and businesses looking to build high-performance web applications.",
          "Contact me for custom solutions in Python, Django, JavaScript, React, PostgresSQL, and AWS cloud architecture.",
        ],
        last_updated: "2024-09-22",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        url: "/about-us",
        title: "About Ruffinweb",
        content: [
          "Ruffinweb is a local web development company dedicated to helping small and medium-sized businesses establish a strong online presence. Based in Springfield/Arlington, VA, we specialize in creating custom websites and web applications tailored to the unique needs of our clients. Whether you're looking to launch a new business site or enhance your current web platform, we work closely with you to bring your vision to life.",
          "At Ruffinweb, we understand that every business is different, and we pride ourselves on offering personalized solutions that drive results. With a focus on user experience, performance, and scalability, our goal is to deliver digital solutions that not only look great but also help your business grow.",
          "Services Include: Custom Web Development, Responsive Design, E-Commerce Solutions, Website Redesign, Web App Development, Search Engine Optimization (SEO), and more!",
        ],
        last_updated: "2024-09-22",
      },
      {
        label: "Services",
        url: "/services",
        title: "",
        content: [""],
        last_updated: "2024-09-22",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
        title: "Privacy Policy",
        content: [
          "This Privacy Statement explains how I collect and use your personal information when you contact me through the contact form on this website. It also outlines your privacy rights and how to exercise them.",
          "If you have any questions about this Privacy Statement, or how your personal information is used, feel free to reach out to me at the provided contact email. For more general inquiries regarding the site's content or functionality, please use the contact form on the website.",
        ],
        last_updated: "2024-09-22",
      },
      {
        label: "Terms of Service",
        url: "/terms-of-service",
        title: "Terms of Service",
        content: [
          "The content on this website is protected by copyright, trademark, trade secret, and other intellectual property laws. All rights to this website’s content are reserved by the owner, and unauthorized use or distribution of content may lead to legal action.",
          "If you believe any content on this website infringes upon your or someone else’s copyrights, please use the contact form to report it, and it will be reviewed accordingly.",
        ],
        last_updated: "2024-09-22",
      },
      {
        label: "Cookie Policy",
        url: "/cookie-policy",
        title: "Cookie Policy",
        content: [
          "This website, along with service providers, uses cookies and similar technologies (such as pixel tags) for various reasons. This section explains the types of technologies used, what they do, and your options for controlling them. For more information on managing your cookie preferences, please see the section below 'How can I manage my cookie settings?'",
          "Cookies are small data files that are stored on your device when you access this website. These cookies may uniquely identify your device and allow the website to recognize your browser each time you visit.",
          "Cookies are used for several reasons, including providing a better user experience (by remembering you when you return), improving site performance, and for security and fraud prevention purposes. You can choose to accept or decline cookies in your browser settings.",
        ],
        last_updated: "2024-09-22",
      },
      {
        label: "Terms of Use",
        url: "/terms-of-use",
        title: "Terms of Use",
        content: [
          "These Terms of Use govern your access to and use of this website. By using the site, you agree to comply with these terms. Any unauthorized use of the content or services may result in suspension or legal action.",
        ],
        last_updated: "2024-09-22",
      },
    ],
  },
];
