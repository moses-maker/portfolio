import "@/App.css";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Teaching from "./components/Teaching";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-tech-deep text-slate-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Teaching />
      <Projects />
      <Leadership />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;