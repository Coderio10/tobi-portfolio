import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Send } from 'lucide-react';

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, title: 'Email', value: 'oluwatobioyesola@gmail.com', link: 'mailto:oluwatobioyesola@gmail.com' },
    { icon: <Phone className="w-6 h-6" />, title: 'Phone', value: '+234 816 039 2797', link: 'tel:+2348160392797' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Location', value: 'Lagos, Nigeria', link: null }
  ];

  const socials = [
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram' },
    { icon: <Github className="w-5 h-5" />, name: 'GitHub' }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="Contact" className="w-48 h-48 rounded-full mx-auto mb-8 shadow-2xl" />
          <h1 className="text-6xl md:text-7xl font-bold text-stone-900 mb-6">Let's work<br />together</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">Have a project in mind? Let's collaborate to create something extraordinary.</p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <div key={i} className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition">
              <div className="text-stone-900 mb-4">{info.icon}</div>
              <h3 className="text-sm uppercase text-stone-500 mb-2">{info.title}</h3>
              {info.link ? <a href={info.link} className="text-lg font-medium text-stone-900 hover:text-stone-600">{info.value}</a> : <p className="text-lg font-medium text-stone-900">{info.value}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-stone-900 mb-4">Send Me a Message</h2>
          <p className="text-center text-stone-600 mb-12">Fill out the form and I'll get back to you soon</p>

          {submitted && <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">Message sent successfully!</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" className="px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900" />
            </div>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900" />
            <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Your Message" className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none" />
            <button type="submit" className="w-full bg-stone-900 text-white py-4 rounded-xl hover:bg-stone-800 transition flex items-center justify-center gap-2">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Connect With Me</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map((s, i) => (
              <button key={i} className="flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white transition">
                {s.icon} <span className="text-sm font-medium">{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactPage;