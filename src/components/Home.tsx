import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroBG from '../assets/bg.png';
import btnImg from '../assets/btnimg.png';
import { projects } from '../Data/portfolioData';
import type { Project } from '../Data/portfolioData';
import contactImage from '../assets/contact-img.png';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900">
        {/* Background texture overlay */}
        <div>
          <div 
            className="absolute inset-0" 
            style={{ backgroundImage: `url(${HeroBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left side - Text */}
            <div className="space-y-4">
              <p className="text-amber-200/80 text-xl md:text-2xl font-extrabold tracking-wide">I'm a</p>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Product Designer
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left column - Large heading */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-snug">
                I help brands to excel in their space by combining creativity, interactivity, and 
                cutting-edge technology to create bold, impactful designs that redefine standards 
                and drive meaningful results.
              </h2>
            </div>

            {/* Right column - Description */}
            <div className="space-y-6">
              <p className="text-stone-700 text-base leading-relaxed">
                As a passionate product designer, I thrive on crafting bold, innovative designs that 
                blend creativity, technology, and meaningful interactions. With a deep commitment to 
                excellence, I aim to empower brands to stand out by creating designs that inspire, 
                engage, and leave a lasting impact.
              </p>
              <p className="text-stone-700 text-base leading-relaxed">
                My work is driven by a dedication to setting new standards and delivering results that 
                truly matter, reflecting my vision to make a difference in every project I undertake.
              </p>
              
              {/* Button with avatar */}
              <button 
                onClick={() => setCurrentPage('about')}
                className="flex items-center gap-3 mt-8 text-sm bg-stone-900 text-white pl-2 pr-6 py-2 rounded-full hover:bg-stone-800 transition group"
              >
                <img 
                  src={btnImg} 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover" 
                />
                <span>Read more about me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 font-medium">MY PROJECTS</h2>
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="text-sm text-stone-900 hover:text-stone-600 transition font-medium"
            >
              View All
            </button>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project : Project) => (
              <div 
                key={project.id} 
                onClick={() => setCurrentPage('gallery')}
                className="group cursor-pointer bg-stone-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative p-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex justify-between items-center bg-stone-200">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-stone-300">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-stone-900 transition">
                    <ArrowRight className="w-5 h-5 text-stone-900 group-hover:text-white group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto p-[8px]">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left - Profile Image */}
            <div className="flex justify-end md:justify-start">
              <img 
                src={contactImage} 
                alt="Contact"
                className="w-auto h-auto  object-contain "
              />
            </div>

            {/* Right - Contact Info */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-10 leading-tight">
                Let's work<br />together
              </h2>
              
              <div className="space-y-4 mb-10">
                {/* Email */}
                <div className="flex items-center gap-3 px-6 py-3 border border-stone-300 rounded-full">
                  <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-stone-700">oluwatobioyesola@gmail.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 px-6 py-3 border border-stone-300 rounded-full">
                  <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm text-stone-700">+234 816 039 2797</span>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-800 transition flex items-center gap-3 group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;