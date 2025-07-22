import { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin,  FaFileAlt,  FaHackerrank } from "react-icons/fa";

import useInViewAnimation from "../hooks/useInViewAnimation";

export default function Contact() {
  const contactRef = useInViewAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/contact"
        : "https://portfolio-backend-qzya.onrender.com";

      await axios.post(API_URL, formData);

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <section className="contact-section section-box" id="contact" ref={contactRef}>
      <h2 className="projects-heading">CONTACT ME</h2>

      <div className="projects-container">
        {/* Left: Form Box */}
        <div className="project-card">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            ></textarea>

            <button className="explore-btn" type="submit">Send Message</button>
          </form>
        </div>

        {/* Right: Info & Social Links */}
        <div className="project-card">
          <div className="info-card">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> dhruvkaushik2810@gmail.com</p>
            <p><strong>Location:</strong> Mathura, India</p>
            {/* <p><strong>Working Hours:</strong> Mon - Fri: 09:00 - 18:00</p> */}
          </div>

          <div className="social-links">
             <a href="https://github.com/Dhruv395572" target="_blank" rel="noreferrer">
                 <FaGithub size={24} />
             </a>
             <a href="https://www.linkedin.com/in/dhruvkaushik2810/" target="_blank" rel="noreferrer">
                 <FaLinkedin size={24} />
             </a>
             <a href="https://www.hackerrank.com/profile/Dhruv_kaushik" target="_blank" rel="noreferrer">
                  <FaHackerrank size={24} />
             </a>
             
             <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <FaFileAlt size={24} />
             </a>
</div>

        </div>
      </div>
    </section>
  );
}
