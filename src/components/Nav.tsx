import { useState } from 'react';

type NavigationProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps ) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-100/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-serif tracking-wider hover:text-stone-600 transition">
          THE
        </button>
        {/* Hamburger for mobile */}
        <button className="sm:hidden flex flex-col gap-1.5 p-2 relative z-20" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-stone-800 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-stone-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-stone-800 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <div className="hidden sm:flex gap-8 items-center">
          <button 
            onClick={() => setCurrentPage('gallery')}
            className={`text-sm hover:text-stone-600 transition ${currentPage === 'gallery' ? 'font-semibold' : ''}`}
          >
            My Works
          </button>
          <button 
            onClick={() => setCurrentPage('about')}
            className={`text-sm hover:text-stone-600 transition ${currentPage === 'about' ? 'font-semibold' : ''}`}
          >
            About Me
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="text-sm border border-stone-800 rounded-full px-6 py-2 hover:bg-stone-800 hover:text-white transition"
          >
            Contact Me
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-stone-100/95 border-t border-stone-200 px-6 pb-8 pt-6 flex flex-col items-center gap-8 animate-fade-in-down text-center z-10">
          <button 
            onClick={() => { setCurrentPage('gallery'); setMenuOpen(false); }}
            className={`text-[16px] font-medium hover:text-stone-600 transition ${currentPage === 'gallery' ? 'font-semibold' : ''}`}
          >
            My Works
          </button>
          <button 
            onClick={() => { setCurrentPage('about'); setMenuOpen(false); }}
            className={`text-[16px] font-medium hover:text-stone-600 transition ${currentPage === 'about' ? 'font-semibold' : ''}`}
          >
            About Me
          </button>
          <button 
            onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }}
            className="text-[16px] font-medium border border-stone-800 rounded-full px-8 py-3 hover:bg-stone-800 hover:text-white transition"
          >
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;