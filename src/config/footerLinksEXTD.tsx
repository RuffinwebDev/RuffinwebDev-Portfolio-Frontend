// brandLinks.ts
export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Blog", url: "/contact" },
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms of Service", url: "/terms-of-service" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", url: "/blog" },
      { label: "Documentation", url: "/documentation" },
      { label: "API Reference", url: "/api" },
      { label: "Support", url: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/about-us" },
      { label: "Careers", url: "/careers" },
      { label: "Press", url: "/press" },
      { label: "Blog", url: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms of Service", url: "/terms-of-service" },
      { label: "Cookie Policy", url: "/cookie-policy" },
    ],
  },
];
