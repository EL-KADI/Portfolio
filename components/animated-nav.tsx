"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"

interface AnimatedNavProps {
  items: string[]
  onItemClick: (item: string) => void
  className?: string
}

export const AnimatedNav = ({ items, onItemClick, className }: AnimatedNavProps) => {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <nav>
      <motion.ul
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className="hidden sm:flex justify-center sm:space-x-8 text-sm sm:text-[16px]"
      >
        {items.map((item, index) => (
          <AnimatedNavItem
            key={item}
            item={item}
            index={index}
            mouseX={mouseX}
            onItemClick={onItemClick}
            totalItems={items.length}
          />
        ))}
      </motion.ul>

      <MobileNav items={items} onItemClick={onItemClick} />
    </nav>
  )
}

function AnimatedNavItem({
  item,
  index,
  mouseX,
  onItemClick,
  totalItems,
}: {
  item: string
  index: number
  mouseX: any
  onItemClick: (item: string) => void
  totalItems: number
}) {
  const ref = useRef<HTMLLIElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return (val as number) - bounds.x - bounds.width / 2
  })

  const yTransform = useTransform(distance, [-200, 0, 200], [0, -12, 0])
  const scaleTransform = useTransform(distance, [-200, 0, 200], [1, 1.15, 1])
  const rotateTransform = useTransform(distance, [-200, 0, 200], [-3, 0, 3])

  const y = useSpring(yTransform, { stiffness: 300, damping: 30 })
  const scale = useSpring(scaleTransform, { stiffness: 300, damping: 30 })
  const rotate = useSpring(rotateTransform, { stiffness: 300, damping: 30 })

  const gradientColors = [
    "from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400",
    "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400",
    "from-blue-400 to-purple-600 dark:from-blue-400 dark:to-indigo-400",
    "from-purple-400 to-pink-600 dark:from-violet-400 dark:to-fuchsia-400",
    "from-blue-600 to-purple-400 dark:from-teal-400 dark:to-cyan-400",
  ]

  const currentGradient = gradientColors[index % gradientColors.length]

  return (
    <motion.li ref={ref} style={{ y, scale, rotate }} className="relative">
      <motion.div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${currentGradient} opacity-0 blur-lg`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          scale: isHovered ? 1.2 : 0.8,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          filter: isHovered ? "drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))" : "none",
        }}
      />

      <motion.button
        onClick={() => onItemClick(item.toLowerCase())}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative text-gray-700 dark:text-gray-200 font-medium transition-colors group px-3 py-2 rounded-lg overflow-hidden"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${currentGradient} opacity-0`}
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${currentGradient} opacity-20`}
          initial={{ x: "-100%", skewX: -20 }}
          animate={{
            x: isHovered ? "100%" : "-100%",
            skewX: isHovered ? 20 : -20,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />

        <motion.span className={`relative z-10 ${isHovered ? "text-primary-600 dark:text-cyan-300" : ""}`}>
          {item.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              animate={{
                y: isHovered ? [0, -4, 0] : 0,
              }}
              transition={{
                duration: 0.4,
                delay: charIndex * 0.05,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>

        <motion.span
          className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${currentGradient} origin-left`}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${currentGradient}`}
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-cyan-400/10 dark:to-transparent opacity-0 rounded-lg"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 rounded-lg border border-transparent dark:border-cyan-400/30 opacity-0"
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </motion.li>
  )
}

function MobileNav({
  items,
  onItemClick,
}: {
  items: string[]
  onItemClick: (item: string) => void
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const gradientColors = [
    "from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-blue-400",
    "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400",
    "from-blue-400 to-purple-600 dark:from-blue-400 dark:to-indigo-400",
    "from-purple-400 to-pink-600 dark:from-violet-400 dark:to-fuchsia-400",
    "from-blue-600 to-purple-400 dark:from-teal-400 dark:to-cyan-400",
  ]

  return (
    <ul className="flex sm:hidden justify-center custom-media  space-x-2 text-[13px] sm:text-[16px]">
      {items.map((item, index) => (
        <motion.li key={item} className="relative">
          <motion.button
            onClick={() => {
              setActiveIndex(index)
              onItemClick(item.toLowerCase())
            }}
            className="relative text-gray-700 dark:text-gray-200 font-medium px-2 py-1 rounded-md overflow-hidden"
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              y: -2,
            }}
            animate={{
              scale: activeIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} opacity-0`}
              animate={{
                opacity: activeIndex === index ? 0.15 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    gradientColors[index % gradientColors.length]
                  } rounded-md`}
                  initial={{ scale: 1, opacity: 0.3 }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              )}
            </AnimatePresence>

            <motion.span
              className={`relative z-10 transition-colors duration-300 ${
                activeIndex === index ? "text-blue-600 dark:text-cyan-300" : "text-gray-700 dark:text-gray-200"
              }`}
            >
              {item.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  className="inline-block"
                  animate={{
                    y: activeIndex === index ? [0, -2, 0] : 0,
                    rotateX: activeIndex === index ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: charIndex * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>

            <motion.div
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r ${
                gradientColors[index % gradientColors.length]
              } origin-left`}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />

            {activeIndex === index && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-0.5 h-0.5 rounded-full bg-gradient-to-r ${
                      gradientColors[index % gradientColors.length]
                    }`}
                    initial={{
                      x: "50%",
                      y: "50%",
                      scale: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 80}%`,
                      y: `${50 + (Math.random() - 0.5) * 80}%`,
                      scale: [0, 1, 0],
                      opacity: [1, 0.6, 0],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </motion.button>
        </motion.li>
      ))}
    </ul>
  )
}
