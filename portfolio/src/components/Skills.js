import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation"; // 👈 Hook import

export default function Skills() {
  const sectionRef = useInViewAnimation(); // 👈 Hook use

  const skills = [
    {
      title: "HTML",
      description: "Markup language used to structure web pages.",
      certificates: [
        { name: "HTML Essentials", link: "https://example.com/html-certificate" }
      ],
    },
    {
      title: "CSS",
      description: "Styling language for web design and layout.",
      certificates: [
        { name: "CSS Mastery", link: "https://example.com/css-certificate" }
      ],
    },
    {
      title: "JavaScript",
      description: "Programming language to make websites interactive.",
      certificates: [
        { name: "JavaScript Advanced", link: "https://example.com/js-certificate" }
      ],
    },
    {
      title: "React.js",
      description: "Popular frontend library for building UI components.",
      certificates: [
        { name: "React Fundamentals", link: "https://example.com/react-certificate" }
      ],
    },
    {
      title: "Node.js",
      description: "JavaScript runtime for backend services.",
      certificates: [
        { name: "Node.js API Development", link: "https://example.com/node-certificate" }
      ],
    },
    {
      title: "MongoDB",
      description: "NoSQL database used with modern web applications.",
      certificates: [
        { name: "MongoDB Basics", link: "https://example.com/mongo-certificate" }
      ],
    },
  ];

  return (
    <section id="Skills" className="skills-section section-box" ref={sectionRef}>
      <h2 className="skills-heading">MY SKILLS</h2>

      <div className="certificates-container">
        {skills.map((skill, index) => (
          <div key={index} className="certificate-card">
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            {skill.certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
              >
                {cert.name} →
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
