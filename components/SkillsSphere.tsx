"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import type { Group } from "three";

interface SkillsSphereProps {
  position: [number, number, number];
  scale: number;
}

export default function SkillsSphere({ position, scale }: SkillsSphereProps) {
  const sphereRef = useRef<Group>(null);

  const skills = [
    { name: "HTML", color: "#E34F26", position: [0, 2, 0] as [number, number, number] },
    { name: "CSS", color: "#1572B6", position: [2, 0, 0] as [number, number, number] },
    { name: "JavaScript", color: "#F7DF1E", position: [0, -2, 0] as [number, number, number] },
    { name: "React", color: "#61DAFB", position: [-2, 0, 0] as [number, number, number] },
    { name: "Next.js", color: "#000000", position: [1.5, 1.5, 0] as [number, number, number] },
    { name: "TypeScript", color: "#3178C6", position: [-1.5, 1.5, 0] as [number, number, number] },
    { name: "Tailwind", color: "#06B6D4", position: [-1.5, -1.5, 0] as [number, number, number] },
    { name: "Bootstrap", color: "#7952B3", position: [1.5, -1.5, 0] as [number, number, number] },
    { name: "SASS", color: "#CC6699", position: [0, 0, 2] as [number, number, number] },
    { name: "GitHub", color: "#181717", position: [0, 0, -2] as [number, number, number] },
    { name: "MUI", color: "#007FFF", position: [1, 0, 1.5] as [number, number, number] },
    { name: "jQuery", color: "#0769AD", position: [-1, 0, 1.5] as [number, number, number] },
    { name: "npm", color: "#CB3837", position: [1, 0, -1.5] as [number, number, number] },
    { name: "Flowbite", color: "#38BDF8", position: [-1, 0, -1.5] as [number, number, number] },
  ];

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group position={position} scale={scale} ref={sphereRef}>
      <mesh castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#8e44ad"
          metalness={0.3}
          roughness={0.7}
          emissive="#8e44ad"
          emissiveIntensity={0.2}
        />
      </mesh>

      <Text
        font="/fonts/Geist_Bold.json"
        position={[0, 3, 0]}
        fontSize={0.8}
        color="#fed29b"
        anchorX="center"
        anchorY="middle"
      >
        Skills
      </Text>

      {skills.map((skill, index) => (
        <Float key={index} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <group position={skill.position}>
            <mesh castShadow>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
              <meshStandardMaterial color={skill.color} metalness={0.5} roughness={0.5} />
            </mesh>
            <Text
              font="/fonts/Geist_Regular.json"
              position={[0, 0, 0.5]}
              fontSize={0.2}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}