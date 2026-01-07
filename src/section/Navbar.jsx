import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { translations } from "../translations/translations"
import LanguageSwitcher from "../components/LanguageSwitcher"

const NavItems = ({ onClick = () => { }, language }) => {
    const t = translations[language].nav;

    const navLinks = [
        { id: 1, name: t.home, href: '#home' },
        { id: 2, name: t.about, href: '#about' },
        { id: 3, name: t.services, href: '#services' },
        { id: 4, name: t.work, href: '#work' },
        { id: 5, name: t.reviews, href: '#reviews' },
        { id: 6, name: t.contact, href: '#contact' },
    ];

    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={onClick}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { language } = useLanguage()

    const toggleMenu = () => {
        setIsMenuOpen((prevIsOpen) => !prevIsOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-black/5 backdrop-blur-md ">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-200 font-bold text-xl hover:text-white transition-colors">Ryokf</a>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                            <img src={isMenuOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="sm:flex hidden">
                        <NavItems language={language} />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${ isMenuOpen ? "max-h-screen" : "max-h-0" }`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu} language={language} />
                </nav>
            </div>
        </header>
    )
}

export default Navbar