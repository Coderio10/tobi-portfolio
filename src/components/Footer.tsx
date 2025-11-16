type FooterProps = {
    setCurrentPage: (page: string) => void
}

export default function Footer( { setCurrentPage } : FooterProps ) {

    return (
        <footer className="py-8 px-6 border-t border-stone-200 bg-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-serif tracking-wider">THE</div>
                <div className="flex gap-8 text-sm text-stone-600">
                    <button onClick={() => setCurrentPage('gallery')}>My Works</button>
                    <button onClick={() => setCurrentPage('about')}>About Me</button>
                    <button onClick={() => setCurrentPage('contact')}>Contact Me</button>
                </div>
            </div>
        </footer>
    )
}