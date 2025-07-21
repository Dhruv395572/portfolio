import './App.css'; 

import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills.js';
import Certificates from './components/Certificates.js';
import Contect from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Navbar brend="dhruv.dev" homeText='HOME' aboutText='ABOUT' projectText='PROJECT' skillsText='SKILLS'  certifiacteText='CERTIFICATE' contactText="CONTACT"/>
      <Herosection/>
      <About />
      <Projects/>
      <Skills/>
      <Certificates />
      <Contect/>
       <Footer />
    </>
  );
}

export default App;
