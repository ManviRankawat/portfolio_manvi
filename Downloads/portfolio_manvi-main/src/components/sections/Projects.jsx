import { RevealOnScroll } from "../RevealOnScroll";
import techCareImg from "../assets/Tech.Care.png";
import BankApp from "../assets/WebBank.png";
import TaskApp from "../assets/TaskManagement.png";
import Detection from "../assets/Detection.png";
import FireEvac from "../assets/FireEvac.png";
import Valentines from "../assets/Valentines.png";

const projects = [
  {
    title: "Real Time Number Plate Detection",
    description:
      "Reading license plates from video using YOLO v9 for real-time detection and OCR for alphanumeric extraction. Trained and validated on a Roboflow ANPR dataset for accurate detection under various conditions.",
    techStack: ["YoloV9", "Roboflow ANPR Dataset", "OCR"],
    image: Detection,
    link: "https://github.com/ManviRankawat/Real-Time-License-Plate-Recognition-withYOLOv9andEasyOCR",
  },
  {
    title: "Tech.Care Dashboard",
    description:
      "Dynamic frontend task interface displaying real-time vitals and diagnosis history for patients.",
    techStack: ["React", "TailwindCSS", "NodeJS", "API integration"],
    image: techCareImg,
    link: "https://github.com/ManviRankawat/FrontendCreationTech.Care",
  },
  {
    title: "Banking Web App",
    description:
      "Full-stack banking application with modern UI, secure payments, and transaction history.",
    techStack: ["HTML", "TypeScriptCSS", "JS", "SQL"],
    image: BankApp,
    link: "https://github.com/ManviRankawat/WebDev-BankingSystem",
  },
  {
    title: "Task Management App",
    description:
      "Personalized user experience to create, prioritize, and update tasks efficiently.",
    techStack: ["MongoDB", "Express", "React", "NodeJS"],
    image: TaskApp,
    link: "https://github.com/ManviRankawat/TaskManagementApp_FullStack",
  },
  {
    title: "AI Fire Evacuation",
    description:
      "An intelligent evacuation planning system using Monte Carlo Tree Search to guide a rescue agent toward the nearest exit while dynamically adapting to spreading fires and uncertain environments.",
    techStack: ["MonteCarlo Tree Search", "Matplotlib", "AI agent"],
    image: FireEvac,
    link: "https://github.com/ManviRankawat/EvacuationPlanning_FireHazard",
  },
  {
    title: "Digital Valentine's Proposal",
    description:
      "Creativity meets romance. This project provides an interactive platform for anyone looking to express their affection in a memorable and unique way..",
    techStack: ["HTML", "CSS", "JS"],
    image: Valentines,
    link: "https://valentineproposal.github.io/",
  }
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
