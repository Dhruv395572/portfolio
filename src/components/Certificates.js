import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation"; // 👈 Hook import

export default function Certificates() {
  const sectionRef = useInViewAnimation(); // 👈 Hook use

  const certificates = [
    {
      title: "Microsoft AZ-100",
      description: "Microsoft Certified: Azure Administrator Associate",
      link: "/certificate/DhruvKaushik_certificate.pdf"
    },
    {
      title: "100_day Python Bootcamp",
      description: "Comprehensive Python training program on Unstop platform",
      link: " https://lnkd.in/ebmwWAKR"
    },
    {
      title: "Python",
      description: "Popular programming language for web development and data science.",
      certificates: [
        { name: "React Fundamentals", link: "https://www.hackerrank.com/certificates/fd2bbeffe995" }
      ],
    },
    {
      title: "Problem Solving (Intermediate)",
      description: "Ability to solve complex problems using programming.",
      certificates: [
        { name: "JavaScript Advanced", link: "https://www.hackerrank.com/certificates/a4ae8fab05b1"}
      ],
    }
  ];

  return (
    <section id="Certificates" className="certificates-section section-box" ref={sectionRef}>
      <h2 className="certificates-heading">MY CERTIFICATES</h2>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-btn"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}