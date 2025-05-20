"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float, Html } from "@react-three/drei"
import type { Group } from "three"

interface ContactForm3DProps {
  position: [number, number, number]
  scale: number
}

export default function ContactForm3D({ position, scale }: ContactForm3DProps) {
  const formRef = useRef<Group>(null)

  useFrame((state) => {
    if (formRef.current) {
      formRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group position={position} scale={scale} ref={formRef}>
      <Text
        font="/fonts/Geist_Bold.json"
        position={[0, 3, 0]}
        fontSize={0.8}
        color="#fed29b"
        anchorX="center"
        anchorY="middle"
      >
        Contact
      </Text>

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        <group>
          <mesh castShadow receiveShadow position={[0, 0, -0.1]}>
            <boxGeometry args={[5, 3, 0.2]} />
            <meshStandardMaterial color="#6c5ce7" metalness={0.3} roughness={0.7} />
          </mesh>

          <Html transform distanceFactor={10} position={[0, 0, 0.1]} className="w-80">
            <div className="bg-indigo-900/90 p-4 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4 text-center">Get In Touch</h3>

              <div className="flex items-center mb-3">
                <div className="bg-indigo-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span>+201098454946</span>
              </div>

              <div className="flex items-center mb-4">
                <div className="bg-indigo-700 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>sayedragheb92@gmail.com</span>
              </div>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-indigo-800 border border-indigo-600 text-white placeholder-indigo-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded bg-indigo-800 border border-indigo-600 text-white placeholder-indigo-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full p-2 rounded bg-indigo-800 border border-indigo-600 text-white placeholder-indigo-300"
                ></textarea>
                <button
                  type="button"
                  className="w-full p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded font-bold hover:from-purple-600 hover:to-indigo-700 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Html>
        </group>
      </Float>
    </group>
  )
}
