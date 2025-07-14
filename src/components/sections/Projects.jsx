import { RevealOnScroll } from "../RevealOnScroll";
import techCareImg from "../assets/Tech.Care.png";
import BankApp from "../assets/WebBank.png";
import TaskApp from "../assets/TaskManagement.png";
import Detection from "../assets/Detection.png";
import FireEvac from "../assets/FireEvac.png";
import Valentines from "../assets/Valentines.png";
import Fintrakr from "../assets/Fintrackr.png";
import MovieRecommender from "../assets/movie-recommender.png";

const projects = [
  {
    title: "Movie Recommender AI Agent",
    description: "An intelligent movie recommendation system that uses machine learning algorithms to suggest personalized movies based on user preferences, viewing history, and ratings. The AI agent employs collaborative filtering and content-based filtering techniques to analyze user behavior patterns and movie features, delivering accurate recommendations through an interactive chatbot interface.",
    techStack: ["Python", "Machine Learning", "NLP", "OpenAI API", "Judgment Labs Tracer", "Async Programming", "CI/CD"],
    image: MovieRecommender,
    link: "https://github.com/ManviRankawat/MovieRecommendationBot",
  },
  {
    title: "Real Time Number Plate Detection",
    description: "Reading license plates from video using YOLO v9 for real-time detection and OCR for alphanumeric extraction. Trained and validated on a Roboflow ANPR dataset for accurate detection under various conditions.",
    techStack: ["YoloV9", "Roboflow ANPR Dataset", "OCR"],
    image: Detection,
    link: "https://github.com/ManviRankawat/Real-Time-License-Plate-Recognition-withYOLOv9andEasyOCR",
  },
  {
    title: "Tech.Care Dashboard",
    description: "Dynamic frontend task interface displaying real-time vitals and diagnosis history for patients.",
    techStack: ["React", "TailwindCSS", "NodeJS", "API integration"],
    image: techCareImg,
    link: "https://github.com/ManviRankawat/FrontendCreationTech.Care",
  },
  {
    title: "Banking Web App",
    description: "Full-stack banking application with modern UI, secure payments, and transaction history.",
    techStack: ["HTML", "TypeScriptCSS", "JS", "SQL"],
    image: BankApp,
    link: "https://github.com/ManviRankawat/WebDev-BankingSystem",
  },
  {
    title: "Task Management App",
    description: "Personalized user experience to create, prioritize, and update tasks efficiently.",
    techStack: ["MongoDB", "Express", "React", "NodeJS"],
    image: TaskApp,
    link: "https://github.com/ManviRankawat/TaskManagementApp_FullStack",
  },
  {
    title: "AI Fire Evacuation",
    description: "An intelligent evacuation planning system using Monte Carlo Tree Search to guide a rescue agent toward the nearest exit while dynamically adapting to spreading fires and uncertain environments.",
    techStack: ["MonteCarlo Tree Search", "Matplotlib", "AI agent"],
    image: FireEvac,
    link: "https://github.com/ManviRankawat/EvacuationPlanning_FireHazard",
  },
  {
    title: "Digital Valentine's Proposal",
    description: "Creativity meets romance. This project provides an interactive platform for anyone looking to express their affection in a memorable and unique way.",
    techStack: ["HTML", "CSS", "JS"],
    image: Valentines,
    link: "https://valentineproposal.github.io/",
  },
  {
    title: "Finance Tracker",
    description: "Angular-based personal finance tracker that helps users manage income, expenses, and budgets in real time. Built with a component-driven architecture, it features dynamic data visualization, responsive UI, and modular services for managing transactions, categories, and financial summaries.",
    techStack: ["Angular", "HTML", "CSS", "JS"],
    image: Fintrakr,
    link: "https://github.com/ManviRankawat/FinTrackr",
  }
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-black text-white py-16 sm:py-20 lg:py-24"
    >
      <RevealOnScroll>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/50 shadow-lg hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-52 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-blue-500/20 hover:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm sm:text-base font-medium"
                    >
                      View Project
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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