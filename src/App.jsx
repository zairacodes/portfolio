import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import ProjectDetails from "./components/Homepage/Main/Projects/ProjectDetails";
import Contact from "./components/Footer/Contact/Contact";
import ScrollToTop from "../src/ScrollToTop";
import projectsData from "../src/assets/projects.json";
import emailjs from "@emailjs/browser";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function App() {
  return (
    <div className="app-container">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/projects/:id"
          element={<ProjectDetails projects={projectsData} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
