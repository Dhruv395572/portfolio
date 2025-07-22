import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import useInViewAnimation from '../hooks/useInViewAnimation'; // ✅ custom hook
import Dhruvkaushik from '../assets/dhruv.jpg'; // ✅ relative import (correct path)

export default function Herosection() {
  const leftRef = useInViewAnimation();
  const rightRef = useInViewAnimation();

  return (
    <section id="HOME" className="hero">
      <div className="hero-left section-box" ref={leftRef}>
        <img src={Dhruvkaushik} alt="Dhruv Kaushik" />
        <div className="overlay"></div>
      </div>

      <div className="hero-right section-box" ref={rightRef}>
        <h1>
          I’m{' '}
          <span style={{ color: '#8a2be2' }}>
            <Typewriter
              words={['Dhruv Kaushik']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>
        </h1>

        <h2>A Developer based in <span>India</span>.</h2>

        <p>
          I’m probably the most passionate developer you will ever get to work with.
          If you have a great project that needs amazing skills, I’m your guy.
        </p>

        <button className="cta-btn" onClick={() => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}>Contact Me</button>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/dhruvkaushik2810" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.hackerrank.com/profile/Dhruv_kaushik" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-hackerrank"></i>
          </a>
          <a href="mailto:dhruvkaushik2810@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/Dhruv395572" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="/your-resume.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
