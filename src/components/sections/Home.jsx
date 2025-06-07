import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import Animation from "../assets/codingMe.gif";
import bgGif from "../assets/bg-content.gif";

export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate blur intensity based on scroll (0 to 15px)
  const blurIntensity = Math.min(15, scrollY / 20);
  
  // Calculate the blur transition boundary
  const blurBoundary = Math.min(70, scrollY / 8);
  const blackBoundary = Math.min(40, scrollY / 15);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden"
    >
      {/* Fixed Background GIF with Progressive Blur */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={bgGif}
          alt="Background Animation"
          className="w-full h-full object-cover fixed top-0 left-0"
          style={{
            filter: `blur(${blurIntensity}px)`,
          }}
        />
      </div>

      {/* Blur Mask Overlay - Creates the blur boundary */}
      <div 
        className="absolute inset-0 w-full h-full z-1 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            black 0%, 
            rgba(0,0,0,0.9) ${blackBoundary}%, 
            rgba(0,0,0,0.3) ${blurBoundary}%, 
            transparent 100%)`
        }}
      />

      {/* Sharp Black Border for Next Section Transition */}
      <div 
        className="absolute bottom-0 left-0 w-full pointer-events-none z-2"
        style={{
          height: `${Math.max(0, scrollY / 3)}px`,
          background: 'linear-gradient(to top, #000000 0%, #000000 60%, transparent 100%)',
          transition: 'height 0.1s ease-out'
        }}
      />

      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative z-10">
          {/* Left Content */}
          <div className="text-left md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hello, I'm Manvi
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-md">
              I'm a full-stack developer passionate about crafting clean, scalable web
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