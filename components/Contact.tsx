"use client"

import { useState } from "react"
import { motion } from "framer-motion"

declare global {
  interface Window {
    emailjs?: any
  }
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  type Toast = { id: number; message: string; type: string; visible: boolean }
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: string) => {
    const newToast = { id: Date.now(), message, type, visible: true }
    setToasts((prevToasts) => [newToast, ...prevToasts])

    setTimeout(() => {
      removeToast(newToast.id)
    }, 4000)
  }

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.map((toast) => (toast.id === id ? { ...toast, visible: false } : toast)))

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

   
    if (name.length < 3) {
      addToast("The name must be at least 3 characters long.", "error")
      setIsSubmitting(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast("Please enter a valid email address.", "error")
      setIsSubmitting(false)
      return
    }

    if (message.length < 10) {
      addToast("The message must be at least 10 characters long.", "error")
      setIsSubmitting(false)
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
            addToast("The message was sent successfully", "success")
            setFormData({ name: "", email: "", message: "" })
            setIsSubmitting(false)
          },
          () => {
            addToast("The message failed to send, please try again.", "error")
            setIsSubmitting(false)
          },
        )
    } else {
      
      console.error("EmailJS not loaded")
      addToast("Email service not available. Please try again later.", "error")
      setIsSubmitting(false)
    }
  }

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
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions or would like to work together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <div className="space-y-6">
            <motion.div whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+201098454946</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="h-full">
              <Card className="h-full border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">sayedragheb92@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="h-full">
            <Card className="h-full border-gray-200 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      type="submit"
                      className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Toast notifications */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`transform transition-all duration-300 ${
              toast.visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : toast.type === "error"
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
            } px-4 py-2 rounded-lg shadow-lg max-w-xs`}
          >
            <div className="flex justify-between items-center">
              <p>{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-4 text-white hover:text-gray-200 focus:outline-none"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
