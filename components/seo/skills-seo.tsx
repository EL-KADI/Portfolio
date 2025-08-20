import Script from "next/script"

export default function SkillsSEO() {
  const skillsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sayed Ragheb Skills",
    description: "Discover Sayed Ragheb's technical skills in modern web development",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "React.js",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Next.js",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "TypeScript",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Tailwind CSS",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Bootstrap",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "SASS",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "GitHub",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "npm",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "jQuery",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Material UI",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Flowbite",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "Clean Code",
      },
      {
        "@type": "ListItem",
        position: 13,
        name: "Responsive Web Design",
      },
      {
        "@type": "ListItem",
        position: 14,
        name: "Web Projects",
      },
      {
        "@type": "ListItem",
        position: 15,
        name: "Modern UI",
      },
      {
        "@type": "ListItem",
        position: 16,
        name: "Frontend Portfolio",
      },
      {
        "@type": "ListItem",
        position: 17,
        name: "Web Developer Portfolio",
      },
      

    ],
  }

  return (
    <Script
      id="skills-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd) }}
    />
  )
}
