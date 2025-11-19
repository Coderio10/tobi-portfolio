import Logo from '../assets/logo 2.png'

type FooterProps = {
    setCurrentPage: (page: string) => void
}

export default function Footer({ setCurrentPage }: FooterProps) {
    return (
        <footer className="py-8 px-4 sm:px-6 border-t border-stone-200 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <div className="text-2xl font-serif tracking-wider">
                    <img src={Logo} alt="The Oyesola Oluwatobi" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-stone-600">
                    <button onClick={() => setCurrentPage('gallery')}>My Works</button>
                    <button onClick={() => setCurrentPage('about')}>About Me</button>
                    <button onClick={() => setCurrentPage('contact')}>Contact Me</button>
                </div>
            </div>
        </footer>
    );
}