import { ReactNode } from "react";
import {Services} from "../pages/Services/Services";
import {Blog} from "../pages/Blog/Blog";
import {Contact} from "../pages/Contact/Contact";

export interface NavItem {
  name: string;
  route: string;
  element: ReactNode;
}

export const navItems: NavItem[] = [
  { name: "Services", route: "/services", element: <Services /> },
  { name: "Blog", route: "/blog", element: <Blog /> },
  { name: "Contact", route: "/contact", element: <Contact /> },
];
