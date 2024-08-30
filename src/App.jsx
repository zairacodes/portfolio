import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import ProjectDetails from "./components/Homepage/Main/Projects/ProjectDetails";
import Contact from "./components/Footer/Contact/Contact";
import projectsData from "../src/assets/projects.json";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/projects/:id"
          element={<ProjectDetails projects={projectsData} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
