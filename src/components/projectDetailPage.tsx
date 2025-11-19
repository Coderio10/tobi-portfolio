import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { Project } from '../Data/homeData';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-stone-600 hover:text-stone-900 mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Gallery</span>
          </button>
          
          {/* Project Hero Image/Mockup */}
          <div className="relative mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          {/* Project Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-4">
              {project.title}
            </h1>
            <p className="text-2xl text-stone-600">{project.category}</p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Problem Statement</h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            {project.problemStatement}
          </p>
        </div>
      </section>

      {/* Objective Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Objective</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            {project.objective}
          </p>
          <ol className="space-y-4">
            {project.objectives.map((obj, idx) => (
              <li key={idx} className="flex gap-4 text-lg text-stone-700">
                <span className="font-bold text-stone-900">{idx + 1}.</span>
                <span>{obj}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Low-Fidelity Design Section */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-900 mb-12 uppercase tracking-wide">
            Low-Fidelity Design
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[...Array(21)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <div className="aspect-[9/16] bg-stone-200 rounded-xl flex items-center justify-center">
                  <div className="text-stone-400 text-sm">Screen {idx + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Fidelity Design Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-900 mb-12 uppercase tracking-wide">
            High-Fidelity Design
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[...Array(28)].map((_, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                <div className="aspect-[9/16] bg-gradient-to-br from-purple-900 to-purple-700 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1600000000000 + idx}?w=300&h=500&fit=crop`}
                    alt={`High fidelity screen ${idx + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<div class="text-white text-sm">Screen ${idx + 1}</div>`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details & Tags */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-2">Category</h3>
              <p className="text-xl font-semibold text-stone-900">{project.category}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-2">Year</h3>
              <p className="text-xl font-semibold text-stone-900">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-2">Role</h3>
              <p className="text-xl font-semibold text-stone-900">Lead UI/UX Designer</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm uppercase tracking-wide text-stone-500 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-2 bg-white border border-stone-300 rounded-full text-sm font-medium text-stone-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-20 px-6 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Interested in more projects?
          </h2>
          <button 
            onClick={onBack}
            className="bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-800 transition text-lg font-medium"
          >
            View All Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;