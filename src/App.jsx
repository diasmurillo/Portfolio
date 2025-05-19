import { useState } from "react"
import { FaMoon } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";

import github  from './assets/icon-github.png'
import githubColor from './assets/icon-github-color.png'
import linkedin from './assets/icon-linkedin.png'
import css from './assets/logo-css.png'
import figma from './assets/logo-figma.png'
import git from './assets/logo-git.png'
import html from './assets/logo-html.png'
import js from './assets/logo-js.png'
import react from './assets/logo-react.png'
import tailwind from './assets/logo-tailwind.png'
import vite from './assets/logo-vite.png'
import logoWhite from './assets/logo-white.png'
import logo from './assets/logo.png'
import me from './assets/me.jpg'
export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState('')

  return(
    <div className={`${darkMode ? "dark" : ""} dark:bg-zinc-800`}>
      <header className="font-inter shadow-md">
        <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          {darkMode == '' ? 
            <img className="w-20" src={logo} alt="Logo" />
            : 
            <img className="w-20" src={logoWhite} alt="logo"/>
          }

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl dark:text-white"
          >
            ☰
          </button>

          <ul className="hidden md:flex justify-center space-x-8 dark:text-white">
            <li>
              <a href="#sobre" className="cursor-pointer hover:text-primary">Sobre</a>
            </li>
            <li>
              <a href="#tecnologias" className="cursor-pointer hover:text-primary">Tecnologias</a>
            </li>
            <li>
              <a href="#projetos" className="cursor-pointer hover:text-primary">Projetos</a>
            </li>
            <li>
              <a href="#contato" className="cursor-pointer hover:text-primary">Contato</a>
            </li>
          </ul>

          <div className="hidden md:flex space-x-2 dark:text-white">
            <button className="cursor-pointer px-3 py-1 border rounded">PT</button>
            <button className="cursor-pointer px-3 py-1 border rounded">EN</button>
            <button
              className="cursor-pointer px-3 py-1 border rounded"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <LuSun /> : <FaMoon />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden px-4 py-2 space-y-2 bg-white shadow dark:text-white dark:bg-zinc-800">
            <ul className="flex flex-col space-y-2">
              <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
              <li><a href="#tecnologias" className="hover:text-primary">Tecnologias</a></li>
              <li><a href="#projetos" className="hover:text-primary">Projetos</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
            <div className="flex space-x-2 mt-4">
              <button className="px-3 py-1 border rounded">PT</button>
              <button className="px-3 py-1 border rounded">EN</button>
              <button
                className="px-3 py-1 border rounded"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <LuSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        )}
      </header>
      <main className="">
        {/* Apresentação */}
        <section className="mt-32 mb-0 px-4 text-center md:mb-0 md:[min-height:calc(100vh-200px)] md:mt-32 pt-16 dark:text-white">
          <div className="max-w-7xl mx-auto text-center text-justify md:text-left">
            <p className="font-ibm-mono text-3xl mb-2">Olá, eu sou</p>
            <h1 className="text-7xl font-bold mb-2">Murilo Dias</h1>
            <h3 className="text-4xl text-primary mb-4">Desenvolvedor Front-End</h3>
            <p className="text-lg text-color-text font-ibm-mono dark:text-white">
              Desenvolvo interfaces com propósito — acessíveis, intuitivas e feitas para pessoas reais.
            </p>
            <a href="mailto:dias.murilosd@gmail.com">
                <button className="mt-6 px-6 py-3 bg-primary cursor-pointer text-white rounded-xl shadow-md hover:bg-primary/90 transition">Entre em contato</button>
              </a>
          </div>
        </section>

        {/*Sobre*/}
        <section id="sobre" className="max-w-7xl mt-32 mx-auto px-4 md:mt-0 dark:text-white">
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7xl gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap">Sobre</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-">
            <article className="md:w-1/2">
              <p className="text-lg text-justify text-color-text leading-relaxed font-ibm-mono dark:text-white">
                Olá! Eu sou o Murilo, desenvolvedor front-end focado em criar experiências digitais acessíveis, intuitivas e que façam a diferença.
                Adoro trabalhar em projetos desafiadores que me permitam aprender e explorar o potencial das tecnologias web em constante evolução.
                Estou sempre buscando soluções melhores e inclusivas para os desafios do dia a dia, com foco no usuário e na qualidade do código.
              </p>
            </article>

            <article className="md:w-1/2 flex justify-center">
              <img
                src={me}
                alt="Foto de Murilo"
                className="w-60 h-60 object-cover rounded-full shadow-lg"
              />
            </article>
          </div>
        </section>

        {/*Tecnologias*/}
        <section id="tecnologias" className="max-w-7xl mx-auto px-4 py-16 dark:text-white">
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7x1 gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap">Tecnologias</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>
          <section className="flex flex-wrap items-center justify-center gap-8 mb-16">
            <img src={html} alt="icon html" className="w-20 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={css} alt="icon css" className="w-18 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={react} alt="icon react" className="w-20 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={js} alt="icon javascript" className="w-20 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={vite} alt="icon vite" className="w-20 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={figma} alt="icon figma" className="w-20 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={git} alt="icon git" className="w-20 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={tailwind} alt="icon tailwind" className="w-30 grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
          </section>
        </section>
        
        {/*Projetos*/}
        <section id="projetos" className="max-w-7xl mx-auto px-4 dark:text-white">
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7xl gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap">Projetos</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>
          <section className="flex flex-wrap gap-10 mb-20">
            <article className="text-white rounded-2xl shadow-lg  max-w-sm mx-auto space-y-4 border-b  hover:scale-102 transition duration-300">
              <div className="bg-black w-full dark:bg-white">
                {darkMode == '' ? 
                <img className="w-30 mx-auto" src={logoWhite} alt="Logo"/>
                : 
                <img className="w-30 mx-auto" src={logo} alt="logo"/>
                }
              </div>
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-black dark:text-white">Portfolio</h3>
                <p className="text-lg text-color-text font-ibm-mono dark:text-white">
                  Aqui vai ir o projeto do meu Portfolio 
                </p>
                <button className="w-fit px-4 py-2 bg-color-text text-white rounded cursor-pointer hover:bg-color-text/90 transition dark:bg-white dark:text-color-text dark:hover:bg-white/90">
                  Ver Código
                </button>
              </div>
            </article>
          </section>
        </section>

          {/*Contato*/}
          <section id="contato" className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-20">
              <div className="flex items-center w-full max-w-7xl gap-4">
                <span className="flex-grow h-px bg-gray-400"></span>
                <h2 className="text-4xl font-semibold text-center whitespace-nowrap dark:text-white">Contato</h2>
                <span className="flex-grow h-px bg-gray-400"></span>
              </div>
            </div>
            <article>
              <p className="font-ibm-mono text-justify dark:text-white" >No momento, estou em busca de oportunidades para atuar em tempo integral como desenvolvedor front-end.
                  Se você gostou do que viu ou tem alguma dúvida, sugestão ou só quiser trocar uma ideia, fique à vontade para entrar em contato. Minha caixa de entrada está sempre aberta e farei o possível para responder o quanto antes.</p>
              <a href="mailto:dias.murilosd@gmail.com">
                <button className="mt-6 px-6 py-3 bg-primary cursor-pointer text-white rounded-xl shadow-md hover:bg-primary/90 transition">Entre em contato</button>
              </a>
            </article>
          </section>

        {/*Footer*/}
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
      </main>
    </div>
  )
}



