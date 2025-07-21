import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation"; // 👈 Hook import

export default function Skills() {
  const sectionRef = useInViewAnimation(); // 👈 Hook use

  const skills = [
    {
      title: "HTML",
      description: "Markup language used to structure web pages.",
      certificates: [
        // { name: "HTML Essentials", link: "https://example.com/html-certificate" }
      ],
    },
    {
      title: "CSS",
      description: "Style sheet language used for describing the presentation of a document written in HTML.",
      certificates: [
        // { name: "CSS Essentials", link: "https://example.com/css-certificate" }
      ],
    },
    {
      title: "JavaScript",
      description: "Programming language used to create dynamic web content.",
      certificates: [
        // { name: "JavaScript Essentials", link: "https://example.com/javascript-certificate" }
      ],
    },
    {
      title: "C language",
      description: "General-purpose programming language.",
      certificates: [
        // { name: "C Mastery", link: "https://www.hackerrank.com/certificates/a4ae8fab05b1" }
      ],
    },
    {
      title: "Problem Solving (Intermediate)",
      description: "Ability to solve complex problems using programming.",
      certificates: [
        // { name: "JavaScript Advanced", link: "https://www.hackerrank.com/certificates/a4ae8fab05b1"}
      ],
    },
    {
      title: "Python",
      description: "Popular programming language for web development and data science.",
      certificates: [
        // { name: "React Fundamentals", link: "https://www.hackerrank.com/certificates/fd2bbeffe995" }
      ],
    },
    {
      title: "Node.js",
      description: "JavaScript runtime for backend services.",
      certificates: [
        // { name: "Node.js API Development", link: "https://example.com/node-certificate" }
      ],
    },
    {
      title: "React.js",
      description: "JavaScript library for building user interfaces.",
      certificates: [
        // { name: "React Fundamentals", link: "https://example.com/react-certificate" }
      ],
    },
    {
      title: "Express.js",
      description: "JavaScript framework for building web applications.",
      certificates: [
        // { name: "Express Basics", link: "https://example.com/express-certificate" }
      ],
    },
    {
      title: "MongoDB",
      description: "NoSQL database used with modern web applications.",
      certificates: [
        // { name: "MongoDB Basics", link: "https://example.com/mongo-certificate" }
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
