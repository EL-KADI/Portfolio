"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

declare global {
  interface Window {
    emailjs?: any
  }
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, Check, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [buttonState, setButtonState] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) {
      setErrorMessage("")
      setButtonState("idle")
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setButtonState("sending")
    setErrorMessage("")

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (name.length < 3) {
      setButtonState("error")
      setErrorMessage("Name must be at least 3 characters long")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setButtonState("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    if (message.length < 10) {
      setButtonState("error")
      setErrorMessage("Message must be at least 10 characters long")
      return
    }

    if (window.emailjs) {
      window.emailjs
        .send(
          "smtp.gmail.com",
          "template_5xjzakj",
          {
            floating_Name: name,
            floating_Email: email,
            floating_message: message,
          },
          "syWNNT_EUME6K5Fqb",
        )
        .then(
          () => {
            setTimeout(() => setButtonState("success"), 2000)
            setTimeout(() => {
              setFormData({ name: "", email: "", message: "" })
              setButtonState("idle")
            }, 4000)
          },
          () => {
            setButtonState("error")
            setErrorMessage("Failed to send message. Please try again")
          },
        )
    } else {
      console.error("EmailJS not loaded")
      setButtonState("error")
      setErrorMessage("System error. Please reload the page and try again")
    }
  }

  const getButtonContent = () => {
    switch (buttonState) {
      case "sending":
        return (
          <div className="flex items-center gap-2">
            <span>Sending</span>
            <motion.div
              animate={{
                y: [0, -8, 0, -4, 0],
                rotate: [0, 180, 360, 540, 720],
                scale: [1, 1.1, 1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              <Send className="h-4 w-4" />
            </motion.div>
          </div>
        )
      case "success":
        return (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
            <span>Sent!</span>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Check className="h-4 w-4" />
            </motion.div>
          </motion.div>
        )
      case "error":
        return (
          <motion.div
            animate={{ x: [-5, 5, -5, 5, 0] }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span>Error!</span>
            <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5 }}>
              <AlertCircle className="h-4 w-4" />
            </motion.div>
          </motion.div>
        )
      default:
        return (
          <div className="flex items-center gap-2">
            <span>Send Message</span>
            <Send className="h-4 w-4" />
          </div>
        )
    }
  }

  const getButtonColor = () => {
    switch (buttonState) {
      case "success":
        return "bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 hover:from-green-500 hover:via-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/25"
      case "error":
        return "bg-red-500 hover:bg-red-600"
      default:
        return "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
    }
  }

  return (
    <section className="w-full relative">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions or would like to work together.
        </p>
      </motion.header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1"
        >
          <address className="not-italic space-y-6">
            <motion.article whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <section>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+201098454946</p>
                  </section>
                </CardContent>
              </Card>
            </motion.article>

            <motion.article whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <section>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">sayedragheb92@gmail.com</p>
                  </section>
                </CardContent>
              </Card>
            </motion.article>
          </address>
        </motion.aside>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <motion.article whileHover={{ scale: 1.02 }} className="h-full">
            <Card className="h-full border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <section>
                    <label
                      htmlFor="floating_Name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Full Name
                    </label>
                    <Input
                      id="floating_Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </section>

                  <section>
                    <label
                      htmlFor="floating_Email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="floating_Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </section>

                  <section>
                    <label
                      htmlFor="floating_message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="floating_message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </section>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit"
                      className={`w-full transition-all duration-500 ${getButtonColor()}`}
                      disabled={buttonState !== "idle"}
                      title={buttonState === "error" ? errorMessage : ""}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={buttonState}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {getButtonContent()}
                        </motion.div>
                      </AnimatePresence>
                    </Button>
                  </motion.div>

                  <AnimatePresence>
                    {buttonState === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                        className="mt-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: 2, ease: "easeInOut" }}
                          className="flex items-center gap-3 text-green-700 dark:text-green-400"
                        >
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="bg-green-100 dark:bg-green-800/50 p-2 rounded-full"
                          >
                            <Check className="h-5 w-5 flex-shrink-0" />
                          </motion.div>
                          <div>
                            <p className="text-sm font-semibold">Message sent successfully!</p>
                            <p className="text-xs text-green-600 dark:text-green-500 mt-1">
                              I'll get back to you soon.
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                        className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          className="flex items-center gap-2 text-red-600 dark:text-red-400"
                        >
                          <motion.div
                            animate={{ rotate: [0, -5, 5, -5, 0] }}
                            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                          >
                            <AlertCircle className="h-4 w-4 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm font-medium">{errorMessage}</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.article>
        </motion.section>
      </main>
    </section>
  )
}
