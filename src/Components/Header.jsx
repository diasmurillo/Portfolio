import { useState } from 'react'
import { useTranslation } from "react-i18next";
import logoWhite from '../assets/logo-white.png'
import logo from '../assets/logo.png'
import { FaMoon } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { useDarkMode } from '../Context/DarkModeContext';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const {darkMode, setDarkMode} = useDarkMode()
    const { t, i18n } = useTranslation(); 

    return (
        <header className="font-inter shadow-md">
            {/* Menu Logo */}
            <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto font-ibm-mono">
                {darkMode == '' ? 
                    <a href="#home"><img className="w-20 cursor-pointer" src={logo} alt="Logo" /></a> 
                : 
                    <a href="#home"><img className="w-20" src={logoWhite} alt="logo"/></a>
                }

                {/* Menu button Mobile */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl dark:text-white">☰</button>
                
                {/* Menu Desktop */}
                <ul className="hidden md:flex justify-center space-x-8 dark:text-white">
                    <li><a href="#sobre" className="cursor-pointer hover:text-primary">{t("nav.about")}</a></li>
                    <li><a href="#tecnologias" className="cursor-pointer hover:text-primary">{t("nav.tech")}</a></li>
                    <li><a href="#projetos" className="cursor-pointer hover:text-primary">{t("nav.projects")}</a></li>
                    <li><a href="#contato" className="cursor-pointer hover:text-primary">{t("nav.contact")}</a></li>
                </ul>
                
                {/* Menu Desktop Widgets */}
                <div className="hidden md:flex space-x-2 dark:text-white">
                    <button onClick={() => i18n.changeLanguage("pt")} className="cursor-pointer px-3 py-1 border rounded">PT</button>
                    <button onClick={() => i18n.changeLanguage("en")} className="cursor-pointer px-3 py-1 border rounded">EN</button>
                    <button className="cursor-pointer px-3 py-1 border rounded" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <LuSun /> : <FaMoon />}
                    </button>
                    <a href="https://drive.google.com/file/d/12JOyZh-uggHlf9ZiNdb5Q9yXAGm4ua1M/view?usp=sharing" target="blank">
                        <button className="cursor-pointer px-3 py-1 border rounded">CV</button>
                    </a>
                </div>
            </nav>

            <nav>
                {menuOpen && (
                    <div className="md:hidden px-4 py-2 space-y-2 bg-white shadow dark:text-white dark:bg-zinc-800">
                        {/* Menu Mobile */}
                        <ul className="flex flex-col space-y-2">
                            <li><a href="#sobre" className="hover:text-primary">{t("nav.about")}</a></li>
                            <li><a href="#tecnologias" className="hover:text-primary">{t("nav.tech")}</a></li>
                            <li><a href="#projetos" className="hover:text-primary">{t("nav.projects")}</a></li>
                            <li><a href="#contato" className="hover:text-primary">{t("nav.contact")}</a></li>
                        </ul>
                        {/* Menu Mobile Widgets */}
                        <div className="flex space-x-2 mt-4">
                            <button onClick={() => i18n.changeLanguage("pt")} className="cursor-pointer px-3 py-1 border rounded">PT</button>
                            <button onClick={() => i18n.changeLanguage("en")} className="cursor-pointer px-3 py-1 border rounded">EN</button>
                            <button className="px-3 py-1 border rounded" onClick={() => setDarkMode(!darkMode)}>
                                {darkMode ? <LuSun /> : <FaMoon />}
                            </button>
                            <a href="https://drive.google.com/file/d/12JOyZh-uggHlf9ZiNdb5Q9yXAGm4ua1M/view?usp=sharing" target="blank">
                                <button className="cursor-pointer px-3 py-1 border rounded">CV</button>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}