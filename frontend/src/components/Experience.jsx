import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in software development and the experiences that shaped my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
            
            {experience.map((job, index) => (
              <div key={job.id} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full hidden md:block" 
                     style={{ top: '2rem' }}></div>
                
                {/* Content card */}
                <Card className="md:ml-16 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-blue-600">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center">
                          <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
                          {job.title}
                        </h3>
                        <h4 className="text-xl font-medium text-blue-600 mb-3">
                          {job.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col md:items-end text-gray-600 text-sm">
                        <div className="flex items-center mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Technologies used */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key achievements (mock data) */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {index === 0 && (
                          <>
                            <li className="flex items-start text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 mr-1 text-green-600 mt-0.5 flex-shrink-0" />
                              Developed 3 full-stack web applications using React and Laravel
                            </li>
                            <li className="flex items-start text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 mr-1 text-green-600 mt-0.5 flex-shrink-0" />
                              Implemented automated CI/CD pipelines using Azure DevOps
                            </li>
                            <li className="flex items-start text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 mr-1 text-green-600 mt-0.5 flex-shrink-0" />
                              Collaborated with senior developers on code reviews and best practices
                            </li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li className="flex items-start text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 mr-1 text-green-600 mt-0.5 flex-shrink-0" />
                              Built responsive websites for 5+ clients using Angular and PHP
                            </li>
                            <li className="flex items-start text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 mr-1 text-green-600 mt-0.5 flex-shrink-0" />
                              Optimized database queries resulting in 40% performance improvement
                            </li>
                            <li className="flex items-start text-gray-600 text-sm">
                              <ChevronRight className="h-4 w-4 mr-1 text-green-600 mt-0.5 flex-shrink-0" />
                              Contributed to mobile app development using React Native
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Looking for opportunities */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Ready for New Challenges
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  I'm actively seeking full-time opportunities where I can contribute my skills 
                  in full-stack development and continue growing as a professional developer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">Available</div>
                    <div className="text-sm text-gray-600">For Full-time Roles</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">Open to</div>
                    <div className="text-sm text-gray-600">Remote & On-site</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">Ready to</div>
                    <div className="text-sm text-gray-600">Start Immediately</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;