import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sayed Ragheb",
  description:
    "Sayed Ragheb is a professional web developer specializing in React, Next.js, and TypeScript. سيد راغب مطور ويب محترف متخصص في React و Next.js و TypeScript.",
  keywords: [
    "Sayed Ragheb",
    "Web Developer",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Web Design",
    "Performance Optimization",
    "SEO Optimization",
    "Portfolio",
    "Modern UI",
    "Clean Code",
    "سيد راغب",
    "مطور ويب",
    "مطور واجهات أمامية",
    "مطور React",
    "خبير Next.js",
    "تصميم ويب متجاوب",
    "بورتفوليو مطور ويب",
    "مشاريع ويب",
  ],
  metadataBase: new URL("https://sayedragheb.vercel.app"),
  openGraph: {
    title: "Sayed Ragheb - Web Developer | مطور ويب",
    description:
      "Professional web developer specializing in React, Next.js, and modern web technologies. مطور ويب محترف متخصص في React و Next.js والتقنيات الحديثة.",
    url: "https://sayedragheb.vercel.app",
    siteName: "Sayed Ragheb Portfolio",
    images: [
      {
        url: "https://sayedragheb.vercel.app/Sayed%20Ragheb.avif",
        width: 1200,
        height: 630,
        alt: "Sayed Ragheb - Professional Web Developer | مطور ويب",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Ragheb | سيد راغب",
    description:
      "Professional web developer specializing in React, Next.js, and modern web technologies. مطور ويب محترف متخصص في React و Next.js.",
    images: ["https://sayedragheb.vercel.app/Sayed%20Ragheb.avif"],
  },
  alternates: {
    canonical: "https://sayedragheb.vercel.app",
    languages: {
      en: "https://sayedragheb.vercel.app",
      ar: "https://sayedragheb.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sayed Ragheb",
    alternateName: "سيد راغب",
    url: "https://sayedragheb.vercel.app",
    image:
      "https://sayedragheb.vercel.app/_next/static/media/Sayed%20Ragheb.14119f1c.avif",
    jobTitle: "Web Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Development",
      "Frontend Development",
      "Responsive Design",
    ],
    sameAs: [
      "https://github.com/EL-KADI",
      "https://www.linkedin.com/in/el-kadi",
      "https://x.com/sayedragheb92",
    ],
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sayed Ragheb Portfolio",
    alternateName: "بورتفوليو سيد راغب",
    url: "https://sayedragheb.vercel.app",
    description:
      "Professional web developer portfolio showcasing React and Next.js projects. بورتفوليو مطور ويب محترف يعرض مشاريع React و Next.js.",
    author: {
      "@type": "Person",
      name: "Sayed Ragheb",
    },
  };

  const jsonLdBlogPosts = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Post 1 Title",
      description: "Description of post 1.",
      author: {
        "@type": "Person",
        name: "Sayed Ragheb",
      },
      url: "https://professionalsofinformation.blogspot.com/2025/08/my-journey-into-web-development-when-i.html",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://professionalsofinformation.blogspot.com/2025/08/my-journey-into-web-development-when-i.html",
      },
      datePublished: "2025-08-20",
      dateModified: "2025-08-20",
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Post 2 Title",
      description: "Description of post 2.",
      author: {
        "@type": "Person",
        name: "Sayed Ragheb",
      },
      url: "https://professionalsofinformation.blogspot.com/2025/08/route-academy.html",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://professionalsofinformation.blogspot.com/2025/08/route-academy.html",
      },
      datePublished: "2025-08-20",
      dateModified: "2025-08-20",
    },
  ];

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        {jsonLdBlogPosts.map((post, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(post) }}
          />
        ))}
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main role="main" id="main-content">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
