import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const router = createBrowserRouter(
  [
    { path: "/", element: <App /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "hero", element: <Hero /> },
    { path: "home", element: <Home /> },
    { path: "projects", element: <Projects /> },
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
