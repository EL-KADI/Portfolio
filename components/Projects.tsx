"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
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
import auddtuneimage from "../Images/auddtuneimage.png";
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

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Yonna (Social App)",
      description:
        "This project is a fully responsive social media platform built with Next.js and MUI. It features user authentication, a dynamic Home Feed, and interactive user profiles. Content is fetched in real-time from APIs, allowing users to post updates, like, and comment. The platform offers a clean design and smooth navigation, providing a modern and engaging user experience.",
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
        "This project is a fully integrated e-commerce website with a Login Page and Home Page. It dynamically fetches content from APIs, offering a wide range of products, deals, and discounts. Users can browse items seamlessly, enjoying a clean design and interactive interface.",
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
        "BitPulse is a financial data platform built with Next.js and Tailwind CSS. It provides real-time and historical price data for traditional currencies (e.g., USD/EGP) and cryptocurrencies (e.g., Bitcoin, Ethereum). The platform utilizes ExchangeRate-API for currency exchange rates and CoinGecko API for crypto prices, displayed through interactive Chart.js visualizations. It features a clean, responsive interface with a currency converter and time-range filters for data analysis.",
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
        "AstroVerse is an interactive space exploration platform built with Next.js, Tailwind CSS, Three.js, and GSAP. It leverages the NASA API to deliver real-time astronomical data, including the Astronomy Picture of the Day (APOD), Mars rover photos, and near-Earth object information. The platform offers a responsive, interface with a 3D planet exploration feature, a kids’ educational section with quizzes, and a space missions showcase. Users can save favorite planets or images and enjoy smooth animations for an immersive experience.",
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
      title: "EraEcho",
      description:
        "EraEcho is an interactive platform for exploring historical events, built with Next.js, Tailwind CSS, and Framer Motion. It uses the On This Day API to display events for a specific date or year on a dynamic timeline. The responsive interface offers event filtering, a random event feature, a kids’ section, and the ability to save favorites to Local Storage with smooth animations.",
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
        "InkVibe is a digital library platform built with Next.js, Tailwind CSS, and Swiper.js. It uses the Open Library API to browse and search free books by genre, language, or author. The responsive interface offers a bookshelf, reading lists, a kids’ section with quizzes, and reading stats. Users can save favorites to Local Storage and toggle dark mode.",
      image: InkVibe,
      url: "https://ink-vibe.vercel.app/",
      code: "https://github.com/EL-KADI/InkVibe",
      tags: ["Next.js", "Tailwind CSS", "Open Library API", "Digital Library"],
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
      title: "AuddTune",
      description:
        "AuddTune is a song recognition platform built with React and Tailwind CSS. It allows users to identify songs by recording audio or uploading an audio file. The platform utilizes the audd.io API for accurate song analysis. It provides an easy-to-use interface to display song information such as the artist's name, song title, and album.",
      image: auddtuneimage,
      url: "https://auddtune.vercel.app/",
      code: "https://github.com/EL-KADI/AuddTune",
      tags: ["React", "Tailwind CSS", "Audio API", "Music", "Song Recognition"],
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
      title: "FoodDex",
      description:
        "This project is a web page showcasing various dishes with their recipes and calorie counts. Built using SASS, it offers a visually appealing interface. Users can explore meals, learn preparation methods, and track nutritional value effortlessly.",
      image: FoodDex,
      url: "https://fooddex.vercel.app/",
      code: "https://github.com/EL-KADI/FoodDex",
      tags: ["HTML", "SASS", "Food", "Recipes", "Nutrition"],
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
                    rotateY: 5,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
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
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
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
                          className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900"
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
                          className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent
          value="all"
          key={showAll ? "all-expanded" : "all-collapsed"}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(showAll ? projects : projects.slice(0, 9)).map(
              (project, index) => (
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
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow overflow-y-auto max-h-80">
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
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
                            className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900"
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
                            className="gap-1 hover:bg-primary-100 dark:hover:bg-primary-900"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            )}
          </motion.div>

          {!showAll && projects.length > 9 && (
            <div className="text-center mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setShowAll(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Show All Projects ({projects.length})
                </Button>
              </motion.div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
