import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Animation from "../assets/codingMe.gif";
import bgGif from "../assets/bg-content.gif"; // OR use public path like "/bg-content.gif"

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const bgOpacity = Math.max(0, 1 - scrollY / 300);


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background GIF */}
      <img
        src={bgGif}
        alt="Background Animation"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      />

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative z-10">
          {/* Left Content */}
          <div className="text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hello, I'm Manvi
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-md">
              I’m a full-stack developer passionate about crafting clean, scalable web
              applications. I love transforming ideas into elegant, performant, and joyful user experiences.
            </p>

            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Animation */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={Animation}
              alt="Coding Animation"
              className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
