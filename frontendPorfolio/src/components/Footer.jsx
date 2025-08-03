import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = ({ developer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{developer.name}</h3>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              Full-Stack Developer passionate about creating innovative web and mobile applications. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://${developer.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 hover:scale-110 transform"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={`https://${developer.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${developer.email}`}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${developer.phone}`}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 hover:scale-110 transform"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a 
                  href={`mailto:${developer.email}`}
                  className="text-sm hover:text-white transition-colors duration-200 break-all"
                >
                  {developer.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a 
                  href={`tel:${developer.phone}`}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {developer.phone}
                </a>
              </div>
              <div className="text-gray-300 text-sm">
                 {developer.location}
              </div>
            </div>

            {/* Availability Status */}
            <div className="mt-4 p-3 bg-green-900/30 border border-green-800 rounded-lg">
              <div className="flex items-center text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Available for work
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 text-sm mb-4 md:mb-0">
              <span>© {currentYear} {developer.name}. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>and lots of </span>
            </div>

            {/* Back to Top Button */}
            <Button 
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>

          <div className="text-center text-gray-400 text-xs mt-4">
            <p>This portfolio showcases mock projects for demonstration purposes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;