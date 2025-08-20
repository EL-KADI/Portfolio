"use client";
import { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import {
  MoonIcon,
  SunIcon,
  ChevronUpIcon,
  HomeIcon,
  BrainIcon,
  FolderIcon,
  AwardIcon,
  MailIcon,
  ArrowUpIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import ParticlesBackground from "@/components/ParticlesBackground";
import { AnimatedNav } from "../components/animated-nav";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "@/styles/globals.css";
import ContactSEO from "@/components/seo/contact-seo";
import SkillsSEO from "@/components/seo/skills-seo";
import ProjectsSEO from "@/components/seo/projects-seo";
import HomeSEO from "@/components/seo/home-seo";
import CertificatesSEO from "@/components/seo/certificates-seo";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosingMenu, setIsClosingMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navigationItems = [
    { id: "top", label: "Top", icon: ArrowUpIcon },
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "skills", label: "Skills", icon: BrainIcon },
    { id: "projects", label: "Projects", icon: FolderIcon },
    { id: "certificates", label: "Certificates", icon: AwardIcon },
    { id: "contact", label: "Contact", icon: MailIcon },
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 15) {
        setIsVisible(true);
      } else {
        if (isMenuOpen) {
          setIsClosingMenu(true);
          setIsMenuOpen(false);

          setTimeout(() => {
            setIsVisible(false);
            setIsClosingMenu(false);
          }, 800);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".navigation-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - -30,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (id: string) => {
    scrollToSection(id);
  };

  const handleMenuToggle = () => {
    if (!isClosingMenu) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme={theme} enableSystem={false}>
      <div className="navigation-menu fixed bottom-4 right-4 z-50">
        <AnimatePresence>
          {(isVisible || isClosingMenu) && (
            <>
              <div className="hidden lg:block">
                <AnimatePresence mode="wait">
                  {isMenuOpen && (
                    <FloatingDockMenu
                      items={navigationItems}
                      onItemClick={handleMenuItemClick}
                      theme={theme}
                      key="desktop-menu"
                    />
                  )}
                </AnimatePresence>
              </div>

              <div className="block lg:hidden">
                <AnimatePresence mode="wait">
                  {isMenuOpen && (
                    <MobileMenu
                      items={navigationItems}
                      onItemClick={handleMenuItemClick}
                      theme={theme}
                      key="mobile-menu"
                    />
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={handleMenuToggle}
                disabled={isClosingMenu}
                className={`relative p-3 rounded-full shadow-2xl text-white overflow-hidden group transition-opacity duration-200 ${
                  isClosingMenu ? "opacity-50 cursor-not-allowed" : ""
                } ${
                  theme === "light"
                    ? "bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600"
                    : "bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600"
                }`}
                aria-label="Navigation menu"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={!isClosingMenu ? { scale: 1.1 } : {}}
                whileTap={!isClosingMenu ? { scale: 0.9 } : {}}
              >
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    theme === "light"
                      ? "bg-gradient-to-r from-cyan-600 via-teal-700 to-emerald-700"
                      : "bg-gradient-to-r from-indigo-600 via-purple-700 to-blue-700"
                  }`}
                />

                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative z-10"
                >
                  <ChevronUpIcon className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 perspective-1000">
        <ParticlesBackground />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
          style={{ scaleX }}
        />

        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 p-2 translate-y-14 -translate-x-5 sm:translate-y-[6.8rem] rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors transform hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <MoonIcon className="h-5 w-5" />
          ) : (
            <SunIcon className="h-5 w-5" />
          )}
        </button>

        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 sm:py-4 sm:mt-[7.5px] ">
            <AnimatedNav
              items={["Home", "Skills", "Projects", "Certificates", "Contact"]}
              onItemClick={scrollToSection}
            />
          </div>
        </nav>

        <div className="container mx-auto px-4 pt-20">
          <section id="home" className="min-h-screen flex items-center py-20">
            <HomeSEO />
            <Hero />
          </section>
          <section id="skills" className="min-h-screen flex items-center py-20">
            <SkillsSEO />
            <Skills />
          </section>
          <section id="projects" className="min-h-screen py-20">
            <ProjectsSEO />
            <Projects />
          </section>
          <section
            id="certificates"
            className="min-h-screen flex items-center py-20"
          >
            <CertificatesSEO />
            <Certificates />
          </section>
          <section
            id="contact"
            className="min-h-screen flex items-center py-20"
          >
            <ContactSEO />
            <Contact />
          </section>
        </div>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Sayed Ragheb. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Front End Developer
            </p>
          </div>
        </footer>
      </main>
    </ThemeProvider>
  );
}

function FloatingDockMenu({
  items,
  onItemClick,
  theme,
}: {
  items: { id: string; label: string; icon: any }[];
  onItemClick: (id: string) => void;
  theme: string;
}) {
  const mouseY = useMotionValue(Number.POSITIVE_INFINITY);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{
        opacity: 0,
        scale: 0.6,
        y: 30,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
          opacity: { duration: 0.6, ease: "easeOut" },
        },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Number.POSITIVE_INFINITY)}
      className={`absolute bottom-20 right-0 flex flex-col gap-2 p-3 rounded-2xl shadow-2xl border backdrop-blur-sm ${
        theme === "light"
          ? "bg-white/90 border-gray-200/50"
          : "bg-gray-900/90 border-gray-700/50"
      }`}
    >
      {items.map((item, idx) => (
        <IconContainer
          key={item.id}
          mouseY={mouseY}
          item={item}
          onItemClick={onItemClick}
          theme={theme}
        />
      ))}
    </motion.div>
  );
}

function MobileMenu({
  items,
  onItemClick,
  theme,
}: {
  items: { id: string; label: string; icon: any }[];
  onItemClick: (id: string) => void;
  theme: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{
        opacity: 0,
        scale: 0.6,
        y: 30,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
          opacity: { duration: 0.6, ease: "easeOut" },
        },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`absolute bottom-20 right-0 flex flex-col gap-2 p-4 rounded-3xl shadow-2xl border backdrop-blur-sm min-w-[220px] ${
        theme === "light"
          ? "bg-white/95 border-gray-200/50"
          : "bg-gray-900/95 border-gray-700/50"
      }`}
    >
      {items.map((item, idx) => (
        <MobileMenuItem
          key={item.id}
          item={item}
          index={idx}
          onItemClick={onItemClick}
          theme={theme}
        />
      ))}
    </motion.div>
  );
}

function MobileMenuItem({
  item,
  index,
  onItemClick,
  theme,
}: {
  item: { id: string; label: string; icon: any };
  index: number;
  onItemClick: (id: string) => void;
  theme: string;
}) {
  const [displayText, setDisplayText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = item.icon;

  useEffect(() => {
    if (isHovered) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= item.label.length) {
          setDisplayText(item.label.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setDisplayText(item.label);
    }
  }, [isHovered, item.label]);

  return (
    <motion.button
      initial={{ opacity: 0, x: 30, scale: 0.8 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          delay: index * 0.1,
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      exit={{
        opacity: 0,
        x: 20,
        scale: 0.9,
        transition: {
          delay: (5 - index) * 0.08,
          duration: 0.5,
          ease: "easeInOut",
          opacity: {
            duration: 0.7,
            ease: "easeOut",
            delay: (5 - index) * 0.05,
          },
        },
      }}
      onClick={() => onItemClick(item.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
        theme === "light"
          ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
          : "text-gray-200 hover:text-blue-400 hover:bg-blue-900/30"
      }`}
      whileHover={{
        scale: 1.05,
        x: 5,
        transition: { type: "spring", stiffness: 400, damping: 15 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          theme === "light"
            ? "bg-gradient-to-r from-emerald-100 to-teal-100"
            : "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
        }`}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-xl shadow-lg ${
          theme === "light"
            ? "bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:from-emerald-600 group-hover:to-teal-700"
            : "bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700"
        } text-white`}
        whileHover={{
          rotate: [0, -5, 5, 0],
          scale: 1.1,
          transition: { duration: 0.4 },
        }}
      >
        <IconComponent className="h-5 w-5" />
      </motion.div>

      <motion.div className="relative z-10 flex-1">
        <span className="text-sm font-medium">
          {displayText}
          {isHovered && displayText.length < item.label.length && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
              className={
                theme === "light" ? "text-emerald-500" : "text-blue-400"
              }
            >
              |
            </motion.span>
          )}
        </span>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{
          x: "100%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
      />
    </motion.button>
  );
}

function IconContainer({
  mouseY,
  item,
  onItemClick,
  theme,
}: {
  mouseY: any;
  item: { id: string; label: string; icon: any };
  onItemClick: (id: string) => void;
  theme: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseY, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [50, 80, 50]);

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 32, 20]
  );
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 32, 20]
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const IconComponent = item.icon;

  return (
    <motion.button
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onItemClick(item.id)}
      className={`relative flex items-center justify-center rounded-full transition-colors duration-200 ${
        theme === "light"
          ? "bg-gray-100 hover:bg-emerald-100"
          : "bg-gray-800 hover:bg-blue-800"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className={`absolute -top-8 left-1/2 w-fit rounded-md border px-2 py-0.5 text-xs whitespace-pre ${
              theme === "light"
                ? "border-gray-200 bg-white text-gray-700"
                : "border-gray-700 bg-gray-800 text-white"
            }`}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className={`flex items-center justify-center ${
          theme === "light" ? "text-emerald-600" : "text-blue-400"
        }`}
      >
        <IconComponent className="w-full h-full" />
      </motion.div>
    </motion.button>
  );
}
