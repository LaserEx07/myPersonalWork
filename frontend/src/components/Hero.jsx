import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ developer }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Mock CV download functionality
    const link = document.createElement('a');
    link.href = '/cv-alex-thompson.pdf'; // This would be a real CV file
    link.download = 'Alex_Thompson_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {developer.name.split(' ')[0]}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              {developer.title}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto animate-slide-up">
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              {developer.bio}
            </p>
          </div>

          {/* Tech Stack Preview */}
          <div className="animate-slide-up-delay mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['React', 'Angular', 'PHP', 'Laravel', 'C#', 'JavaScript', 'React Native', 'Azure DevOps'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-2">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={handleDownloadCV}
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 animate-slide-up-delay-3">
            <a 
              href={`https://${developer.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href={`https://${developer.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${developer.email}`}
              className="p-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown 
              className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300" 
              size={32}
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;