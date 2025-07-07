"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import { HiOutlineDownload } from "react-icons/hi"

export default function Interface() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("home")
  const [showAllProjects, setShowAllProjects] = useState(false)

  const sections = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)

    const sectionIndex = sections.findIndex((section) => section.id === sectionId)
    const scrollTarget = sectionIndex / (sections.length - 1)

    const element = document.getElementById("scroll-container")
    if (element) {
      element.scrollTo({
        top: element.scrollHeight * scrollTarget,
        behavior: "smooth",
      })
    }
  }

  const additionalProjects = [
    {
      title: "NoteApp",
      description: "A fully responsive note-taking app with user authentication and CRUD operations for notes.",
      url: "https://note-app-el-kadis-projects.vercel.app/",
      code: "https://github.com/EL-KADI/NoteApp/",
    },
    {
      title: "FoodDex",
      description: "A web page showcasing various dishes with their recipes and calorie counts built using SASS.",
      url: "https://fooddex.vercel.app/",
      code: "https://github.com/EL-KADI/FoodDex",
    },
    {
      title: "Material Kit 2",
      description: "A web application with Login and Home Page that dynamically fetches content from APIs.",
      url: "https://el-kadi.github.io/Material-Kit-2/#/register",
      code: "https://github.com/EL-KADI/Material-Kit-2",
    },
    {
      title: "Weather",
      description: "A web application providing real-time weather updates based on your location.",
      url: "https://weather-beta-flame.vercel.app/",
      code: "https://github.com/EL-KADI/Weather",
    },
    {
      title: "Games",
      description: "A web application offering a variety of games sourced from a dedicated API.",
      url: "https://gameson-theta.vercel.app/",
      code: "https://github.com/EL-KADI/Games",
    },
    {
      title: "Daniels",
      description: "A single-page website with sections for personal details, services, work, and more.",
      url: "https://daniels-tau-fawn.vercel.app/",
      code: "https://github.com/EL-KADI/master-tow",
    },
    {
      title: "DevFolio",
      description: "A training project featuring Portfolio, Blog, Contact, and About sections.",
      url: "https://devfolio-five-xi.vercel.app/",
      code: "https://github.com/EL-KADI/DevFolio",
    },
    {
      title: "Start Framework",
      description: "A simple web page showcasing a Portfolio, About section, and Contact form.",
      url: "https://el-kadi.github.io/Start-Framework/",
      code: "https://github.com/EL-KADI/Start-Framework",
    },
    {
      title: "Random Quote Generator",
      description: "A web page displaying random quotes, advice, or sayings at the click of a button.",
      url: "https://quote-generator-ten-alpha.vercel.app/",
      code: "https://github.com/EL-KADI/-Random-Quote-Generator.",
    },
    {
      title: "Bookmark",
      description: "A web page allowing users to add and manage bookmarks with a simple interface.",
      url: "https://bookmark-khaki-one.vercel.app/",
      code: "https://github.com/EL-KADI/Bookmark-Name",
    },
    {
      title: "Smart Login System",
      description: "A simple web page for user registration and login with a clean interface.",
      url: "https://smart-login-gamma.vercel.app/",
      code: "https://github.com/EL-KADI/Smart-Login",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("scroll-container")
      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollTop
        const totalHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight
        const scrollPercentage = scrollPosition / totalHeight

        const sectionIndex = Math.min(Math.floor(scrollPercentage * sections.length), sections.length - 1)
        setActiveSection(sections[sectionIndex].id)
      }
    }

    const scrollContainer = document.getElementById("scroll-container")
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [sections.length])

  return (
    <div className="w-full h-full">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-center z-40 bg-black/30 backdrop-blur-sm">
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => handleNavClick(section.id)}
                className={`text-white px-3 py-1 rounded-full transition-all ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
                    : "hover:bg-white/10"
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed bottom-4 left-4 flex flex-col space-y-3 z-40">
        <a
          href="https://github.com/EL-KADI"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-all"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/el-kadi/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-600 transition-all"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100015705041095"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://www.instagram.com/elkadii92/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 flex items-center justify-center text-white hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all"
        >
          <FaInstagram size={20} />
        </a>
      </div>

      <a
        href="/CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-40 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold flex items-center space-x-2 hover:from-cyan-600 hover:to-blue-600 transition-all"
      >
        <span>Download CV</span>
        <HiOutlineDownload size={18} />
      </a>

      <div id="scroll-container" className="w-full h-full overflow-auto">
        <section id="home" className="h-screen"></section>
        <section id="skills" className="h-screen"></section>
        <section id="projects" className="h-screen relative">
          {activeSection === "projects" && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl p-6 bg-black/80 backdrop-blur-md rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-4 text-white">Additional Projects</h2>

              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="mb-4 mx-auto block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
              >
                {showAllProjects ? "Show Less" : "Show More Projects"}
              </button>

              {showAllProjects && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto p-2">
                  {additionalProjects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded-lg">
                      <h3 className="text-lg font-semibold mb-1 text-white">{project.title}</h3>
                      <p className="text-sm mb-2 text-gray-300 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-blue-600 px-2 py-1 rounded hover:bg-blue-700 transition-colors text-white"
                        >
                          View
                        </a>
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition-colors text-white"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
        <section id="certificates" className="h-screen"></section>
        <section id="contact" className="h-screen"></section>
      </div>
    </div>
  )
}
