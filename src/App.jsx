import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Main/Intro";
import Projects from "./components/Main/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
