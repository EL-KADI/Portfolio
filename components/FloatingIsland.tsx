"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float, Html } from "@react-three/drei"
import type { Group } from "three"

interface FloatingIslandProps {
  position: [number, number, number]
  scale: number
}

export default function FloatingIsland({ position, scale }: FloatingIslandProps) {
  const islandRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (islandRef.current) {
      islandRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group position={position} scale={scale} ref={islandRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh
          position={[0, -1, 0]}
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <cylinderGeometry args={[3, 3.5, 1, 32]} />
          <meshStandardMaterial color={hovered ? "#9c88ff" : "#8c7ae6"} metalness={0.2} roughness={0.8} />
        </mesh>

        <group position={[0, 0.5, 0]}>
          <Text
            font="/fonts/Geist_Bold.json"
            position={[0, 1, 0]}
            fontSize={0.8}
            color="#fed29b"
            anchorX="center"
            anchorY="middle"
          >
            Sayed Ragheb
          </Text>
          <Text
            font="/fonts/Geist_Regular.json"
            position={[0, 0.3, 0]}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            Front End Developer
          </Text>
          <Text
            font="/fonts/Geist_Regular.json"
            position={[0, -0.3, 0]}
            fontSize={0.25}
            color="#e1e1e1"
            anchorX="center"
            anchorY="middle"
          >
            I design exceptional and innovative websites
          </Text>
        </group>

        <Html transform position={[0, -2.5, 0]} scale={0.15} className="pointer-events-none">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500">
            <img src="/images/profile.png" alt="Sayed Ragheb" className="w-full h-full object-cover" />
          </div>
        </Html>

        <group position={[0, -0.5, 0]}>
          <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh position={[-1.5, 0, 0]} castShadow>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#4267B2" />
            </mesh>
            <Text
              font="/fonts/Geist_Regular.json"
              position={[-1.5, -0.4, 0]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              Facebook
            </Text>
          </Float>

          <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh position={[-0.5, 0, 0]} castShadow>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#E1306C" />
            </mesh>
            <Text
              font="/fonts/Geist_Regular.json"
              position={[-0.5, -0.4, 0]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              Instagram
            </Text>
          </Float>

          <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh position={[0.5, 0, 0]} castShadow>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#0077B5" />
            </mesh>
            <Text
              font="/fonts/Geist_Regular.json"
              position={[0.5, -0.4, 0]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              LinkedIn
            </Text>
          </Float>

          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
            <mesh position={[1.5, 0, 0]} castShadow>
              <boxGeometry args={[0.4, 0.4, 0.4]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
            <Text
              font="/fonts/Geist_Regular.json"
              position={[1.5, -0.4, 0]}
              fontSize={0.15}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              GitHub
            </Text>
          </Float>
        </group>
      </Float>
    </group>
  )
}
