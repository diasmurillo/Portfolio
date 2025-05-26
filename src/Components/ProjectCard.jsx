import { useTranslation } from "react-i18next";
import { useDarkMode } from "../Context/DarkModeContext";

export default function ProjectCard({whiteLogo, logo, title, desc, codeUrl, siteUrl}) {

    const { darkMode } = useDarkMode()
    const { t } = useTranslation();

    return (
        <section className="flex flex-wrap gap-10 mb-20">
              <article className="flex flex-col justify-between text-white rounded-2xl shadow-lg  max-w-sm mx-auto space-y-4 border-b  hover:scale-102 transition duration-300">
                <div className="bg-black w-full dark:bg-white">
                  {darkMode == '' ? 
                  <img className="w-30 mx-auto" src={whiteLogo} alt="Logo"/>
                  : 
                  <img className="w-30 mx-auto" src={logo} alt="logo"/>
                  }
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-black dark:text-white">{title}</h3>
                  <p className="text-lg text-color-text font-ibm-mono dark:text-white">
                    {desc}
                  </p>
                  <div className="flex gap-4">
                    {codeUrl && (
                        <button className="w-fit px-4 py-2 bg-color-text text-white rounded cursor-pointer hover:bg-color-text/90 transition dark:bg-white dark:text-color-text dark:hover:bg-white/90">
                            <a href={codeUrl} target="blank">{t("projectTodo.viewCode")}</a>
                        </button>
                    )}

                    {siteUrl && (
                        <button className="w-fit px-4 py-2 bg-color-text text-white rounded cursor-pointer hover:bg-color-text/90 transition dark:bg-white dark:text-color-text dark:hover:bg-white/90">
                            <a href={siteUrl} target="blank">{t("projectTodo.viewSite")}</a>
                        </button>
                    )}
                  </div>
                </div>
              </article>
            </section>
    )
}