import github  from '../assets/icon-github.png'
import githubColor from '../assets/icon-github-color.png'
import linkedin from '../assets/icon-linkedin.png'

import { useDarkMode } from '../Context/DarkModeContext'

export default function Footer() {

      const { darkMode } = useDarkMode()

    return (
        <footer className="max-w-7xl mx-auto mt-16 font-inter dark:text-white">
            <section className="flex items-center gap-10 justify-center">
                <a href="https://www.linkedin.com/in/murilo-dias-672928242/" target="blank">
                    <img src={linkedin} alt="Logo Linkedin" className="grayscale hover:grayscale-0 dark:grayscale-0" />
                </a>
                <a href="https://github.com/diasmurillo" target="blank">
                    {darkMode == '' ?
                        <img src={github} alt="Logo GitHub " className="w-10 grayscale hover:grayscale-0"/>
                        :
                        <img src={githubColor} alt="Logo GitHub" className="w-10"/>
                        }
                </a>
            </section>
            <p className="text-center py-4 font-ibm-mono">Obrigado por visitar! © 2025 Murilo Dias</p>
        </footer>
    )
    
}