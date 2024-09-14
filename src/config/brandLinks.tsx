export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export const brandLinks: FooterLinkGroup[] = [
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
      { label: "Beans", url: "/beans" },
      { label: "Greens", url: "/greens" },
      { label: "Potatoes", url: "/potatoes" },
      { label: "Tomatoes", url: "/tomatoes" },
      { label: "Hams", url: "/hams" },
      { label: "Rams", url: "/rams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: "/about-us" },
      { label: "Careers", url: "/careers" },
      { label: "Press", url: "/press" },
      { label: "Contact", url: "/contact" },
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

  {
    title: "Site",
    links: [
      { label: "Site 1", url: "/extLink1" },
      { label: "Site 2", url: "/extLink2" },
      { label: "Site 3", url: "/extLink3" },
      { label: "Site 4", url: "/extLink4" },
      { label: "Site 5", url: "/extLink5" },
      { label: "Site 6", url: "/extLink6" },
    ],
  },
];
