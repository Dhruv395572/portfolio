import React from "react";
import useInViewAnimation from "../hooks/useInViewAnimation"; // 👈 Hook import

export default function Certificates() {
  const sectionRef = useInViewAnimation(); // 👈 Hook use

  const certificates = [
    {
      title: "Microsoft AZ-100",
      description: "Microsoft Certified: Azure Administrator Associate",
      link: "/certificate/DhruvKaushik_certificate.pdf"
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