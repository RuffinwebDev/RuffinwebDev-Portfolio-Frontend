import { ReactNode } from "react";
import { Services } from "../pages/Services/Services";
import { Blog } from "../pages/Blog/Blog";
import { Contact } from "../pages/Contact/Contact";

export interface mainAppRoutesProps {
  name: string;
  route: string;
  element: ReactNode;
}

export const mainAppRoutes: mainAppRoutesProps[] = [
  { name: "Services", route: "/services", element: <Services /> }, // Change back to services later.
  { name: "Blog", route: "/blog", element: <Blog /> },
  { name: "Contact", route: "/contact", element: <Contact /> },
];
