"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import type { Group } from "three"
import FloatingIsland from "./FloatingIsland"
import SkillsSphere from "./SkillsSphere"
import ProjectsShowcase from "./ProjectsShowcase"
import CertificatesDisplay from "./CertificatesDisplay"
import ContactForm3D from "./ContactForm3D"

export default function Scene() {
  const scroll = useScroll()
  const sceneRef = useRef<Group>(null)

  useFrame(() => {
    if (sceneRef.current) {
      const scrollOffset = scroll.offset
      sceneRef.current.rotation.y = scrollOffset * Math.PI * 2
      sceneRef.current.position.y = -scrollOffset * 10
    }
  })

  return (
    <group ref={sceneRef}>
      <FloatingIsland position={[0, 0, 0]} scale={1} />
      <SkillsSphere position={[0, -10, 0]} scale={1} />
      <ProjectsShowcase position={[0, -20, 0]} scale={1} />
      <CertificatesDisplay position={[0, -30, 0]} scale={1} />
      <ContactForm3D position={[0, -40, 0]} scale={1} />
    </group>
  )
}
