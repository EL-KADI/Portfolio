"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import "../styles/globals.css";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  Download,
  Award,
  Briefcase,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const useCountUp = (end: number, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasStarted]);

  return count;
};

export default function Hero() {
  const calculateAge = (birthDate: Date): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const currentAge = calculateAge(new Date(2002, 3, 5));
  const ageCount = useCountUp(currentAge, 2000, 500);
  const projectsCount = useCountUp(70, 2500, 700);
  const certificatesCount = useCountUp(4, 1500, 900);
  const experienceCount = useCountUp(2, 1000, 1100);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="w-full space-y-20 mt-5">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.header
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 2xl:mx-auto"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Hello, I am
          </p>
          <section className="relative mb-[70px]">
            <h1 className="text-4xl absolute md:text-5xl animation-f-h1 font-bold mb-3 text-stroke">
              Sayed Ragheb
            </h1>
            <h1 className="text-4xl absolute md:text-5xl animation-s-h1 font-bold mb-3 wave">
              Sayed Ragheb
            </h1>
          </section>
          <section className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-4 h-10">
            <TypeAnimation
              sequence={[
                "Front End Developer",
                1000,
                "React Developer",
                1000,
                "Next.js Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </section>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
            I design exceptional and innovative websites with a focus on user
            experience, responsive design, and modern technologies.
          </p>
          <nav className="flex gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/EL-KADI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/el-kadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.facebook.com/profile.php?id=100015705041095"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="Facebook Profile"
            >
              <FacebookIcon className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/elkadii92/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="h-5 w-5" />
            </motion.a>
          </nav>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Pdfs/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Download CV
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.a>
        </motion.header>
        <motion.aside
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <motion.figure
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-200 dark:border-primary-800 shadow-xl"
            style={{
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            }}
          >
            <Image
              src="/Sayed Ragheb.avif"
              alt="Sayed Ragheb - Front End Developer professional headshot"
              fill
              className="object-cover "
              priority
            />
          </motion.figure>
        </motion.aside>
      </section>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto mt-16"
      >
        <motion.section
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <article className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {ageCount}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Years Old
            </div>
          </article>
          <article className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {projectsCount}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Projects
            </div>
          </article>
          <article className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {certificatesCount}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Certificates
            </div>
          </article>
          <article className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {experienceCount}+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Year Experience
            </div>
          </article>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl mb-8 border border-gray-200 dark:border-gray-700"
        >
          <header className="flex items-center mb-4">
            <User className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Who I Am
            </h3>
          </header>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a Front-End Developer with practical experience in building
            modern, responsive, and user-friendly web applications using React
            and Next.js. I've completed professional certifications from Meta
            (via Coursera), IBM, and Microsoft, and hold a Front-End Development
            Diploma from Route Academy. Throughout my journey, I've built over
            70 diverse projects — including e-commerce platforms, portfolio
            websites, and custom applications inspired by major platforms like
            Facebook and Youtube. I focus on performance, clean code, and
            delivering seamless user experiences that follow the latest web
            standards and best practices.
          </p>
        </motion.section>
        <section className="space-y-6">
          <motion.article
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <button
              onClick={() => toggleSection("experience")}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <header className="flex items-center">
                <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Experience
                </h3>
              </header>
              {expandedSection === "experience" ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.section
              initial={false}
              animate={{
                height: expandedSection === "experience" ? "auto" : 0,
                opacity: expandedSection === "experience" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <section className="p-6 pt-0 space-y-4">
                <article className="border-l-4 border-green-500 pl-4">
                  <header>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Freelance Front-End Developer
                    </h4>
                  </header>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Worked independently on designing and building modern,
                    responsive web interfaces tailored to client needs.
                    Successfully delivered 60+ projects across various
                    industries, including e-commerce, personal branding, and
                    custom web solutions. Blended creativity with functionality
                    by crafting original designs and reimagining features
                    inspired by top platforms like Facebook and YouTube. Focused
                    on performance, scalability, and delivering a smooth user
                    experience using the latest front-end technologies and best
                    practices.
                  </p>
                
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    These projects featured a wide range of original and
                    creative ideas — all delivered with seamless functionality
                    and high-quality standards aligned with modern web
                    practices.
                  </p>
                       <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Professional Experience – Syber Company
                    </h4>
                  <p className="text-gray-700 dark:text-gray-300 ">
  Worked for 1 year and 2 months at a company called Syber, where I was
  responsible for converting Figma designs into fully functional,
  responsive front-end applications. Gained valuable experience in
  translating UI/UX concepts into clean, efficient code using modern
  front-end technologies. Despite the company eventually shutting down,
  the role significantly enhanced my skills in collaboration,
  problem-solving, and delivering production-ready interfaces.
</p>

                </article>
              </section>
            </motion.section>
          </motion.article>
          <motion.article
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <button
              onClick={() => toggleSection("education")}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <header className="flex items-center">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education & Certifications
                </h3>
              </header>
              {expandedSection === "education" ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <motion.section
              initial={false}
              animate={{
                height: expandedSection === "education" ? "auto" : 0,
                opacity: expandedSection === "education" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <section className="p-6 pt-0 space-y-4">
                <section className="grid md:grid-cols-2 gap-4">
                  <article className="space-y-3">
                    <header>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Certifications
                      </h4>
                    </header>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        IBM Front-End Developer Certificate – Coursera
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Microsoft Front-End Developer Certificate – Coursera
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Meta Front-End Developer Certificate – Coursera
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Front-End Development Diploma – Route Academy
                      </li>
                    </ul>
                  </article>
                  <article>
                    <header>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Academic Qualifications
                      </h4>
                    </header>
                    <section className="border-l-4 border-blue-500 pl-4">
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>
                          Bachelor of Arts in Population Studies (B.A.)
                        </strong>
                        <br />
                        Suez Canal University | Ismailia, Egypt | Pass grade
                      </p>
                    </section>
                  </article>
                </section>
              </section>
            </motion.section>
          </motion.article>
        </section>
        <motion.section
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <header>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Soft Skills
              </h3>
            </header>
            <section className="flex flex-wrap gap-2">
              {[
                "Continuous Learning",
                "Problem-Solving",
                "Flexibility",
                "Innovation",
              ].map((skill) => (
                <mark
                  key={skill}
                  className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                >
                  {skill}
                </mark>
              ))}
            </section>
          </article>
          <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <header>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages
              </h3>
            </header>
            <section className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">Arabic</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Native
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">
                  English
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Good
                </span>
              </div>
            </section>
          </article>
        </motion.section>
        <motion.section
          variants={itemVariants}
          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl mt-8 border border-gray-200 dark:border-gray-700"
        >
          <header>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Activities & Interests
            </h3>
          </header>
          <section className="flex flex-wrap gap-3">
            {["Chess", "Boxing", "CrossFit", "Poetry", "Travel", "Writing"].map(
              (activity) => (
                <span
                  key={activity}
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
                >
                  {activity}
                </span>
              )
            )}
          </section>
        </motion.section>
      </motion.section>
    </main>
  );
}
