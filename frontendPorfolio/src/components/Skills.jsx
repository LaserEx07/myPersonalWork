import React from 'react';
import { Progress } from './ui/progress';

const Skills = ({ skills }) => {
  const skillCategories = [
    { key: 'frontend', title: 'Frontend Development',color: 'blue' },
    { key: 'backend', title: 'Backend Development', color: 'green' },
    { key: 'mobile', title: 'Mobile Development',color: 'purple' },
    { key: 'tools', title: 'Tools & DevOps', color: 'orange' }
  ];

  const getColorClass = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto transition-colors duration-200">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.key}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {skills[category.key].map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-gray-200 rounded-full overflow-hidden"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getColorClass(category.color)} rounded-full transition-all duration-700 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  {category.key === 'frontend' && "Creating beautiful, responsive user interfaces"}
                  {category.key === 'backend' && "Building robust server-side applications and APIs"}
                  {category.key === 'mobile' && "Developing cross-platform mobile applications"}
                  {category.key === 'tools' && "Managing development workflow and deployment"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Other Technologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'RESTful APIs', 'Database Design', 
              'Responsive Design', 'Test-Driven Development', 'Agile/Scrum',
              'Version Control',
              'API Integration', 'Performance Optimization'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:shadow-md transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;