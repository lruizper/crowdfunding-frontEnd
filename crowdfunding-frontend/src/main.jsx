import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import FooterBar from "./components/FooterBar.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter(
  [{
    path: "/", element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/about", element: <AboutPage />},
      { path : "/contact", element: <ContactPage />},
    ],},
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    <RouterProvider router={router} />
  </React.StrictMode>);
