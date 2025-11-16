import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Undefeated Art Gallery',
      category: 'Brand & Mobile App Design',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop',
      description: 'A comprehensive digital experience for art enthusiasts to discover and purchase art pieces.',
      tags: ['Mobile App', 'Branding', 'UI/UX'],
      screens: 8
    },
    {
      title: 'Socialite',
      category: 'Mobile App Design',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      description: 'A revolutionary social media platform with Record Live feature for real-time event sharing.',
      tags: ['Mobile App', 'Social Media', 'UI/UX'],
      screens: 12
    },
    {
      title: 'Simplified',
      category: 'Website Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Farm-to-consumer platform simplifying agricultural connections.',
      tags: ['Website', 'E-commerce', 'UI/UX'],
      screens: 6
    },
    {
      title: 'Fashion Hub',
      category: 'E-commerce Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
      description: 'Modern e-commerce platform for fashion enthusiasts.',
      tags: ['E-commerce', 'Fashion', 'Mobile'],
      screens: 10
    },
    {
      title: 'HealthTrack',
      category: 'Health & Fitness App',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      description: 'Comprehensive health tracking application.',
      tags: ['Mobile App', 'Health', 'Analytics'],
      screens: 15
    },
    {
      title: 'TravelMate',
      category: 'Travel Planning App',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      description: 'Your perfect companion for planning travel adventures.',
      tags: ['Mobile App', 'Travel', 'Planning'],
      screens: 9
    }
  ];

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-6">My Works</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            A collection of projects showcasing user-centered design and innovative solutions.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto">
          <button className="px-6 py-2 rounded-full bg-stone-900 text-white text-sm whitespace-nowrap">All Projects</button>
          <button className="px-6 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 whitespace-nowrap">Mobile App</button>
          <button className="px-6 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 whitespace-nowrap">Website</button>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedProject(idx)}
                className="group cursor-pointer bg-stone-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-stone-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-stone-500">{project.category}</p>
                    </div>
                    <span className="text-xs text-stone-400">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs px-3 py-1 bg-stone-200 text-stone-700 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center text-stone-600 group-hover:text-stone-900 transition">
                    <span className="text-sm">View Project</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-stone-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-stone-900">{projects[selectedProject].title}</h2>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-stone-100 rounded-full transition">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8">
              <img src={projects[selectedProject].image} alt={projects[selectedProject].title} className="w-full rounded-2xl mb-6" />
              <p className="text-stone-600 leading-relaxed">{projects[selectedProject].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;