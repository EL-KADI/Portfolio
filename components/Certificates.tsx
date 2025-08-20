"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export default function Certificates() {
  const certificates = [
    {
      name: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "2024",
      description:
        "Professional certificate in front-end development from Meta, covering React and web development principles.",
      image: "/Meta Certificate.avif",
      url: "/Pdfs/Meta Diploma.pdf",
    },
    {
      name: "Route Academy Frontend Diploma",
      issuer: "Route Academy",
      date: "2025",
      description:
        "Front-end diploma covering HTML, CSS, JavaScript, and modern frameworks with hands-on training.",
      image: "/Route Certificate.webp",
      url: "/Pdfs/Route Diploma.pdf",
    },
    {
      name: "Microsoft Front-End Certificate",
      issuer: "Microsoft",
      date: "2025",
      description:
        "Microsoft-certified training in front-end development using HTML, CSS, and advanced UI/UX design principles.",
      image: "/Microsoft Certificate.avif",
      url: "/Pdfs/Microsoft Diploma.pdf",
    },
    {
      name: "IBM Front-End Developer Certificate",
      issuer: "IBM",
      date: "2025",
      description:
        "IBM-certified training in front-end development with HTML, CSS, JavaScript, React, and UI/UX best practices.",
      image: "/IBM Certificate.avif",
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
    <section className="w-full">
      <motion.header
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
      </motion.header>
      <motion.main
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-4xl mx-auto"
      >
        {certificates.map((certificate, index) => (
          <motion.article key={index} variants={item}>
            <CardContainer className="inter-var">
              <CardBody className="h-full">
                <CardItem translateZ="50" className="h-full">
                  <Card className="h-full overflow-hidden border-blue-100 ring-blue-300 ring-1 dark:ring-1 dark:ring-gray-700 dark:border-gray-700 transform transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700">
                    <CardItem translateZ="75" className="w-full">
                      <figure className="relative h-72 w-full overflow-hidden">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={`${certificate.name} - Professional certificate from ${certificate.issuer}`}
                          fill
                          loading="lazy"
                          className="object-cover"
                        />
                        <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <h3 className="text-white font-bold text-lg">
                            {certificate.name}
                          </h3>
                        </figcaption>
                      </figure>
                    </CardItem>
                    <CardContent className="p-6">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-semibold text-gray-900 dark:text-white mb-1"
                      >
                        {certificate.name}
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        className="flex justify-between items-center mb-3 w-full"
                      >
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {certificate.issuer}
                        </p>
                        <time className="text-gray-500 dark:text-gray-400 text-sm">
                          {certificate.date}
                        </time>
                      </CardItem>
                      <CardItem
                        translateZ="30"
                        className="text-gray-600 dark:text-gray-300 text-sm mb-4"
                      >
                        {certificate.description}
                      </CardItem>
                      <CardItem className="w-full" translateZ="60">
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            className="w-full gap-2 hover:bg-primary-100 dark:hover:bg-primary-900 bg-transparent"
                          >
                            <FileText className="h-4 w-full" />
                            View Certificate
                          </Button>
                        </a>
                      </CardItem>
                    </CardContent>
                  </Card>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.article>
        ))}
      </motion.main>
    </section>
  );
}
