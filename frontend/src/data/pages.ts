export interface Page {
  id: string;
  title: string;
  description: string;
  path: string;
}

export const pages: Page[] = [
  {
    id: "home",
    title: "Home",
    description: "Welcome to our website. Browse and search for content.",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    description: "Learn more about us. This is my second website. The site is still under construction.",
    path: "/about",
  },
  {
    id: "Hero",
    title: "Hero",
    description: "Learn more about our hero. This is the hero section of the website.",
    path: "/Hero",
  },
  {
    id: "Projects",
    title: "Projects",
    description: "View our projects. Browse all projects on the platform.",
    path: "/Projects",
  },
  {
    id: "Contacts",
    title: "Contacts",
    description: "View contacts. Browse all contacts on the platform.",
    path: "/contact",
  },
];
