import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = ({ developer, education, certifications }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-200">
                Passionate Full-Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-200">
                {developer.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  <span>{developer.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">8+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">2+</div>
                <div className="text-sm text-gray-600">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
                Education
              </h3>
              {education.map((edu) => (
                <Card key={edu.id} className="mb-4 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                    <div className="flex justify-between items-center text-gray-600 text-sm mb-3">
                      <span>{edu.year}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 mr-2 text-purple-600" />
                Certifications
              </h3>
              {certifications.map((cert) => (
                <Card key={cert.id} className="mb-4 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-purple-600 font-medium mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-gray-600 text-sm">
                      <span>{cert.date}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;