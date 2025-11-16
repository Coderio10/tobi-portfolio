import { useState } from 'react';
import Footer from './components/Footer.tsx'; 
// import { ArrowRight, Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github, X, Lightbulb, Users, Target, Award, Import } from 'lucide-react';
import GalleryPage from './components/Gallery.tsx';
import HomePage from './components/Home.tsx';
import AboutPage from './components/About.tsx';
import ContactPage from './components/Contact.tsx';
import Navigation from './components/Nav.tsx'; 

// Main App
const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-stone-100">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Portfolio;
