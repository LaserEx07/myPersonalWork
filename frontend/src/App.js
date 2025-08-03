import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import mockData from "./mock";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
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
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;