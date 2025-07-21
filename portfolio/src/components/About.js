import React from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation.js'; 

export default function AboutSection() {
  const ref1 = useInViewAnimation();
  const ref2 = useInViewAnimation();
  const ref3 = useInViewAnimation();

  return (
    <section id="about" className="about-experience-section">
      <h1 className="about-heading">ABOUT ME</h1>

      <div className="top-grid">
        <div className="profile-box section-box" ref={ref1}>
          <h2>PROFILE</h2>
          <p>I’m a passionate developer blending creativity with technology to build immersive web experiences.</p>
          <div className="skills-tags">
            <span>React</span>
            <span>UI/UX</span>
            <span>JavaScript</span>
            <span>Full Stack</span>
          </div>
        </div>

        <div className="experience-box section-box" ref={ref2}>
          <h2>EXPERIENCE</h2>
          <div className="experience-item">
            <h3>Frontend Developer <span>2023 - Present</span></h3>
            <p>Building modern web applications for startups and businesses.</p>
          </div>
        </div>
      </div>

      <div className="education-box section-box" ref={ref3}>
        <h2>EDUCATION</h2>
        <div className="education-item">
          <h3>Higher Secondary <span>2021 - 2022</span></h3>
          <p>Delhi Public School, Mathura</p>
        </div>
        <div className="education-item">
            <h3>Higher Secondary (PCM) <span>2022 - 2024</span></h3>
            <p>Delhi Public School, Mathura</p>
        </div>
        <div className="education-item">
          <h3>B.Tech in Computer Science<span>2024 - 2028</span></h3>
          <p>GLA University, Mathura</p>
        </div>
      </div>
    </section>
  );
}