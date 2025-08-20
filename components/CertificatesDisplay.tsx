"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float, Html } from "@react-three/drei"
import type { Group } from "three"
import type { Vector3 } from "three"

interface CertificatesDisplayProps {
  position: Vector3 | [number, number, number]
  scale: number
}

interface Certificate {
  name: string
  description: string
  color: string
  position: Vector3 | [number, number, number]
  pdf: string
}

export default function CertificatesDisplay({ position, scale }: CertificatesDisplayProps) {
  const displayRef = useRef<Group>(null)

  const certificates: Certificate[] = [
    {
      name: "Meta Certificate",
      description: "Front-End Development Certificate from Meta (Facebook)",
      color: "#0088cc",
      position: [-2, 0, 0],
      pdf: "/CV/Meta Diploma.pdf",
    },
    {
      name: "Route Certificate",
      description: "Web Development Professional Certificate from Route Academy",
      color: "#ff9900",
      position: [2, 0, 0],
      pdf: "/CV/Route Diploma.pdf",
    },
  ]

  useFrame((state) => {
    if (displayRef.current) {
      displayRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <section>
      <group position={position} scale={scale} ref={displayRef}>
        <header>
          <Text
            font="/fonts/Geist_Bold.json"
            position={[0, 3, 0]}
            fontSize={0.8}
            color="#fed29b"
            anchorX="center"
            anchorY="middle"
          >
            Certificates
          </Text>
        </header>

        {certificates.map((certificate, index) => (
          <Float key={index} speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
            <article>
              <group position={certificate.position}>
                <mesh castShadow receiveShadow>
                  <boxGeometry args={[3, 2, 0.1]} />
                  <meshStandardMaterial color={certificate.color} metalness={0.3} roughness={0.7} />
                </mesh>

                <mesh position={[0, 0, 0.06]}>
                  <planeGeometry args={[2.8, 1.8]} />
                  <meshStandardMaterial color="#ffffff" />
                </mesh>

                <Html transform distanceFactor={10} position={[0, 0, 0.12]} className="w-64">
                  <article className="bg-white/90 p-4 rounded text-center">
                    <header>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{certificate.name}</h3>
                    </header>
                    <p className="text-sm mb-3 text-gray-700">{certificate.description}</p>
                    <footer>
                      <a
                        href={certificate.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                      >
                        View Certificate
                      </a>
                    </footer>
                  </article>
                </Html>
              </group>
            </article>
          </Float>
        ))}
      </group>
    </section>
  )
}
