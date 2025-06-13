import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Timeline Data with enhanced information
const timelineData = [
  {
    date: "Aug 2023 - May 2025",
    icon: <FaGraduationCap className="text-blue-400" />,
    title: "M.S. in Computer Science",
    organization: "George Washington University",
    location: "Washington, DC",
    type: "education",
    description: "Advanced coursework in software engineering, algorithms, and system design",
    color: "blue",
    status: "current"
  },
  {
    date: "Sept 2022 - Aug 2023",
    icon: <FaBriefcase className="text-emerald-400" />,
    title: "IT - Software Engineer/ Analyst",
    organization: "AXIS BANK",
    location: "Mumbai, India",
    type: "work",
    description: "Led digital transformation initiatives and system optimization projects",
    color: "emerald",
    status: "completed"
  },
  {
    date: "June 2022 - Sept 2022",
    icon: <FaBriefcase className="text-purple-400" />,
    title: "Associate Software Developer",
    organization: "PERCIPERE",
    location: "Mumbai, India",
    type: "work",
    description: "Developed automation solutions and streamlined business processes- UiPath",
    color: "purple",
    status: "completed"
  },
  {
    date: "Aug 2018 - June 2022",
    icon: <FaGraduationCap className="text-cyan-400" />,
    title: "B.E. in Electronics Engineering",
    organization: "University Of Mumbai",
    location: "Mumbai, India",
    type: "education",
    description: "Strong foundation in electronics, programming, and engineering principles",
    color: "cyan",
    status: "completed"
  },
];

const Timeline = () => {
  // Sort by start date (most recent first)
  const sortedData = [...timelineData].sort((a, b) => {
    const aStart = new Date(a.date.split(" - ")[0]);
    const bStart = new Date(b.date.split(" - ")[0]);
    return bStart - aStart;
  });

  return (
    <div className="py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-8"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 h-full hidden md:block"></div>
        
        {/* Mobile Timeline Line */}
        <div className="absolute left-6 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 h-full md:hidden"></div>

        {sortedData.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-8 ${
                isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-row`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg border-2 border-gray-900">
                  <div className="text-lg text-white">
                    {event.icon}
                  </div>
                </div>
                
                {/* Current Status Dot */}
                {event.status === 'current' && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                )}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                isLeft ? 'md:mr-6' : 'md:ml-6'
              }`}>
                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/30 transition-all duration-300">
                  {/* Type Badge */}
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                    event.type === 'education' 
                      ? 'bg-blue-500/20 text-blue-300' 
                      : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {event.type === 'education' ? 'Education' : 'Experience'}
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    {event.title}
                  </h3>

                  {/* Organization */}
                  <div className="text-sm font-medium text-blue-300 mb-2">
                    {event.organization}
                  </div>

                  {/* Location and Date */}
                  <div className="flex flex-col gap-1 mb-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// About Section
export const About = () => {
  const frontendSkills = ["React", "Angular", "TypeScript", "TailwindCSS", "Javascript"];
  const backendSkills = ["Node.js", "Express.js", "Python", "AWS", "MongoDB", "PostGreSQL"];

  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center py-20 relative">
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            >
              About Me
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 mb-12"
            >
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Passionate developer with expertise in building scalable web applications and creating innovative solutions. 
                I love transforming complex problems into elegant, user-friendly experiences.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frontend Skills */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-2">
                    <span className="text-3xl">🎨</span> Frontend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((tech, key) => (
                      <motion.span 
                        key={key}
                        whileHover={{ scale: 1.1 }}
                        className="bg-blue-500/20 text-blue-300 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/30 hover:shadow-lg border border-blue-500/30 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Backend Skills */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold mb-6 text-emerald-300 flex items-center gap-2">
                    <span className="text-3xl">⚙️</span> Backend
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((tech, key) => (
                      <motion.span 
                        key={key}
                        whileHover={{ scale: 1.1 }}
                        className="bg-emerald-500/20 text-emerald-300 py-2 px-4 rounded-full text-sm font-medium hover:bg-emerald-500/30 hover:shadow-lg border border-emerald-500/30 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <Timeline />
        </RevealOnScroll>
      </section>
    </>
  );
};