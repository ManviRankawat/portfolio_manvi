import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

// Timeline Data
const timelineData = [
  {
    date: "Aug 2023 - May 2025",
    icon: <FaGraduationCap className="text-blue-400" />,
    title: "M.S. in Computer Science",
    organization: "George Washington University",
    type: "education",
  },
  {
    date: "Aug 2018 - June 2022",
    icon: <FaGraduationCap className="text-blue-400" />,
    title: "B.E. in Electronics Engineering",
    organization: "University Of Mumbai",
    type: "education",
  },
  {
    date: "Oct 2022 - Aug 2023",
    icon: <FaBriefcase className="text-green-400" />,
    title: "IT - Business System Analyst",
    organization: "AXIS BANK",
    type: "work",
  },
  {
    date: "June 2022 - Oct 2022",
    icon: <FaBriefcase className="text-green-400" />,
    title: "RPA Developer- UiPath",
    organization: "PERCIPERE",
    type: "work",
  },
];
const parseDateRange = (dateRange) => {
  const [start, end] = dateRange.split(" - ");
  const startDate = new Date(`${start} 1`);
  const endDate = new Date(`${end} 1`);
  return { startDate, endDate };
};

const getDurationInMonths = (dateRange) => {
  const { startDate, endDate } = parseDateRange(dateRange);
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;
  return Math.max(months, 1); // avoid 0
};

const Timeline = () => {
  const sortedData = [...timelineData].sort((a, b) => {
    const aStart = parseDateRange(a.date).startDate;
    const bStart = parseDateRange(b.date).startDate;
    return aStart - bStart;
  });

  return (
    <section id="timeline" className="py-20">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-12">
        Timeline
      </h2>

      <div className="relative flex flex-col md:grid grid-cols-9 mx-auto p-4 text-blue-50">
        {sortedData.map((event, index) => {
          const months = getDurationInMonths(event.date);
          const height = `${months * 10}px`; // 10px per month (adjust if needed)

          const Card = (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="p-4 my-4 bg-gray-800 border border-gray-700 shadow-md rounded-xl"
              style={{ minHeight: height }}
            >
              <div className="mb-2 text-xs uppercase tracking-widest text-gray-400">
                {event.type === "education" ? "Education" : "Experience"}
              </div>
              <h3 className="font-semibold text-lg text-white">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.date}</p>
              <p className="text-sm text-gray-300">{event.organization}</p>
            </motion.div>
          );

          return (
            <div
              key={index}
              className={`flex flex-row-reverse md:contents ${
                event.type === "education" ? "justify-start" : "justify-end"
              }`}
            >
              {event.type === "education" && (
                <div className="col-start-1 col-end-5 ml-auto">{Card}</div>
              )}

              <div className="col-start-5 col-end-6 md:mx-auto relative">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-900 border-2 border-gray-700 flex items-center justify-center">
                  {event.icon}
                </div>
              </div>

              {event.type === "work" && (
                <div className="col-start-6 col-end-10 mr-auto">{Card}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

// About Section
export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"];
  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "PostGreSQL"];

  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
                Passionate developer with expertise in building scalable web applications and creating innovative solutions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Frontend Skills */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Timeline />
        </RevealOnScroll>
      </section>

      
    </>
  );
};