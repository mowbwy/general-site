import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Hero from "./pages/Hero";
import Home from "./pages/home";
import Users from "./pages/Projects";
import Projects from "./pages/Projects";
export async function searchItems(query: string) {
  const res = await fetch(`http://localhost:5000/api/search?q=${query}`);
  return res.json();
}

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "Hero",
      element: <Hero />,
    },
    {
      path: "Projects",
      element: <Projects />,
    },
  ],
  {
    basename: "/general-site",
  }
);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  
