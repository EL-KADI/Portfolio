"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";
import MetaCertificate from "../Images/Meta Certificate.jpg";
import RouteDiploma from "../Images/Route Certificate.png";
import MicrosoftCertificate from "../Images/Microsoft Certificate.png";
import IBMCertificate from "../Images/IBM Certificate.png";
export default function Certificates() {
  const certificates = [
    {
      name: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "2024",
      description:
        "Professional certificate in front-end development from Meta, covering React, JavaScript, and web development principles.",
      image: MetaCertificate,
      url: "/Pdfs/Meta Diploma.pdf",
    },
    {
      name: "Route Academy Frontend Development Diploma",
      issuer: "Route Academy",
      date: "2025",
      description:
        "Practical front-end diploma covering HTML, CSS, JavaScript, and modern frameworks with hands-on training.",
      image: RouteDiploma,
      url: "/Pdfs/Route Diploma.pdf",
    },
    {
      name: "Microsoft Front-End Developer Certificate",
      issuer: "Microsoft",
      date: "2025",
      description:
        "Microsoft-certified training in front-end development using HTML, CSS, JavaScript, and advanced UI/UX design principles.",
      image: MicrosoftCertificate,
      url: "/Pdfs/Microsoft Diploma.pdf",
    },
    {
      name: "IBM Front-End Developer Certificate",
      issuer: "IBM",
      date: "2025",
      description:
        "IBM-certified training in front-end development with HTML, CSS, JavaScript, React, and UI/UX best practices.",
      image: IBMCertificate,
      url: "/Pdfs/IBM Diploma.pdf",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
          Certificates
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Professional certifications that validate my skills and knowledge in
          web development.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {certificates.map((certificate, index) => (
          <motion.div key={index} variants={item}>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
              }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-blue-100 ring-blue-300 ring-1 dark:ring-1 dark:ring-gray-700 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700 perspective-1000">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.name}
                    fill
                    className="object-cover transition-transform hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white font-bold text-lg">
                      {certificate.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {certificate.name}
                  </h3>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {certificate.date}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {certificate.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full gap-2 hover:bg-primary-100 dark:hover:bg-primary-900"
                      >
                        <FileText className="h-4 w-4" />
                        View Certificate
                      </Button>
                    </a>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
