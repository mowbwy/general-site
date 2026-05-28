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
    id: "contact",
    title: "Contact",
    description: "Get in touch with us. Contact page for inquiries and messages.",
    path: "/contact",
  },
  {
    id: "login",
    title: "Login",
    description: "Sign in to your account. User authentication and login page.",
    path: "/login",
  },
  {
    id: "users",
    title: "Users",
    description: "View users. Browse all users on the platform.",
    path: "/user",
  },
];
