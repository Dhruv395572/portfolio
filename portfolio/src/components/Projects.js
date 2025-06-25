import React, { useState, useRef, useEffect } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Voice Assistant",
      description:
        "An advanced AI Voice Assistant built with Python. Responds to voice commands, performs automated tasks, and provides real-time assistance. Integrated with SpeechRecognition, Pyttsx3, and web automation.",
      techStack: ["Python", "SpeechRecognition", "Pyttsx3"],
      githubLink: "https://github.com/yourusername/voice-assistant",
    },
    {
      title: "Card Swapping Game",
      description:
        "An interactive and fun card swapping game using HTML, CSS, and JavaScript. Smooth animations, beautiful transitions, and engaging gameplay for web browsers.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/card-swapping-game",
    },
    {
      title: "E-Commerce Website",
      description:
        "Fully functional E-Commerce website with modern UI/UX. Includes cart, checkout, product filtering, responsive design and payment gateway integration.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/e-commerce-site",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((ref) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            } else {
              entry.target.classList.remove("animate");
            }
          },
          { threshold: 0.2 }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="Projects" className="projects-section">
      <h2 className="projects-heading">PROJECTS</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="project-card section-box"
          >
            <h3>{project.title}</h3>
            <p>{project.description.slice(0, 80)}...</p>
            <div className="tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <button
              className="explore-btn"
              onClick={() => setSelectedProject(project)}
            >
              Explore Project →
            </button>
          </div>
        ))}

        <div className="project-card coming-soon">
          <h3>More Projects Coming Soon</h3>
          <p>Stay tuned for more amazing projects in development!</p>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-icon" onClick={() => setSelectedProject(null)}>
              &times;
            </span>

            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="tech-stack">
              {selectedProject.techStack.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>
            <a
              href={selectedProject.githubLink}
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}