"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {}, 500)

      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 via-indigo-800 to-blue-900 z-50">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <header>
          <h1 className="text-4xl font-bold text-white mb-4">Sayed Ragheb</h1>
          <p className="text-xl text-gray-300 mb-8">Front End Developer Portfolio</p>
        </header>

        <section className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </section>

        <footer>
          <p className="mt-2 text-gray-400">{Math.round(progress)}% Loading...</p>
        </footer>
      </motion.section>
    </main>
  )
}
