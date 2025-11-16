import { Lightbulb, Users, Target, Award } from 'lucide-react';

const AboutPage = () => {
  const testimonials = [
    {
      name: 'Oyekanmi Tosin',
      role: 'Client',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Oyesola Oluwatobi is an exceptional UI/UX designer who truly understands the art of creating user-friendly and visually stunning designs.'
    },
    {
      name: 'Dada Oladimeji',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'Working alongside Oyesola has been inspiring. Her creativity and user-focused approach set her apart.'
    }
  ];

  const skills = [
    { name: 'User Research & Analysis', level: 95 },
    { name: 'UI/UX Design', level: 98 },
    { name: 'Prototyping & Wireframing', level: 92 },
    { name: 'Interaction Design', level: 90 }
  ];

  const values = [
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation', description: 'Creating fresh, cutting-edge design solutions.' },
    { icon: <Users className="w-8 h-8" />, title: 'User-Centric', description: 'Putting users at the heart of every decision.' },
    { icon: <Target className="w-8 h-8" />, title: 'Attention to Detail', description: 'Ensuring every pixel is purposeful.' },
    { icon: <Award className="w-8 h-8" />, title: 'Excellence', description: 'Delivering exceptional quality always.' }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight">
                Meet<br /><span className="text-stone-400">Oluwatobi Oyesola</span>
              </h1>
              <p className="text-stone-500 text-lg">The Product Designer</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" alt="Oluwatobi" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-stone-700 leading-relaxed">
          <p>I am Oyesola Oluwatobi, a passionate UI/UX designer dedicated to creating user-centered digital experiences that are visually appealing and highly functional.</p>
          <p>Driven by excellence, I ensure my designs are innovative and impactful, leaving lasting impressions while meeting strategic objectives.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-900 mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="text-stone-900 mb-4">{v.icon}</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{v.title}</h3>
                <p className="text-stone-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-900 mb-12">Skills & Expertise</h2>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-stone-900">{s.name}</span>
                  <span className="text-stone-500">{s.level}%</span>
                </div>
                <div className="h-3 bg-stone-200 rounded-full">
                  <div className="h-full bg-stone-900 rounded-full" style={{ width: `${s.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-900 mb-12">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-stone-900">{t.name}</h4>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-stone-600">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;