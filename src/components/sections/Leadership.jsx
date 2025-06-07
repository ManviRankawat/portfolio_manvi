import { useRef, useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import gwAssistantImg from "../assets/gwassistant.png";
import TEDxCerti from "../assets/TEDxCerti.png";
import MUN from "../assets/MUN.png";
import NSS from "../assets/NSS.png";
import CC from "../assets/CodingClub.png";
import TnP from "../assets/TnP.png";

export const Leadership = () => {
  const scrollContainerRef = useRef(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  // Leadership activities data
  const leadershipActivities = [
    {
      id: 1,
      title: "Student Assistant - George Washington University",
      description: "Social media marketing and event management specialist",
      image: gwAssistantImg,
      year: "2024-2025",
      impact: "Achieved +1,600% impression growth and +1,409% engagement increase",
      details: "Led social media marketing and event management initiatives for GWSB, creating high-engagement content and managing digital platforms. Successfully grew the university's social media presence through strategic content creation and analytics-driven campaigns.",
      skills: ["Social Media Marketing", "Content Creation", "Digital Analytics", "Event Management", "Canva Design", "Website Management"],
      achievements: [
        "Created high-engagement LinkedIn posts and visuals using Canva for event promotions",
        "Managed event registration pages on the GWSB website for seamless user experience",
        "Contributed to +1,600% impression growth and +1,409% engagement increase in 2024",
        "Helped grow the audience to 7,981 followers, with top posts reaching 19,803+ impressions",
        "Leveraged social media analytics & content strategy to boost event visibility and alumni engagement"
      ]
    },
    {
      id: 2,
      title: "NSS Volunteer Work",
      description: "Community service and social development initiatives",
      image: NSS,
      year: "Aug 2019 - Jun 2021",
      impact: "Organized multiple community service events and social service camps",
      details: "Actively participated in National Service Scheme (NSS) for nearly 2 years, organizing and participating in various community service initiatives. Led multiple social service activities including election drives, environmental campaigns, and rural community support programs.",
      skills: ["Community Service", "Event Organization", "Social Impact", "Rural Development", "Healthcare Advocacy"],
      achievements: [
        "Organized various events like Volunteering at Mahanagar Election drive, Tree plantation, Swachhata abhiyan, Blood donation drive",
        "Attended the social service camp at Balang Farms, Virar, and helped the villagers of Saiwan",
        "Organized free medical camp for rural communities",
        "Provided books, bags, and shoes for underprivileged students of the village",
        "Led cleaning and sanitation drives in rural areas"
      ]
    },
    {
        id: 3,
        title: "TEDx Event Coordinator",
        description: "Organized and managed TEDx speaking events",
        image: TEDxCerti,
        year: "2022",
        impact: "Coordinated event for 500+ attendees with 6 speakers",
        details: "Spearheaded the organization of TEDxUniversityName, managing everything from speaker curation to venue logistics. Successfully coordinated with international speakers and ensured seamless event execution.",
        skills: ["Event Management", "Speaker Coordination", "Budget Management", "Marketing"],
        achievements: [
          "Managed ₹1L+ event budget",
          "Coordinated with 6 international speakers",
          "Led 20-member organizing team",
          "Achieved 95% attendee satisfaction"
        ],
      },
    {
      id: 4,
      title: "Model United Nations Organizer",
      description: "Managed MUN conferences and delegate relations",
      image: MUN,
      year: "2019-2020",
      impact: "Led organizing committee for 2 successful MUN conferences",
      details: "Served as Secretary General for multiple MUN conferences, overseeing committee proceedings, delegate registration, and crisis management. Built partnerships with international schools and universities.",
      skills: ["Diplomacy", "Crisis Management", "International Relations", "Public Speaking"],
      achievements: [
        "Organized 2 international MUN conferences",
        "Managed 500+ delegates from 50+ institutions",
        "Established partnerships with 15 schools",
        "Introduced innovative crisis scenarios"
      ]
    },
    {
        id: 5,
        title: "Founding Member - TCET Shashtra Coding Club",
        description: "Co-founded and established college coding community",
        image: CC,
        year: "2022",
        impact: "Co-founded coding club that became college's premier programming community",
        details: "As one of the founding members of TCET Shashtra Coding Club, helped establish the college's first dedicated programming community. Built the foundation for what became the most active technical club on campus, fostering coding culture and organizing competitive programming events.",
        skills: ["Leadership", "Community Building", "Event Organization", "Mentoring", "Programming", "Team Management"],
        achievements: [
          "Co-founded TCET's first dedicated coding club from ground up",
          "Established club constitution, structure, and core activities framework",
          "Organized inaugural coding competitions and programming workshops",
          "Mentored junior students in competitive programming and development",
          "Built foundation for club that became college's premier technical community",
          "Created lasting impact on college's programming culture"
        ]
      },
    {
      id: 6,
      title: "Training & Placement Coordinator",
      description: "Facilitated campus recruitment and student placement",
      image: TnP,
      year: "2018-2022",
      impact: "Achieved 85% placement rate for graduating batch",
      details: "Worked closely with career services to connect students with top-tier companies. Organized career fairs, conducted mock interviews, and provided career counseling to students across multiple disciplines.",
      skills: ["Career Counseling", "Corporate Relations", "Interview Training", "Data Analysis"],
      achievements: [
        "Secured partnerships with 40+ companies",
        "Conducted 200+ mock interviews",
        "Organized 5 major career fairs",
        "Improved placement rate by 25%"
      ]
    }
  ];

  const infiniteActivities = [...leadershipActivities, ...leadershipActivities, ...leadershipActivities];

  useEffect(() => {
    const autoScroll = () => {
      if (scrollContainerRef.current && !isAutoScrolling) {
        setIsAutoScrolling(true);
        
        const container = scrollContainerRef.current;
        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? window.innerWidth - 32 : 306; 
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (currentScroll >= maxScroll - cardWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
        
        setTimeout(() => setIsAutoScrolling(false), 800);
      }
    };

    const interval = setInterval(autoScroll, 3000); // Auto-scroll every 3 seconds
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(true);
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? window.innerWidth - 32 : 306; // Full width on mobile, card width on desktop
      scrollContainerRef.current.scrollBy({
        left: -scrollDistance,
        behavior: "smooth"
      });
      setTimeout(() => setIsAutoScrolling(false), 800);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(true);
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? window.innerWidth - 32 : 306; // Full width on mobile, card width on desktop
      scrollContainerRef.current.scrollBy({
        left: scrollDistance,
        behavior: "smooth"
      });
      setTimeout(() => setIsAutoScrolling(false), 800);
    }
  };

  // Handle scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? window.innerWidth - 32 : 306;
        const newIndex = Math.round(scrollLeft / cardWidth) % leadershipActivities.length;
        setCurrentIndex(newIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [leadershipActivities.length]);

  // Modal functions
  const openModal = (activity) => {
    setSelectedActivity(activity);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedActivity(null);
    document.body.style.overflow = "unset";
  };

  // Navigate to specific card
  const goToCard = (index) => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(true);
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? window.innerWidth - 32 : 306;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setTimeout(() => setIsAutoScrolling(false), 800);
    }
  };

  return (
    <>
      <section
        id="leadership"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 relative overflow-hidden"
      >
        <RevealOnScroll>
          <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Leadership Journey
              </h2>
              <p className="text-gray-100 text-lg mx-auto whitespace-nowrap">
                Empowering communities and driving positive change through various leadership roles
              </p>
            </div>

            {/* Scrollable Cards Container */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 p-3 rounded-full transition-all duration-200 hover:bg-blue-500/30 hover:scale-110 hidden md:flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 p-3 rounded-full transition-all duration-200 hover:bg-blue-500/30 hover:scale-110 hidden md:flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Horizontal Scroll Container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 px-2 sm:px-4 md:px-12 snap-x snap-mandatory"
                style={{ 
                  scrollbarWidth: "none",
                  msOverflowStyle: "none"
                }}
                onMouseEnter={() => setIsAutoScrolling(true)}
                onMouseLeave={() => setIsAutoScrolling(false)}
              >
                {infiniteActivities.map((activity, index) => (
                  <div 
                    key={`${activity.id}-${Math.floor(index / leadershipActivities.length)}-${index}`}
                    onClick={() => openModal(activity)}
                    className="min-w-[calc(100vw-2rem)] sm:min-w-[calc(100vw-3rem)] md:min-w-[300px] lg:min-w-[calc(25%-18px)] max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] md:max-w-none bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group flex-shrink-0 snap-center"
                  >
                    {/* Image Container */}
                    <div className="relative h-56 sm:h-60 md:h-48 overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/400x250/3b82f6/ffffff?text=${encodeURIComponent(activity.title)}`;
                        }}
                      />
                      <div className="absolute top-3 right-3 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {activity.year}
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30 text-sm">
                          Click to view details
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
                        {activity.description}
                      </p>
                      <div className="border-t border-gray-700/50 pt-4">
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wide">Impact:</span>
                        <p className="text-gray-200 text-base sm:text-lg mt-2 italic leading-relaxed">
                          {activity.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {leadershipActivities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      currentIndex === index 
                        ? "bg-blue-500 w-8" 
                        : "bg-gray-600 hover:bg-blue-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Modal */}
      {selectedActivity && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-800/90 backdrop-blur-sm text-gray-300 hover:text-white p-2 rounded-full transition-all duration-200 hover:bg-gray-700 hover:scale-110"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.title}
                className="w-full h-64 object-cover rounded-t-2xl"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/600x300/3b82f6/ffffff?text=${encodeURIComponent(selectedActivity.title)}`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {selectedActivity.title}
                </h3>
                <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedActivity.year}
                </span>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                {selectedActivity.details}
              </p>
              
              {/* Skills Section */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3 border-b border-gray-700 pb-2">
                  Key Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedActivity.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Achievements Section */}
              <div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-3 border-b border-gray-700 pb-2">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {selectedActivity.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-200">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};