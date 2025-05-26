{/* Import Translation */}
import "./i18n";
import { useTranslation } from "react-i18next";

{/* Import Context */}
import { useDarkMode } from "./Context/DarkModeContext";

{/* Import Components Header, Footer */}
import Header from './Components/Header'
import Footer from "./Components/Footer";
import ProjectCard from "./Components/ProjectCard";

{/* Import Images */}
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
import logoWhiteLibrary from './assets/logo-white-library.png'
import logoLibrary from './assets/logo-library.png'
import logoWhiteTodoList from './assets/logo-TodoList-white.png'
import logotodoList from './assets/logo-todoList.png'

export default function App() {

  const { darkMode } = useDarkMode()
  const { t } = useTranslation();

  return(
    <div className={`${darkMode ? "dark" : ""} dark:bg-zinc-800`}>
      <nav>
        <Header />
      </nav>
      <main>
        {/* Apresentation */}
        <section id="home" className="mt-32 mb-0 px-4 text-center md:mb-0 md:[min-height:calc(100vh-200px)] md:mt-32 pt-16 dark:text-white">
          <div className="max-w-7xl mx-auto  text-justify md:text-left">
            <p className="font-ibm-mono text-3xl mb-2">{t("hero.hello")}</p>
            <h1 className="text-7xl font-bold mb-2">Murilo Dias</h1>
            <h3 className="text-4xl text-primary mb-4">{t("hero.title")}</h3>
            <p className="text-lg text-color-text font-ibm-mono dark:text-white">
              {t("hero.desc")}
            </p>
            <a href="mailto:dias.murilosd@gmail.com">
              <button className="mt-6 px-6 py-3 bg-primary cursor-pointer text-white rounded-xl shadow-md hover:bg-primary/90 transition">{t("hero.button")}</button>
            </a>
          </div>
        </section>

        {/*About*/}
        <section id="sobre" className="max-w-7xl mt-32 mx-auto px-4 md:mt-0 dark:text-white">
          {/* About Title */}
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7xl gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap">{t("about.title")}</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>

          {/* About Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-">
            <article className="md:w-1/2">
              <p className="text-lg text-justify text-color-text leading-relaxed font-ibm-mono dark:text-white">
                {t("about.text")}
              </p>
            </article>

            {/* About Image */}
            <article className="md:w-1/2 flex justify-center">
              <img
                src={me}
                alt="Foto de Murilo"
                className="w-60 h-60 object-cover rounded-full shadow-lg"
              />
            </article>
          </div>
        </section>

        {/*Tecnologies*/}
        <section id="tecnologias" className="max-w-7xl mx-auto px-4 py-16 dark:text-white">
          {/*Tecnologies Title*/}
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7x1 gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap">{t("tech.title")}</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>

          {/*Tecnologies Images*/}
          <section className="flex flex-wrap items-center justify-center gap-8 mb-16">
            <img src={html} alt="icon html" className="w-20 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={css} alt="icon css" className="w-18 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={react} alt="icon react" className="w-20 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={js} alt="icon javascript" className="w-20 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={vite} alt="icon vite" className="w-20 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={figma} alt="icon figma" className="w-20 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={git} alt="icon git" className="w-20 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
            <img src={tailwind} alt="icon tailwind" className="w-30 md:grayscale hover:grayscale-0 transition duration-300 dark:grayscale-0"/>
          </section>
        </section>
        
        {/*Projects*/}
        <section id="projetos" className="max-w-7xl mx-auto px-4 dark:text-white">
          {/*Projects Title*/}
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7xl gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap">{t("projects.title")}</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>
          
          <section className="flex flex-wrap gap-10 justify-center">
            {/* Portfolio Project */}
            <ProjectCard whiteLogo={logoWhite} logo={logo} title={t("projectPortfolio.title")} desc={t("projectPortfolio.portfolioDesc")} codeUrl={"https://github.com/diasmurillo/Portfolio"} />

            {/* Library Project */}
            <ProjectCard whiteLogo={logoWhiteLibrary} logo={logoLibrary} title={t("projectLibrary.title")} desc={t("projectLibrary.libraryDesc")} codeUrl={"https://github.com/diasmurillo/Library"} />

            {/* TodoList Project */}
            <ProjectCard whiteLogo={logoWhiteTodoList} logo={logotodoList} title={t("projectTodo.title")} desc={t("projectTodo.todoDesc")} codeUrl={"https://github.com/diasmurillo/Todo-List"} siteUrl={"https://diasmurillo.github.io/Todo-List/"}/>

          </section>
        </section>

        {/*Contato*/}
        <section id="contato" className="max-w-7xl mx-auto px-4">
          {/*Contato Title*/}
          <div className="flex items-center justify-center mb-20">
            <div className="flex items-center w-full max-w-7xl gap-4">
              <span className="flex-grow h-px bg-gray-400"></span>
              <h2 className="text-4xl font-semibold text-center whitespace-nowrap dark:text-white">{t("contact.title")}</h2>
              <span className="flex-grow h-px bg-gray-400"></span>
            </div>
          </div>
          <article>
            <p className="font-ibm-mono text-justify dark:text-white" >
              {t("contact.text")}
            </p>
            <a href="mailto:dias.murilosd@gmail.com">
              <button className="mt-6 px-6 py-3 bg-primary cursor-pointer text-white rounded-xl shadow-md hover:bg-primary/90 transition">{t("hero.button")}</button>
            </a>
          </article>
        </section>
      </main>

      {/*Footer*/}
      <footer>
        <Footer />            
      </footer>
    </div>
  )
}



