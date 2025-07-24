"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Meteors } from "../components/ui/meteors";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MaterialKit2 from "../Images/Material Kit 2.png";
import Weather from "../Images/Weather.png";
import DevFolio from "../Images/DevFolio.png";
import Daniels from "../Images/Daniels.png";
import Games from "../Images/Games.png";
import StartFramework from "../Images/Start Framework.png";
import SmartLoginSystem from "../Images/Smart Login System.png";
import Bookmark from "../Images/Bookmark.png";
import RandomQuoteGenerator from "../Images/Random Quote Generator.png";
import FreshCart from "../Images/FreshCart.png";
import FoodDex from "../Images/FoodDex.png";
import GamePlex from "../Images/GamePlex.png";
import MovieNest from "../Images/MovieNest.png";
import NoteApp from "../Images/NoteApp.png";
import Yonna from "../Images/Yonna.png";
import nasaehgedety from "../Images/nasaehgedety.png";
import abdullahclinicsystem from "../Images/Abdullah Clinic System.png";
import DigitalCardCreator from "../Images/Digital Card Creator.png";
import VideoQuest from "../Images/VideoQuest.png";
import PodcastFinder from "../Images/Podcast Finder.png";
import Cartify from "../Images/Cartify.png";
import BitPulse from "../Images/BitPulse.png";
import spark from "../Images/spark.png";
import GoVents from "../Images/GoVents.png";
import AstroVerse from "../Images/AstroVerse.png";
import DreamGarden from "../Images/DreamGarden.png";
import InkVibe from "../Images/InkVibe.png";
import EraEcho from "../Images/EraEcho.png";
import SoundVoyage from "../Images/SoundVoyage.png";
import ScentJourney from "../Images/ScentJourney.png";
import LexisLore from "../Images/LexisLore.png";
import OceanForge from "../Images/OceanForge.png";
import MassioHealth from "../Images/MassioHealth.png";
import EasyCode from "../Images/EasyCode.png";
import SiteScan from "../Images/SiteScan.png";
import SlimCode from "../Images/SlimCode.png";
import FlightTrace from "../Images/FlightTrace.png";
import SkyTracker from "../Images/SkyTracker.png";
import CVForge from "../Images/CVForge.png";
import PlayStats from "../Images/PlayStats.png";
import SkyLens from "../Images/SkyLens.png";
import QuizBit from "../Images/QuizBit.png";
import Wander from "../Images/Wander.png";
import Volcano from "../Images/Volcano.png";
import MedicalPoint from "../Images/MedicalPoint.png";
import ClinicHub from "../Images/ClinicHub.png";
import MedCarePro from "../Images/MedCarePro.png";
import CrossCraft from "../Images/CrossCraft.png";
import Chartify from "../Images/Chartify.png";
import Transola from "../Images/Transola.png";
import BalanceBeam from "../Images/BalanceBeam.png";
import Moodora from "../Images/Moodora.png";
import JobTrail from "../Images/JobTrail.png";
import Typix from "../Images/Typix.png";
import Shelfy from "../Images/Shelfy.png";
import Dozyly from "../Images/Dozyly.png";
import Utilix from "../Images/Utilix.png";
import Sweatly from "../Images/Sweatly.png";
import Reactly from "../Images/Reactly.png";
import Sakeena from "../Images/Sakeena.png";
import Noor from "../Images/Noor.png";
import Morphix from "../Images/Morphix.png";
import Calc from "../Images/Calc.png";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(10);
  const allProjectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth >= 1536) {
        setProjectsPerPage(9);
      } else if (window.innerWidth >= 1280) {
        setProjectsPerPage(9);
      } else if (window.innerWidth >= 1024) {
        setProjectsPerPage(10);
      } else if (window.innerWidth >= 768) {
        setProjectsPerPage(10);
      } else {
        setProjectsPerPage(6);
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);
    return () => window.removeEventListener("resize", updateProjectsPerPage);
  }, []);

  const projects = [
    {
      title: "Noor",
      description:
        "Noor is a comprehensive Islamic web application built with Next.js and TypeScript, offering a rich digital Islamic experience. The platform features Quran reading with translations and audio recitation, a Hadith collection from major Islamic books, and a smart, user-friendly favorites system. It includes sections for Ramadan, Islamic education, daily Adhkar, and a Hijri calendar with prayer times. With multilingual support (over 10 languages), dark/light mode, and responsive design, Noor serves as your Islamic companion for spiritual growth and worship.",
      image: Noor,
      url: "https://noor-murex.vercel.app/",
      code: "https://github.com/EL-KADI/Noor",
      tags: [
        "Next.js",
        "Quran API",
        "Prayer Times",
        "Hijri Calendar",
        "Multilingual",
      ],
    },
    {
      title: "Yonna (Social App)",
      description:
        "This project is a fully responsive social media platform built with Next.js and MUI, designed to offer a smooth and engaging experience across devices. It features secure authentication, a real-time Home Feed, and interactive profiles that display posts, likes, and activity. Users can create posts, like, and comment through real-time API integration for fast and reliable updates. With its clean interface and intuitive navigation, the platform delivers modern functionality suitable for everyday interaction and scalable enhancements.",
      image: Yonna,
      url: "https://yonna.vercel.app/signin",
      code: "https://github.com/EL-KADI/Yonna",
      tags: ["Next.js", "MUI", "API Integration", "Authentication"],
      featured: true,
    },
    {
      title: "Cartify (E-Commerce App)",
      description:
        "This project is a fully integrated e-commerce platform designed to provide a professional and seamless online shopping experience. The site dynamically fetches content from APIs, offering a wide variety of products including the latest deals and exclusive discounts. It features a modern and attractive design with an interactive, responsive interface compatible with all devices. The platform also includes features such as a shopping cart and detailed product views to meet user needs and deliver a comprehensive shopping experience.",
      image: Cartify,
      url: "https://cartify-khaki.vercel.app/",
      code: "https://github.com/EL-KADI/Cartify-E-Commerce-App",
      tags: ["Next", "E-commerce", "API Integration", "Tailwind CSS"],
      featured: true,
    },
    {
      title: "Nasaeh Gedety",
      description:
        "Nasaeh Gedety is an Arab heritage platform built with Next.js and Tailwind CSS. It dynamically offers traditional tips and folk recipes across 49 categories, like cooking, sewing, and childcare. Users can submit their own tips, blending grandmothers' wisdom with a seamless, interactive design, celebrating Egyptian, Gulf, and Levantine traditions. The platform also features an intelligent chatbot that provides instant answers to users' questions, guiding them through categories, offering personalized advice, and making their experience more engaging and interactive.",
      image: nasaehgedety,
      url: "https://nasaehgedety.vercel.app/",
      code: "https://github.com/EL-KADI/Nasaeh-Gedety",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Cultural",
        "User Submissions",
        "Chatbot",
      ],
      featured: true,
    },
    {
      title: "FreshCart (E-Commerce App)",
      description:
        "FreshCart is a responsive and modern e-commerce web application featuring a secure login page and a clean, well-organized home page. It fetches product data dynamically from APIs, showcasing a variety of categories, offers, best-selling items, trending products, and real-time discounts updated regularly for users across all devices. The app provides smooth navigation, fast loading times, an interactive user interface, and a seamless browsing experience, allowing users to explore products easily and enjoy an efficient, enjoyable, and mobile-friendly online shopping journey with consistent performance.",
      image: FreshCart,
      url: "https://fresh-cart-virid-beta.vercel.app/",
      code: "https://github.com/EL-KADI/FreshCart-E-commerce-App",
      tags: ["React", "E-commerce", "API Integration", "Authentication"],
    },
    {
      title: "VideoQuest",
      description:
        "VideoQuest is an interactive front-end application built with Next.js and Tailwind CSS, allowing users to explore, search, and follow educational and entertainment videos from open sources. The application features a modern user interface with dark mode support, an advanced dashboard displaying interaction statistics through dynamic charts, a favorites list for saving videos, an option to download videos for offline viewing, and direct video playback within the app. VideoQuest ensures a smooth and interactive user experience, with easy customization and feature development.",
      image: VideoQuest,
      url: "https://video-quest.vercel.app/",
      code: "https://github.com/EL-KADI/VideoQuest",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Video Platform",
        "Dashboard",
        "Dark Mode",
      ],
      featured: true,
    },
    {
      title: "BitPulse",
      description:
        "BitPulse is a financial data platform built with Next.js and Tailwind CSS. It provides real-time and historical price data for traditional currencies (e.g., USD/EGP) and cryptocurrencies (e.g., Bitcoin, Ethereum). The platform utilizes ExchangeRate-API for currency exchange rates and CoinGecko API for crypto prices, displayed through interactive Chart.js visualizations and updated automatically. It features a clean, responsive interface with a currency converter, time-range filters for data analysis, optimized performance across all devices, and support for dark mode and multiple languages to enhance user experience.",
      image: BitPulse,
      url: "https://bit-pulse-iota.vercel.app/",
      code: "https://github.com/EL-KADI/BitPulse",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Chart.js",
        "Finance",
        "Cryptocurrency",
        "Currency Exchange",
      ],
      featured: true,
    },
    {
      title: "SkyTracker",
      description:
        "SkyTracker is a dynamic flight tracking platform built with React, designed to deliver an engaging and interactive user experience. Powered by a flight data API, it allows users to search for flights by city, flight number, or airline, presenting detailed information such as flight status, departure/arrival times, and aircraft details. The app features a card-based interface for flight results, an interactive Mapbox map to track flight paths in real-time, and a favorites section stored in LocalStorage. With reusable React components, dynamic filtering, and a responsive design optimized for all devices.",
      image: SkyTracker,
      url: "https://sky-tracker-snowy.vercel.app/",
      code: "https://github.com/EL-KADI/SkyTracker",
      tags: [
        "React",
        "aviationstack API",
        "Mapbox",
        "LocalStorage",
        "Flight Tracker",
        "Interactive UI",
      ],
    },
    {
      title: "QuizBit",
      description:
        "QuizBit is an interactive coding quiz platform built with Next.js 15, designed to help developers master programming skills through engaging practice sessions. Featuring real-time code evaluation, syntax-highlighted editors, and instant feedback, it supports JavaScript, Python, Node.js, SQL and CSS challenges across multiple difficulty levels. The platform includes a comprehensive quiz selection interface with filtering capabilities, progress tracking with detailed analytics, favorites management, and responsive design optimized for all devices.",
      image: QuizBit,
      url: "https://quiz-bit-zeta.vercel.app/",
      code: "https://github.com/EL-KADI/QuizBit",
      tags: [
        "Next.js",
        "shadcn/ui",
        "Interactive Learning",
        "Code Editor",
        "Real-time Evaluation",
        "Responsive Design",
        "Educational Platform",
      ],
    },
    {
      title: "EasyCode",
      description:
        "EasyCode Editor is a web-based HTML & CSS live editor built with React and Tailwind CSS. It enables users to write, edit, and preview HTML/CSS code in real time. The platform includes features like code saving/loading with localStorage, a theme toggle between light and dark modes, and responsive design for mobile and tablets. With a customizable layout that supports split view, editor-only, or preview-only modes, it's ideal for beginners, prototyping, and teaching front-end development. Toast notifications enhance the user experience, and the project is structured using reusable components for maintainability.",
      image: EasyCode,
      url: "https://easy-code-smoky.vercel.app/",
      code: "https://github.com/EL-KADI/EasyCode",
      tags: ["React", "Tailwind CSS", "Live Editor", "localStorage"],
    },
    {
      title: "SkyLens",
      description:
        "SkyLens is an interactive weather forecast platform built with Next.js, designed to deliver real-time weather data with stunning visual experiences. Powered by the OpenWeatherMap API, it allows users to search for cities worldwide with autocomplete suggestions, presenting comprehensive weather information including current conditions, 5-day forecasts, and hourly predictions. The app features dynamic weather backgrounds that adapt to current conditions, a responsive card-based interface, detailed weather analytics with interactive charts using Recharts, and popular cities showcase for quick access.",
      image: SkyLens,
      url: "https://sky-lens-six.vercel.app/",
      code: "https://github.com/EL-KADI/SkyLens",
      tags: [
        "Next.js",
        "OpenWeatherMap API",
        "Tailwind CSS",
        "Recharts",
        "Weather Forecast",
      ],
    },
    {
      title: "Digital Card Creator",
      description:
        "Digital Card Creator is a flexible platform built with Next.js and Tailwind CSS, allowing users to create custom digital cards such as greeting cards, invitations, and business cards. Users can start designing from scratch, adding text, images, and freely customizing colors and fonts. The platform provides instant preview of the designs and supports downloading the final cards in PNG or PDF format using jsPDF. It leverages Fabric.js for powerful and dynamic graphic editing, ensuring a smooth and flexible design experience suitable for both personal and professional use.",
      image: DigitalCardCreator,
      url: "https://digital-card-creator-nine.vercel.app",
      code: "https://github.com/EL-KADI/Digital-Card-Creator",
      tags: ["Next.js", "Tailwind CSS", "Fabric.js", "Design Tool", "jsPDF"],
      featured: true,
    },
    {
      title: "Podcast Finder",
      description:
        "Podcast Finder is an interactive front-end application built with Next.js and Tailwind CSS, designed to enable users to easily search and explore a wide variety of podcast information sourced from open platforms. The site features a dedicated section for Featured Podcasts to help users follow the best carefully selected episodes and shows. The application boasts a modern and smooth user interface, ensuring an engaging and seamless experience for users of all levels.",
      image: PodcastFinder,
      url: "https://podcast-finder-seven.vercel.app/",
      code: "https://github.com/EL-KADI/Podcast-Finder",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Podcast",
        "Search",
        "Featured Content",
      ],
    },
    {
      title: "AstroVerse",
      description:
        "AstroVerse is an interactive space exploration platform built with Next.js, Tailwind CSS, Three.js, and GSAP. It leverages the NASA API to deliver real-time astronomical data, including the Astronomy Picture of the Day (APOD), Mars rover photos, and near-Earth object information. The platform offers a responsive, interface with a 3D planet exploration feature, a kids' educational section with quizzes, and a space missions showcase. Users can save favorite planets or images and enjoy smooth animations for an immersive experience.",
      image: AstroVerse,
      url: "https://astro-verse-mu.vercel.app/",
      code: "https://github.com/EL-KADI/AstroVerse",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Three.js",
        "GSAP",
        "NASA API",
        "Space Exploration",
        "Educational",
      ],
    },
    {
      title: "Transola",
      description:
        "Transola is a real-time translation platform built with Next.js and powered by the MyMemory API. It supports over 200 languages with a smooth, responsive interface. Users get instant translation while typing, easy language switching, and organized dropdowns. Key features include translation history, favorites saved in LocalStorage, one-click copy, and export as JSON or TXT. The platform is mobile-friendly, accessible, and designed with a modern, professional look with fast performance, clear UX, and scalable architecture.",
      image: Transola,
      url: "https://transola.vercel.app/",
      code: "https://github.com/EL-KADI/Transola",
      tags: [
        "Next.js",
        "Translation API",
        "MyMemory API",
        "Real-time Translation",
        "Tailwind CSS",
        "Data Export",
      ],
    },
    {
      title: "EraEcho",
      description:
        "EraEcho is an interactive platform for exploring historical events, built with Next.js, Tailwind CSS, and Framer Motion. It uses the On This Day API to display events for a specific date or year on a dynamic timeline. The responsive interface offers event filtering, a random event feature, a kids' section, and the ability to save favorites to Local Storage with smooth animations.",
      image: EraEcho,
      url: "https://era-echo.vercel.app/",
      code: "https://github.com/EL-KADI/EraEcho",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "On This Day API",
        "Historical Events",
        "Educational",
      ],
    },
    {
      title: "InkVibe",
      description:
        "InkVibe is a digital library platform built with Next.js, Tailwind CSS, and Swiper.js. It uses the Open Library API to browse and search free books by genre, language, or author. The responsive interface offers a bookshelf, reading lists, a kids' section with quizzes, and reading stats. Users can save favorites to Local Storage and toggle dark mode.",
      image: InkVibe,
      url: "https://ink-vibe.vercel.app/",
      code: "https://github.com/EL-KADI/InkVibe",
      tags: ["Next.js", "Tailwind CSS", "Open Library API", "Digital Library"],
    },
    {
      title: "Morphix",
      description:
        "Morphix is a dynamic web app built with Next.js, to convert images and videos between formats using modern technologies. Featuring an intuitive upload system with drag-and-drop, Morphix offers a responsive interface styled with Tailwind CSS, enhanced with Framer Motion, and accessible via clean design. Conversions are processed client-side using HTML5 Canvas and optimized algorithms, with temporary storage in LocalStorage. Morphix is a compelling portfolio showcasing expertise in file processing, modern UI/UX, and user-centric development.",
      image: Morphix,
      url: "https://morphix-three.vercel.app/",
      code: "https://github.com/EL-KADI/Morphix",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "File Conversion",
        "Canvas API",
        "Framer Motion",
      ],
    },
    {
      title: "Sakeena",
      description:
        "Sakeena is a modern bilingual (English/Arabic) web application for displaying Islamic prayer times, developed using Next.js and Tailwind CSS. It provides real-time prayer timings, a 30-day prayer schedule, and displays both Hijri and Gregorian dates. Using the Aladhan API, the app automatically detects the user's location to ensure highly accurate and reliable prayer time information. With a clean, intuitive, and fully responsive design, Sakeena makes it easy to stay connected to your daily prayers—anytime, anywhere, on any device.",
      image: Sakeena,
      url: "https://sakeena-five.vercel.app/",
      code: "https://github.com/EL-KADI/Sakeena",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Prayer Times",
        "Aladhan API",
        "Localization",
      ],
    },
    {
      title: "SiteScan",
      description:
        "SiteScan is a website analysis tool built with Next.js and Tailwind CSS. It uses Google PageSpeed Insights to assess Performance, SEO, Accessibility, and Best Practices. Features include a modern responsive design, interactive progress indicators, expandable analysis cards, and actionable tips. Results can be exported as JSON or copied, with toast notifications for better UX. Includes About, Contact, and Privacy Policy pages.",
      image: SiteScan,
      url: "https://site-scan.vercel.app/",
      code: "https://github.com/EL-KADI/SiteScan",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Google PageSpeed API",
        "Website Analysis",
        "Performance Testing",
        "SEO Analysis",
        "Accessibility Testing",
      ],
    },
    {
      title: "CVForge",
      description:
        "CVForge is a Next.js web app that makes creating professional resumes easy. It features a dynamic form to enter personal info, education, work experience, and skills, with live previews of multiple customizable templates. Users can optionally upload a profile picture with a placeholder image. Resumes can be exported as PDFs using jsPDF. Data is saved locally via LocalStorage.",
      image: CVForge,
      url: "https://cv-forge-nine.vercel.app/",
      code: "https://github.com/EL-KADI/CVForge",
      tags: ["Next.js", "jsPDF", "LocalStorage", "Resume Builder"],
    },
    {
      title: "FlightTrace",
      description:
        "FlightTrace is a Next.js flight tracking app that lets users monitor flights in real-time. It supports searching by flight number, destination, or airline, showing departure/arrival times, status, and gate info. It features a responsive dashboard with filters, a Mapbox flight path map, and a favorites system using LocalStorage. The app offers fast loading with smooth animations for a better user experience.",
      image: FlightTrace,
      url: "https://flight-trace.vercel.app/",
      code: "https://github.com/EL-KADI/FlightTrace",
      tags: [
        "Next.js",
        "aviationstack API",
        "Mapbox",
        "LocalStorage",
        "Flight Tracking",
        "Real-Time Data",
      ],
    },
    {
      title: "SlimCode",
      description:
        "SlimCode is a front-end code minification tool built with Next.js and Tailwind CSS. It enables users to minify HTML, CSS, JSON, JavaScript, and JSX files instantly through file upload or manual code input. The platform features real-time validation, file type detection, size statistics, and client-side processing for security. Users can copy minified code to clipboard or download optimized files with proper naming conventions, all without server uploads.",
      image: SlimCode,
      url: "https://slim-code.vercel.app/",
      code: "https://github.com/EL-KADI/SlimCode",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Code Minification",
        "File Processing",
        "shadcn/ui",
      ],
    },
    {
      title: "Chartify",
      description:
        "Chartify is a web app built with Next.js for creating interactive bar, line, and pie charts. It features a simple interface, smooth Chart.js animations, and options to export charts as PNG or JSON. The app includes local storage, server-side rendering, and ARIA labels for accessibility. Optimized for all devices, Chartify offers an engaging visualization experience.",
      image: Chartify,
      url: "https://chartify-rouge.vercel.app/",
      code: "https://github.com/EL-KADI/Chartify",
      tags: [
        "Next.js",
        "Chart.js",
        "Data Visualization",
        "Animations",
        "Accessibility",
      ],
    },
    {
      title: "BalanceBeam",
      description:
        "BalanceBeam is a financial planning app built with Next.js that helps users manage budgets and analyze finances. It features real-time validation, animated Chart.js visuals, theme customization, and CSV import/export. Includes LocalStorage for favorites, responsive sidebar, ARIA support, and toast error handling—optimized for all devices with modern React and SSR.",
      image: BalanceBeam,
      url: "https://balance-beam.vercel.app/",
      code: "https://github.com/EL-KADI/BalanceBeam",
      tags: [
        "Next.js",
        "Chart.js",
        "Financial Planning",
        "Budget Tracker",
        "PDF Export",
        "CSV Import",
        "Tailwind CSS",
      ],
    },
    {
      title: "Sweatly",
      description:
        "Sweatly is a modern fitness web app built with Next.js, offering personalized workout plans, real-time guidance, calorie tracking, detailed progress charts, and motivational features. It supports dark/light mode, music, notifications, and offline use. Built with Zustand and Framer Motion, it's fast, responsive, accessible, and mobile-friendly.",
      image: Sweatly,
      url: "https://sweatly.vercel.app/",
      code: "https://github.com/EL-KADI/Sweatly",
      tags: [
        "Next.js",
        "Workout Planner",
        "Framer Motion",
        "Recharts",
        "Zustand",
        "Tailwind CSS",
        "Calorie Tracking",
      ],
    },
    {
      title: "Typix",
      description:
        "Typix is a typing test app built with Next.js to improve speed and accuracy. It offers timed tests, WPM tracking, and themes like quotes and code. Supports multiple languages. Users can view progress with charts, store data locally, and enjoy responsive, accessible design. Built with TypeScript, Tailwind CSS, and dark mode.",
      image: Typix,
      url: "https://typix-seven.vercel.app/",
      code: "https://github.com/EL-KADI/Typix",
      tags: [
        "Next.js",
        "Typing Test",
        "WPM Calculator",
        "Chart.js",
        "Progress Tracking",
        "Multilingual",
        "Tailwind CSS",
      ],
    },
    {
      title: "CrossCraft",
      description:
        "CrossCraft is an interactive Next.js web app for creating and solving custom crossword puzzles. It features an easy clue input, responsive grid generation, fun animations, and supports saving puzzles as PNG or JSON. With secure local storage, server-side rendering for speed, and ARIA support for accessibility, it works smoothly across all devices.",
      image: CrossCraft,
      url: "https://cross-craft.vercel.app/",
      code: "https://github.com/EL-KADI/CrossCraft",
      tags: [
        "Next.js",
        "Chart.js",
        "Canvas API",
        "Crossword Puzzle",
        "Animations",
        "Accessibility",
      ],
    },
    {
      title: "Utilix",
      description:
        "Utilix is a productivity suite built with Next.js, offering five tools: QR Generator, Password Generator, Base64 Encoder/Decoder, Text Diff Tool, and Word Counter. It supports Arabic, English, theme switching, and saves data locally. With smooth animations and client-side performance, Utilix works offline and provides a fast experience.",
      image: Utilix,
      url: "https://utilix-eight.vercel.app/",
      code: "https://github.com/EL-KADI/Utilix",
      tags: [
        "Next.js",
        "Productivity Tools",
        "QR Generator",
        "Password Generator",
        "Base64 Encoder",
        "Text Diff",
        "Word Counter",
        "Framer Motion",
        "Tailwind CSS",
        "RTL Support",
      ],
    },
    {
      title: "Reactly",
      description:
        "Reactly is an EQ training platform built with Next.js that helps users improve emotional and social skills through story-based scenarios. It features 30 real-life situations, instant feedback, EQ scoring, and progress tracking via LocalStorage. With smooth animations, accessibility, and responsive design, Reactly offers an engaging, practical learning experience.",
      image: Reactly,
      url: "https://reactly-zeta.vercel.app/",
      code: "https://github.com/EL-KADI/Reactly",
      tags: [
        "Next.js",
        "Emotional Intelligence",
        "EQ Training",
        "Social Skills",
        "Tailwind CSS",
      ],
    },
    {
      title: "PlayStats",
      description:
        "PlayStats is a Next.js sports simulation platform offering live scores, stats, and standings with real-time updates. It features team profiles, player stats, and match histories, plus charts and tables for clear data display. Built with server-side rendering and reusable components, it delivers a fast, scalable, and responsive experience on any device.",
      image: PlayStats,
      url: "https://play-stats-orcin.vercel.app/",
      code: "https://github.com/EL-KADI/PlayStats",
      tags: [
        "Next.js",
        "Sports Simulation",
        "TheSportsDB API",
        "Interactive UI",
        "Responsive Design",
        "Data Visualization",
      ],
    },
    {
      title: "SoundVoyage",
      description:
        "SoundVoyage is an interactive platform built with Next.js and Tailwind CSS to explore traditional musical instruments from various cultures. Users can select countries through an interactive map, listen to instrument sounds, read stories, and save their favorites. The responsive interface includes a map, a favorites page, educational content, dark mode, and Framer Motion animations.",
      image: SoundVoyage,
      url: "https://sound-voyage.vercel.app/",
      code: "https://github.com/EL-KADI/SoundVoyage",
      tags: ["Next.js", "Tailwind CSS", "Music", "Culture"],
    },
    {
      title: "LexisLore",
      description:
        "LexisLore is an interactive platform built with Next.js, Tailwind CSS, and Swiper.js to teach rare heritage words from various languages. Users select languages, view words with meanings, stories, and Web Speech API pronunciation, and save favorites. The responsive interface includes a language selector, word card slider, favorites page, along with dark mode and Framer Motion animations.",
      image: LexisLore,
      url: "https://lexis-lore.vercel.app/",
      code: "https://github.com/EL-KADI/LexisLore",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Swiper.js",
        "Random Word API",
        "Web Speech API",
        "Language",
        "Education",
      ],
    },
    {
      title: "OceanForge",
      description:
        "This project is a fully interactive wave visualization application with real-time controls and a challenge system. It allows users to design and customize mesmerizing ocean waves with adjustable parameters like speed, height, and frequency. Users can save their designs and choose from various stunning backgrounds. The app features a responsive design with smooth animations and local storage for persistence.",
      image: OceanForge,
      url: "https://ocean-forge.vercel.app/",
      code: "https://github.com/EL-KADI/OceanForge",
      tags: [
        "Next.js",
        "Canvas Animation",
        "Framer Motion",
        "Wave Physics",
        "Local Storage",
        "Tailwind CSS",
      ],
    },
    {
      title: "Moodora",
      description:
        "Moodora is a sleek productivity and well-being app built with Next.js. It streamlines routines with an elegant interface, daily quotes (ZenQuotes API), real-time weather (OpenWeatherMap), and a task manager with priorities. Includes a mood tracker using HTML5 Canvas, CSS Grid calendar, smooth animations, offline support via LocalStorage, and ARIA accessibility. Built with modern React, SSR, and responsive design.",
      image: Moodora,
      url: "https://moodora-pied.vercel.app/",
      code: "https://github.com/EL-KADI/Moodora",
      tags: [
        "Next.js",
        "ZenQuotes API",
        "OpenWeatherMap API",
        "Mood Tracker",
        "Task Management",
        "Calendar",
        "Tailwind CSS",
      ],
    },
    {
      title: "Spark",
      description:
        "Spark is a news aggregation platform built with Next.Js and Tailwind CSS. It enables users to access real-time news from global and Arabic sources, such as Al Jazeera and BBC Arabic, using the NewsAPI. The platform offers a sleek, user-friendly interface to browse, search, and filter news articles by topics like technology, politics, or sports, with support for Arabic and English content.",
      image: spark,
      url: "https://spark-theta-five.vercel.app/",
      code: "https://github.com/EL-KADI/Spark",
      tags: ["Next.Js", "Tailwind CSS", "NewsAPI", "Real-time Data"],
    },
    {
      title: "MovieNest",
      description:
        "This project is a fully responsive movie rating website built with React and Tailwind CSS. It showcases top-rated and lowest-rated films using real-time data from APIs. Users can explore trending movies, read brief reviews, and view ratings visually. The interface is clean and intuitive, ensuring fast performance and seamless browsing. It offers a fun and informative way to discover and compare films.",
      image: MovieNest,
      url: "https://movie-nest-ten.vercel.app/",
      code: "https://github.com/EL-KADI/MovieNest",
      tags: ["React", "Tailwind CSS", "Movies", "API Integration", "Ratings"],
    },
    {
      title: "GamePlex",
      description:
        "This project is a web page showcasing a collection of games with a 3D-designed interface. It includes a login and registration system, allowing users to create accounts and access personalized content. The immersive 3D design enhances the user experience.",
      image: GamePlex,
      url: "https://gameplex-theta.vercel.app/",
      code: "https://github.com/EL-KADI/GamePlex",
      tags: [
        "React",
        "3D Design",
        "Games",
        "Authentication",
        "User Experience",
      ],
    },
    {
      title: "ScentJourney",
      description:
        "ScentJourney is an interactive educational platform for exploring traditional perfumes from around the world, built with Next.js, Tailwind CSS, and Framer Motion. It features an interactive map for region selection, detailed perfume cards with cultural stories, and an Unsplash API integration for rich imagery. The responsive interface includes a favorites system with Local Storage persistence, a learning section with cultural articles, and a seamless dark/light mode toggle with smooth transitions.",
      image: ScentJourney,
      url: "https://scent-journey-woad.vercel.app/",
      code: "https://github.com/EL-KADI/ScentJourney",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Unsplash API",
        "Interactive Map",
        "Cultural Education",
      ],
    },
    {
      title: "Medical Point",
      description:
        "Medical Point is a bilingual medical data management platform built with Next.js. It streamlines patient and medication tracking using barcode technology across hospital, pharmacy, and attendance modules. Features include real-time inventory updates, bilingual support (English/Arabic) with RTL layout, advanced search, professional printing, and instant notifications.",
      image: MedicalPoint,
      url: "https://medical-point-weld.vercel.app/",
      code: "https://github.com/EL-KADI/Medical-Point",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Medical Management",
        "Barcode",
        "Bilingual Support",
      ],
    },
    {
      title: "GoVents",
      description:
        "GoVents is an event discovery platform built with React, Tailwind CSS, and Axios. It allows users to explore local events like concerts, exhibitions, and festivals using the Ticketmaster Discovery API. The platform provides a responsive, English-only interface to browse all available events by default, search by city or event type (e.g., Music, Sports), and filter by date or cost. Users can save favorites, ensuring a seamless experience.",
      image: GoVents,
      url: "https://govents.vercel.app/",
      code: "https://github.com/EL-KADI/GoVents",
      tags: [
        "React",
        "Tailwind CSS",
        "Axios",
        "Ticketmaster API",
        "Event Discovery",
      ],
    },
    {
      title: "Wander",
      description:
        "Wander is a virtual forest exploration app built with Next.js. It offers an interactive Mapbox forest map with regions like Misty Lake and Ancient Grove. Each area shows detailed species information with high-quality images, scientific data, and conservation status using a mock iNaturalist API. Users can explore diverse plants and animals through interactive carousels and save their favorite species and regions locally for easy access.",
      image: Wander,
      url: "https://wander-smoky.vercel.app/",
      code: "https://github.com/EL-KADI/Wander",
      tags: [
        "Next.js",
        "Mapbox Integration",
        "iNaturalist API",
        "Framer Motion",
        "Educational Platform",
        "Nature Discovery",
      ],
    },
    {
      title: "DreamGarden",
      description:
        "DreamGarden is an interactive virtual plant garden design platform built with Next.js, Tailwind CSS, Three.js, and React-Beautiful-DnD. It enables users to create personalized garden layouts by selecting and arranging plants through a drag-and-drop interface. The platform offers a responsive interface with design export options as images or PDFs. Users can save designs to Local Storage and toggle dark mode for an immersive experience.",
      image: DreamGarden,
      url: "https://dream-garden-wheat.vercel.app/",
      code: "https://github.com/EL-KADI/Dream-Garden",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Three.js",
        "React-Beautiful-DnD",
        "Trefle API",
        "OpenWeatherMap API",
        "Plant Design",
        "Interactive",
      ],
    },
    {
      title: "Volcano",
      description:
        "Volcano is an interactive volcano exploration platform built with Next.js. It lets users explore a dynamic world map with real-time geological data, view detailed volcano profiles with eruption history and geological features, and enjoy rich animations like smoke and lava effects. Users can also save favorite volcanoes using persistent localStorage for a personalized experience and access detailed scientific insights.",
      image: Volcano,
      url: "https://volcano-delta.vercel.app/",
      code: "https://github.com/EL-KADI/Volcano",
      tags: [
        "Next.js",
        "USGS Volcano API",
        "Geological Data",
        "Educational Platform",
        "CSS Animations",
        "LocalStorage",
      ],
    },
    {
      title: "ClinicHub",
      description:
        "ClinicHub is a bilingual medical system built with React to help healthcare facilities manage patients, medications, appointments, and staff. It uses barcode technology for accurate tracking and offers real-time inventory updates. The system supports English and Arabic with RTL layout, provides advanced search, secure local storage, printing, and notifications to improve workflow and ensure quality care.",
      image: ClinicHub,
      url: "https://clinic-hub-henna.vercel.app/",
      code: "https://github.com/EL-KADI/ClinicHub",
      tags: [
        "React",
        "Tailwind CSS",
        "Medical Management",
        "Barcode",
        "Healthcare System",
      ],
    },
    {
      title: "Dozyly",
      description:
        "Dozyly is a smart, responsive sleep tracking platform built with Next.js. It helps users log sleep times, rate quality, and view trends through interactive charts. The app offers personalized wellness tips based on sleep patterns, supports offline use with LocalStorage, and includes smooth animations, helpful toast notifications, full accessibility, and modern design optimized for all devices.",
      image: Dozyly,
      url: "https://dozyly.vercel.app/",
      code: "https://github.com/EL-KADI/Dozyly",
      tags: [
        "Next.js",
        "Chart.js",
        "Sleep Tracking",
        "Health Analytics",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Shelfy",
      description:
        "Shelfy is a book tracking app built with Next.js. It helps users manage their reading with a Goodreads-style interface. Users can track books in categories (Read, Reading, To-Read), rate them, and monitor progress. Features include reviews, filtering, LocalStorage sync, responsive design, and accessibility support. Built with React, TypeScript, and Radix UI, it offers a mobile-friendly experience with offline support.",
      image: Shelfy,
      url: "https://shelfy-seven.vercel.app",
      code: "https://github.com/EL-KADI/Shelfy",
      tags: [
        "Next.js",
        "TypeScript",
        "Radix UI",
        "Tailwind CSS",
        "Personal Library",
      ],
    },
    {
      title: "DR. Abdullah Clinic System",
      description:
        "Dr. Abdullah's Clinic is a patient management dashboard built with React and Tailwind CSS. It offers secure local storage-based authentication without APIs, providing login, registration, and patient management. Users can add treatment plans, appointments, and surgical cases. The dashboard displays patient details, medical history, and upcoming appointments, ensuring efficient clinic management.",
      image: abdullahclinicsystem,
      url: "https://abdullah-clinic-system.vercel.app/#/",
      code: "https://github.com/EL-KADI/Abdullah-Clinic-System",
      tags: [
        "React",
        "Tailwind CSS",
        "Healthcare",
        "Dashboard",
        "Local Storage",
      ],
    },
    {
      title: "JobTrail",
      description:
        "JobTrail is a job tracking platform built with Next.js to help users manage their job search. It includes a tracker with validation, sortable tables, and status management. Users can view trends with Chart.js. The app integrates Adzuna API for job listings with filters. Features include CSV export, LocalStorage, mobile navigation, and ARIA accessibility. Built with React, TypeScript, and Tailwind CSS.",
      image: JobTrail,
      url: "https://job-trail-iota.vercel.app/",
      code: "https://github.com/EL-KADI/JobTrail",
      tags: [
        "Next.js",
        "Chart.js",
        "Adzuna API",
        "CSV Export",
        "Tailwind CSS",
        "shadcn/ui",
        "Job Search",
        "Real-time API",
      ],
    },
    {
      title: "MedCare Pro",
      description:
        "MedCare Pro is a bilingual medical management platform built with React. It tracks patients and medications using barcode technology, offers real-time inventory updates, appointment scheduling, and staff management. The system includes advanced reports with interactive charts, bilingual support (English/Arabic) with RTL layout, and features like secure local storage and professional printing.",
      image: MedCarePro,
      url: "https://med-care-pro.vercel.app/",
      code: "https://github.com/EL-KADI/MedCarePro",
      tags: [
        "React",
        "Tailwind CSS",
        "Medical Management",
        "Reports",
        "Charts",
      ],
    },
    {
      title: "NoteApp",
      description:
        "This project is a fully responsive note-taking app built with React and Tailwind CSS. It features user authentication with login and registration, and allows users to create, edit, and delete notes. Notes are stored using both local storage and external APIs to ensure data persistence and accessibility. The app offers a clean, intuitive design and smooth performance, making it ideal for organizing tasks and ideas efficiently.",
      image: NoteApp,
      url: "https://note-app-el-kadis-projects.vercel.app/",
      code: "https://github.com/EL-KADI/NoteApp/",
      tags: [
        "React",
        "CRUD",
        "Local Storage",
        "API Integration",
        "Task Management",
      ],
    },
    {
      title: "MassioHealth",
      description:
        "MassioHealth is a Body Mass Index (BMI) calculator designed to help users easily calculate and understand their BMI. Users can input their weight in kilograms and height in meters to instantly calculate their BMI and view the corresponding health category. It supports real-time feedback and offers a clean, responsive interface for an optimal user experience across all devices. The application is built using the Next.js framework.",
      image: MassioHealth,
      url: "https://massio-health.vercel.app/",
      code: "https://github.com/EL-KADI/MassioHealth",
      tags: ["Next.js", "BMI Calculator", "Responsive Design"],
    },
    {
      title: "CALC",
      description:
        "This Calculator is a modern web application for complex computations, built with Next.js and Tailwind CSS. It includes scientific functions like trigonometry, logarithms, and powers, with memory operations. The interface supports mouse and keyboard input. With its sleek design and dark/light mode, it delivers accurate results for students and professionals on any device.",
      image: Calc,
      url: "https://calc-gamma-sepia.vercel.app/",
      code: "https://github.com/EL-KADI/CALC",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Scientific Calculator",
        "Mathematics",
        "Dark Mode",
        "Keyboard Support",
      ],
    },
    {
      title: "FoodDex",
      description:
        "This project is a web page showcasing various dishes with their recipes and calorie counts. Built using SASS, it offers a visually appealing interface. Users can explore meals, learn preparation methods, and track nutritional value effortlessly. It also includes a responsive design, smooth transitions, search functionality, and a categorized layout to enhance user experience across all devices.",
      image: FoodDex,
      url: "https://fooddex.vercel.app/",
      code: "https://github.com/EL-KADI/FoodDex",
      tags: ["React", "SASS", "Food", "Recipes", "Nutrition"],
    },
    {
      title: "Material Kit 2",
      description:
        "This project is a web application featuring a Login Page and Home Page. It dynamically fetches content from APIs, showcasing popular games, news updates, inspirational quotes, and jokes. The app delivers a seamless user experience with a clean design.",
      image: MaterialKit2,
      url: "https://el-kadi.github.io/Material-Kit-2/#/register",
      code: "https://github.com/EL-KADI/Material-Kit-2",
      tags: [
        "React",
        "Material Design",
        "API Integration",
        "Authentication",
        "Content Aggregation",
      ],
    },
    {
      title: "Weather",
      description:
        "This project is a web application providing real-time weather updates based on your location. It also allows users to search for weather information for any country or city worldwide, offering a seamless and interactive experience.",
      image: Weather,
      url: "https://weather-beta-flame.vercel.app/",
      code: "https://github.com/EL-KADI/Weather",
      tags: [
        "JavaScript",
        "Weather API",
        "Geolocation",
        "Responsive",
        "Search Functionality",
      ],
    },
    {
      title: "Games",
      description:
        "This project is a web application offering a variety of games sourced from a dedicated API. Users can explore and enjoy different games in an easy-to-navigate interface, providing a fun and engaging experience for game enthusiasts.",
      image: Games,
      url: "https://gameson-theta.vercel.app/",
      code: "https://github.com/EL-KADI/Games",
      tags: [
        "JavaScript",
        "API Integration",
        "Games",
        "Responsive",
        "Entertainment",
      ],
    },
    {
      title: "Daniels",
      description:
        "This project is a single-page website providing a comprehensive overview. It includes sections for personal details, services, previous work, client feedback, team information, and communication, all structured to enhance user engagement.",
      image: Daniels,
      url: "https://daniels-tau-fawn.vercel.app/",
      code: "https://github.com/EL-KADI/master-tow",
      tags: ["HTML", "CSS", "Portfolio", "Single-page Application"],
    },
    {
      title: "DevFolio",
      description:
        "This web page serves as a training project, featuring a Portfolio Section, Blog Section, Get in Touch Section, and About Section. The design is clean and user-friendly, ensuring a smooth browsing experience for showcasing work and sharing updates.",
      image: DevFolio,
      url: "https://devfolio-five-xi.vercel.app/",
      code: "https://github.com/EL-KADI/DevFolio",
      tags: ["HTML", "CSS", "Portfolio", "Blog"],
    },
    {
      title: "Start Framework",
      description:
        "This project is a simple web page showcasing a Portfolio, About section, and Contact form. The layout is clean and minimalistic, focusing on presenting essential information in a straightforward and user-friendly manner.",
      image: StartFramework,
      url: "https://el-kadi.github.io/Start-Framework/",
      code: "https://github.com/EL-KADI/Start-Framework",
      tags: ["React", "Portfolio", "Contact Form"],
    },
    {
      title: "Random Quote Generator",
      description:
        "This project is a web page displaying a random quote, advice, or saying when the user clicks a button. The interface is simple and user-friendly, ensuring an enjoyable experience with every click for daily inspiration.",
      image: RandomQuoteGenerator,
      url: "https://quote-generator-ten-alpha.vercel.app/",
      code: "https://github.com/EL-KADI/-Random-Quote-Generator.",
      tags: [
        "JavaScript",
        "Quotes API",
        "Inspiration",
        "Interactive",
        "Simple UI",
      ],
    },
    {
      title: "Bookmark",
      description:
        "This project is a web page allowing users to add the name and link of any page they wish to save. It offers options to visit or delete saved links, with a simple and user-friendly interface for easy bookmark management.",
      image: Bookmark,
      url: "https://bookmark-khaki-one.vercel.app/",
      code: "https://github.com/EL-KADI/Bookmark-Name",
      tags: [
        "JavaScript",
        "Local Storage",
        "Bookmarking",
        "CRUD Operations",
        "Utility Tool",
      ],
    },
    {
      title: "Smart Login System",
      description:
        "This project is a simple web page for user registration and login. It includes a Sign Up form for new users and a Login form for existing users, designed to be clean and functional for a straightforward authentication experience.",
      image: SmartLoginSystem,
      url: "https://smart-login-gamma.vercel.app/",
      code: "https://github.com/EL-KADI/Smart-Login",
      tags: [
        "JavaScript",
        "Authentication",
        "Forms",
        "User Management",
        "Local Storage",
      ],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (allProjectsRef.current) {
      const elementPosition = allProjectsRef.current.offsetTop - 120;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  interface PaginationControlsProps {
    startIndex: number;
    endIndex: number;
    totalProjects: number;
  }

  const PaginationControls = ({
    startIndex,
    endIndex,
    totalProjects,
  }: PaginationControlsProps) => {
    const pageNumbers = renderPageNumbers();

    const renderPaginationRows = () => {
      return (
        <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
          {pageNumbers.map((page, index) => (
            <Button
              key={`page-${page}`}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page as number)}
              className={
                currentPage === page
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : ""
              }
            >
              {page}
            </Button>
          ))}
        </div>
      );
    };

    return (
      <div className="flex flex-col items-center justify-center gap-4 my-8">
        <div className="text-center text-gray-600 dark:text-gray-300 mb-4">
          <p className="text-sm">
            Showing projects {startIndex + 1} to{" "}
            {Math.min(endIndex, totalProjects)} of {totalProjects} total
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {renderPaginationRows()}
      </div>
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project
          demonstrates different skills and technologies.
        </p>
      </motion.div>

      <Tabs defaultValue="featured" className="mb-12">
        <TabsList className="mx-auto flex justify-center mb-8 dark:bg-[#0e1422]">
          <TabsTrigger
            value="featured"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
          >
            Featured Projects
          </TabsTrigger>
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white"
          >
            All Projects
          </TabsTrigger>
        </TabsList>

        <TabsContent value="featured">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover object-center transition-transform hover:scale-110 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <h3 className="text-white font-bold text-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="relative flex flex-col flex-grow">
                      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/5 to-purple-600/5" />
                        <div className="relative h-full w-full">
                          <Meteors number={5} />
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-y-auto max-h-80 md:max-h-40 lg:max-h-80 xl:max-h-52 2xl:max-h-80">
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tags &&
                            project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between pt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900 bg-transparent"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View
                          </Button>
                        </a>
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900 bg-transparent"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      </CardFooter>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="all">
          <div ref={allProjectsRef}>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.div key={`${currentPage}-${index}`} variants={item}>
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                    }}
                    className="h-full"
                  >
                    <Card className="h-full flex flex-col border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                      <div className="relative h-72 w-full overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover object-center transition-transform hover:scale-110 duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <h3 className="text-white font-bold text-lg">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <div className="relative flex flex-col flex-grow">
                        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/5 to-purple-600/5" />
                          <div className="relative h-full w-full">
                            <Meteors number={5} />
                          </div>
                        </div>

                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow overflow-y-auto max-h-80 md:max-h-40 lg:max-h-80 xl:max-h-52 2xl:max-h-80">
                          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-auto">
                            {project.tags?.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs px-2 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900 bg-transparent"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View
                            </Button>
                          </a>
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900 bg-transparent"
                            >
                              <Github className="h-4 w-4" />
                              Code
                            </Button>
                          </a>
                        </CardFooter>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <PaginationControls
            startIndex={startIndex}
            endIndex={endIndex}
            totalProjects={projects.length}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
