"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float, Html } from "@react-three/drei"
import type { Group } from "three"

interface ProjectsShowcaseProps {
  position: [number, number, number]
  scale: number
}

export default function ProjectsShowcase({ position, scale }: ProjectsShowcaseProps) {
  const showcaseRef = useRef<Group>(null)

  const projects = [
    {
      title: "Yonna (Social App)",
      description:
        "A fully responsive social media platform built with Next.js and MUI. Features user authentication, dynamic Home Feed, and interactive user profiles.",
      color: "#ff7675",
      position: [-4, 0, 0],
      url: "https://yonna.vercel.app/signin",
      code: "https://github.com/EL-KADI/Yonna",
    },
    {
      title: "FreshCart (E-Commerce)",
      description:
        "A fully integrated e-commerce website with Login and Home Page. Dynamically fetches content from APIs, offering products, deals, and discounts.",
      color: "#74b9ff",
      position: [-2, 0, 2],
      url: "https://fresh-cart-virid-beta.vercel.app/",
      code: "https://github.com/EL-KADI/FreshCart-E-commerce-App",
    },
    {
      title: "Nasaeh Gedety",
      description:
        "An Arab heritage platform with 49 categories of traditional tips and folk recipes. Users can submit their own tips, celebrating Egyptian, Gulf, and Levantine traditions.",
      color: "#55efc4",
      position: [0, 0, 3],
      url: "https://nasaehgedety.vercel.app/",
      code: "https://github.com/EL-KADI/Nasaeh-Gedety",
    },
    {
      title: "Digital Card Creator",
      description:
        "A platform for creating custom digital cards such as greeting cards, invitations, and business cards with flexible customization options.",
      color: "#a29bfe",
      position: [2, 0, 2],
      url: "https://digital-card-creator-nine.vercel.app",
      code: "https://github.com/EL-KADI/Digital-Card-Creator",
    },
    {
      title: "VideoQuest",
      description:
        "An interactive app for exploring educational videos with modern UI, dark mode, advanced dashboard, favorites list, and video playback.",
      color: "#ffeaa7",
      position: [4, 0, 0],
      url: "https://video-quest.vercel.app/",
      code: "https://github.com/EL-KADI/VideoQuest",
    },
    {
      title: "Podcast Finder",
      description: "An app to search and explore podcast information with featured podcasts section and modern UI.",
      color: "#fab1a0",
      position: [2, 0, -2],
      url: "https://podcast-finder-seven.vercel.app/",
      code: "https://github.com/EL-KADI/Podcast-Finder",
    },
    {
      title: "AuddTune",
      description:
        "A song recognition platform that identifies songs by recording audio or uploading files using the audd.io API.",
      color: "#81ecec",
      position: [0, 0, -3],
      url: "https://auddtune.vercel.app/",
      code: "https://github.com/EL-KADI/AuddTune",
    },
    {
      title: "DR. Abdullah Clinic System",
      description:
        "A patient management dashboard with authentication, treatment plans, appointments, and surgical cases management.",
      color: "#fd79a8",
      position: [-2, 0, -2],
      url: "https://abdullah-clinic-system.vercel.app/#/",
      code: "https://github.com/EL-KADI/Abdullah-Clinic-System",
    },
    {
      title: "MovieNest",
      description:
        "A responsive movie rating website showcasing top-rated and lowest-rated films using real-time data from APIs.",
      color: "#e84393",
      position: [-3, 0, -1],
      url: "https://movie-nest-ten.vercel.app/",
      code: "https://github.com/EL-KADI/MovieNest",
    },
    {
      title: "GamePlex",
      description: "A web page showcasing games with a 3D-designed interface and user authentication system.",
      color: "#00cec9",
      position: [3, 0, -1],
      url: "https://gameplex-theta.vercel.app/",
      code: "https://github.com/EL-KADI/GamePlex",
    },
  ]

  useFrame((state) => {
    if (showcaseRef.current) {
      showcaseRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group position={position} scale={scale} ref={showcaseRef}>
      <Text
        font="/fonts/Geist_Bold.json"
        position={[0, 3, 0]}
        fontSize={0.8}
        color="#fed29b"
        anchorX="center"
        anchorY="middle"
      >
        Projects
      </Text>

      {projects.map((project, index) => (
        <Float key={index} speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
          <group position={project.position}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.8, 1.2, 0.1]} />
              <meshStandardMaterial color={project.color} metalness={0.2} roughness={0.8} />
            </mesh>

            <Html transform distanceFactor={10} position={[0, 0, 0.06]} className="w-48">
              <div className="bg-black/90 p-3 rounded-md text-white">
                <h3 className="text-sm font-bold mb-1 text-center">{project.title}</h3>
                <p className="text-xs mb-2 line-clamp-3">{project.description}</p>
                <div className="flex justify-between text-xs">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    View
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  )
}
