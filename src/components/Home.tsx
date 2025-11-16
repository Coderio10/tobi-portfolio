import { ArrowRight } from 'lucide-react';

function HomePage ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const projects = [
    {
      title: 'Undefeated Art Gallery',
      category: 'Brand & Mobile App Design',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop',
    },
    {
      title: 'Socialite',
      category: 'Mobile App Design',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    },
    {
      title: 'Simplified',
      category: 'Website Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      title: 'Socialite Extended',
      category: 'Mobile App Design',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
    }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-stone-500 text-lg">I'm a</p>
            <h1 className="text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
              Product Designer
            </h1>
            <div className="h-1 w-24 bg-stone-800"></div>
            <p className="text-lg text-stone-600 leading-relaxed">
              I help brands to excel in their space by combining creativity, interactivity, and 
              cutting-edge technology to create bold, impactful designs that redefine standards 
              and drive meaningful results.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setCurrentPage('about')}
                className="flex items-center gap-2 text-sm bg-stone-800 text-white px-6 py-3 rounded-full hover:bg-stone-700 transition group"
              >
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" 
                     alt="Profile" 
                     className="w-6 h-6 rounded-full object-cover" />
                Read more about me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop" 
              alt="Oluwatobi Oyesola"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-sm uppercase tracking-widest text-stone-500">MY PROJECTS</h2>
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="text-sm text-stone-800 hover:underline"
            >
              View All
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group cursor-pointer bg-stone-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900">{project.title}</h3>
                    <p className="text-sm text-stone-500 mt-1">{project.category}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-stone-400 group-hover:translate-x-2 group-hover:text-stone-800 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" 
            alt="Contact"
            className="w-48 h-48 rounded-full object-cover mx-auto mb-8 shadow-xl"
          />
          <h2 className="text-5xl font-bold text-stone-900 mb-8">
            Let's work<br />together
          </h2>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-800 transition flex items-center gap-2 mx-auto group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </section>

    </>
  );
};

export default HomePage