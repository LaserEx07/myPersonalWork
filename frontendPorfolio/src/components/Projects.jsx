import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Application', 'Mobile Application', 'Desktop Application'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-200">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="secondary"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button 
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6" style={{ backgroundColor: project.bgColor }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Projects Section */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h3 className="text-3xl font-semibold text-gray-900 mb-4 md:mb-0">
              All Projects
            </h3>
            
            {/* Filter Buttons */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    variant={activeFilter === category ? "default" : "outline"}
                    size="sm"
                    className={`transition-all duration-200 ${
                      activeFilter === category 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-gray-600 hover:text-gray-900"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
            onClick={() => window.open('https://github.com/alexthompson', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;