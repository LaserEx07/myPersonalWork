import React from 'react';
import { Card, CardContent } from './ui/card';

const ProfileCard = () => {
  return (
    <Card className="max-w-4xl mx-auto my-8 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Profile Image */}
          <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
            <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="text-white text-6xl font-bold">
                J
              </div>
              {/* When you add your image, replace the div above with: */}
              {/* <img 
                src="/path-to-your-image.jpg" 
                alt="Junrel Profile" 
                className="w-full h-full rounded-full object-cover"
              /> */}
            </div>
          </div>

          {/* Right side - Bio Content */}
          <div className="md:w-2/3 p-8">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Hi, I'm Junrel
                </h1>
                <h2 className="text-xl font-semibold text-blue-600 mb-4">
                  Full-Stack Developer
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-lg">
                Passionate Junior Full-Stack Developer with expertise in modern web 
                Technologies and Mobile development. Experienced with React, Angular, 
                PHP, Laravel, C#, and Azure DevOps. Seeking opportunities to contribute 
                to innovative projects and grow in a collaborative development environment.
              </p>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Angular', 'PHP', 'Laravel', 'C#', 'Azure DevOps'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact/Social Links (optional) */}
              <div className="flex gap-4 pt-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Me
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
