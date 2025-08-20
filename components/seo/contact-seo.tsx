import Script from "next/script"

export default function ContactSEO() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sayed Ragheb",
    url: "https://sayedragheb.vercel.app",
    description:
      "Contact Sayed Ragheb to discuss web development projects, consultations, or collaborations in React and Next.js.",
    mainEntity: {
      "@type": "Person",
      name: "Sayed Ragheb",
      jobTitle: "Web Developer",
      url: "https://sayedragheb.vercel.app",
      sameAs: [
        "https://github.com/EL-KADI",
        "https://www.linkedin.com/in/el-kadi",
        "https://x.com/sayedragheb92",
      ],
    },
  }

  return (
    <Script
      id="contact-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
    />
  )
}
