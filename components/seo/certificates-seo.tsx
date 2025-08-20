import Head from "next/head";
import Script from "next/script";

export default function CertificatesSEO() {
  const certificatesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Certificates - Sayed Ragheb",
    description:
      "Professional certificates and diplomas earned by Sayed Ragheb in web development, React, Next.js, and modern technologies.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "EducationalOccupationalCredential",
          name: "Meta Front-End Developer Certificate",
          description:
            "Professional certificate in front-end development from Meta, covering React and web development principles.",
          awardedBy: {
            "@type": "Organization",
            name: "Meta",
          },
          datePublished: "2024",
          url: "/Pdfs/Meta Diploma.pdf",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "EducationalOccupationalCredential",
          name: "Route Academy Frontend Diploma",
          description:
            "Front-end diploma covering HTML, CSS, JavaScript, and modern frameworks with hands-on training.",
          awardedBy: {
            "@type": "Organization",
            name: "Route Academy",
          },
          datePublished: "2025",
          url: "/Pdfs/Route Diploma.pdf",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "EducationalOccupationalCredential",
          name: "Microsoft Front-End Certificate",
          description:
            "Microsoft-certified training in front-end development using HTML, CSS, and advanced UI/UX design principles.",
          awardedBy: {
            "@type": "Organization",
            name: "Microsoft",
          },
          datePublished: "2025",
          url: "/Pdfs/Microsoft Diploma.pdf",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "EducationalOccupationalCredential",
          name: "IBM Front-End Developer Certificate",
          description:
            "IBM-certified training in front-end development with HTML, CSS, JavaScript, React, and UI/UX best practices.",
          awardedBy: {
            "@type": "Organization",
            name: "IBM",
          },
          datePublished: "2025",
          url: "/Pdfs/IBM Diploma.pdf",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="certificates-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificatesJsonLd) }}
      />
    </>
  );
}
