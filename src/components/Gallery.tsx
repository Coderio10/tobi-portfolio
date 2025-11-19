import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectDetailPage from './projectDetailPage';
import { projects } from '../Data/homeData';
import type { Project } from '../Data/homeData';

const GalleryPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject !== null) {
    return (
      <ProjectDetailPage 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-6">
            My Works
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            A collection of projects showcasing user-centered design, innovative solutions, 
            and seamless digital experiences across various platforms.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto">
          <button className="px-6 py-2 rounded-full bg-stone-900 text-white text-sm whitespace-nowrap">
            All Projects
          </button>
          <button className="px-6 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 whitespace-nowrap">
            Mobile App
          </button>
          <button className="px-6 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 whitespace-nowrap">
            Website
          </button>
          <button className="px-6 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 whitespace-nowrap">
            Branding
          </button>
          <button className="px-6 py-2 rounded-full border border-stone-300 text-stone-700 text-sm hover:bg-stone-50 whitespace-nowrap">
            E-commerce
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-stone-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">{project.screens} Screens</p>
                    </div>
                  </div>
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
                      <span key={tagIdx} className="text-xs px-3 py-1 bg-stone-200 text-stone-700 rounded-full">
                        {tag}
                      </span>
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
    </>
  );
};

export default GalleryPage;