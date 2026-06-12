import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Hero from "./pages/Hero";
import Search from "./pages/Search";
import Projects from "./pages/Projects";
import GSearch from "./pages/GSearch";

const router = createBrowserRouter(
  [
    { path: "*", element: <App /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "hero", element: <Hero /> },
    { path: "search", element: <Search /> },
    { path: "projects", element: <Projects /> },
    { path: "gsearch", element: <GSearch /> }
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
