import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = ({ developer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900 cursor-pointer" 
                onClick={() => scrollToSection('hero')}>
              {developer.name}
            </h1>
            <p className="text-sm text-gray-600">{developer.title}</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`https://${developer.github}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href={`https://${developer.linkedin}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${developer.email}`}
               className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                Contact
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a href={`https://${developer.github}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href={`https://${developer.linkedin}`} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${developer.email}`}
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Mail size={20} />
                </a>
                <a href={`tel:${developer.phone}`}
                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  <Phone size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;