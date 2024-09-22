// Import the necessary components first
import { ReactNode } from "react";
import { Services } from "../pages/Services/Services"; // Ensure Services is imported before usage
import { Blog } from "../pages/Blog/Blog";
import { Contact } from "../pages/Contact/Contact";
import { LandingPage } from "../pages/LandingPage/LandingPage";

// Define companyServicesProps interface
export interface companyServicesProps {
  name: string;
  route: string;
  element: ReactNode;
  title?: string;
  content?: string[];
  last_updated?: string;
}

// Now use the Services component in the companyServices array
export const companyServices: companyServicesProps[] = [
  {
    name: "Services",
    route: "/services",

    element: <LandingPage />, // Use the initialized Services component here
    title: "Our Services",
    content: [
      "At Ruffinweb, we offer a range of web development services designed to help your business succeed online:",
      "Custom Web Development: From simple business websites to complex web applications, we develop custom solutions that fit your needs.",
      "Responsive Design: We create websites that look great and perform well on any device, ensuring your customers have the best experience whether they’re on desktop or mobile.",
      "E-Commerce Solutions: Need an online store? We design and build e-commerce platforms that are secure, easy to manage, and optimized for conversions.",
      "Website Redesign: If your existing website is outdated or underperforming, we can revamp it to improve functionality, design, and user engagement.",
      "Web App Development: For businesses with more specific needs, we build web apps that streamline operations, automate tasks, and improve efficiency.",
      "Search Engine Optimization (SEO): We implement best practices for SEO to ensure your site ranks higher on search engines, driving more traffic to your business.",
    ],
    last_updated: "2024-09-22",
  },
  { name: "Blog", route: "/blog", element: <Blog /> },
  { name: "Contact", route: "/contact", element: <Contact /> },
];
