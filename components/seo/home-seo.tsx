import Script from "next/script"

export default function HomeSEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sayed Ragheb",
    url: "https://sayedragheb.vercel.app",
    image: "https://sayedragheb.vercel.app/_next/static/media/Sayed%20Ragheb.14119f1c.avif",
    jobTitle: "Web Developer",
    description:
      "Sayed Ragheb is a professional web developer specialized in React, Next.js, and TypeScript. Expert in interactive websites and cloud applications.",
    sameAs: [
      "https://github.com/EL-KADI",
      "https://www.linkedin.com/in/el-kadi",
      "https://x.com/sayedragheb92",
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sayed Ragheb Portfolio",
    url: "https://sayedragheb.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sayedragheb.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
