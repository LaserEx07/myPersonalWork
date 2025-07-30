import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Import mock data
import mockData from "./mock";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header developer={mockData.developer} />
      <main>
        <Hero developer={mockData.developer} />
        <About 
          developer={mockData.developer} 
          education={mockData.education}
          certifications={mockData.certifications}
        />
        <Skills skills={mockData.skills} />
        <Projects projects={mockData.projects} />
        <Experience experience={mockData.experience} />
        <Contact developer={mockData.developer} />
      </main>
      <Footer developer={mockData.developer} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;