type NavigationProps = {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const Navigation = ({ currentPage, setCurrentPage }: NavigationProps ) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-100/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => setCurrentPage('home')} className="text-2xl font-serif tracking-wider hover:text-stone-600 transition">
          THE
        </button>
        <div className="flex gap-8 items-center">
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
    </nav>
  );
};

export default Navigation;