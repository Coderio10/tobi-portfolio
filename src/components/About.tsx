import React from 'react';
import image1 from '../assets/oladimeji.png'
import image2 from '../assets/demilade.png'
import bg from '../assets/About-bg.png'

const AboutPage: React.FC = () => {
  const testimonials = [
    {
      name: 'Oyekanmi Tosin',
      role: 'Client',
      image: image2,
      text: 'Oyesola Oluwatobi is an exceptional UI/UX designer who truly understands the art of creating user-friendly and visually stunning designs. Working with her was an absolute pleasure—her attention to detail, creativity, and ability to translate our vision into a seamless digital experience exceeded our expectations.'
    },
    {
      name: 'Dada Oladimeji',
      role: 'Product Designer',
      image: image1,
      text: 'Working alongside Oyesola Oluwatobi has been an inspiring experience. Her creativity, user-focused approach, and knack for problem-solving set her apart. She consistently delivers innovative designs that elevate projects to the next level.'
    }
  ];

  return (
    <>
      {/* Hero Section - Split Screen */}
      <section className="min-h-screen flex">
        {/* Left Side - Image */}
        <div className="w-1/2 bg-stone-300 relative">
          <img 
            src={bg} 
            alt="Oluwatobi Oyesola"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-1/2 bg-stone-200 flex items-center justify-center px-16">
          <div className="max-w-2xl">
            <h1 className="text-7xl font-bold text-stone-900 mb-4 leading-tight">
              Meet
            </h1>
            <h2 className="text-7xl font-bold text-stone-400 mb-6 leading-tight">
              Oluwatobi Oyesola
            </h2>
            <p className="text-stone-600 text-lg">The Product Designer</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                I am Oyesola Oluwatobi, a passionate and detail-oriented UI/UX designer dedicated to 
                creating user-centered digital experiences that are not only visually appealing but also 
                highly functional. With a keen eye for aesthetics, strong problem-solving skills, and a 
                deep understanding of user behavior, I excel at blending creativity, technology, and 
                empathy to craft intuitive designs that resonate with users.
              </p>
            </div>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                I thrive on collaboration, consistently applying adaptability, effective communication, 
                and a meticulous approach to every project. My goal is to simplify complex processes and 
                deliver seamless interactions that elevate brand experiences. Driven by a commitment to 
                excellence, I ensure that my designs are not just innovative but also impactful, leaving 
                a lasting impression on users while meeting the strategic objectives of the brands I work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-stone-900 mb-3">
            What People Are Saying
          </h2>
          <p className="text-center text-stone-500 mb-16 text-lg">
            Real reviews from people I have worked with over time
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm relative">
                <div className="flex items-start gap-6 mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-stone-900">{testimonial.name}</h4>
                    <p className="text-sm text-stone-500 mt-1">{testimonial.role}</p>
                  </div>
                  <div className="text-8xl text-stone-200 font-serif leading-none select-none">"</div>
                </div>
                <p className="text-stone-600 leading-relaxed text-base">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;