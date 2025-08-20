import Script from "next/script";

export default function ProjectsSEO() {
  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sayed Ragheb Projects",
    description:
      "Explore Sayed Ragheb's portfolio of web development projects including React, Next.js, e-commerce, and interactive applications.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "E-commerce Website",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "React Dashboard",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Next.js Blog",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Digital Card Creator",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Material Kit 2",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Weather App",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "DevFolio",
        url: "https://sayedragheb.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Daniels Portfolio",
        url: "https://sayedragheb.vercel.app",
      },
    ],
  };

  return (
    <Script
      id="projects-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
    />
  );
}
