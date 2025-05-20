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
    "Front-End Developer with a focus on building fast, clean, and responsive web interfaces using React and Next.js. Explore my portfolio to see what I can bring to your next project.",
  keywords: [
    "Sayed Ragheb",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "SASS",
    "GitHub",
    "npm",
    "jQuery",
    "Material UI",
    "Flowbite",
    "Clean Code",
    "Responsive Web Design",
    "Web Projects",
    "Modern UI",
    "Frontend Portfolio",
    "Web Developer Portfolio",
    "User Interface Developer",
    "سيد راغب",
    "مطور واجهات أمامية",
    "كود نظيف",
    "تصميم ويب متجاوب",
    "مشاريع ويب",
    "واجهة مستخدم حديثة",
    "بورتفوليو الواجهات الأمامية",
    "بورتفوليو مطور ويب",
    "مطور واجهة مستخدم",
  ],
  metadataBase: new URL("https://sayedragheb.vercel.app/"),
  openGraph: {
    title: "Sayed Ragheb | Front-End Developer",
    description:
      "Hi, I'm Sayed Ragheb — a front-end developer showcasing modern, responsive web projects built with React, Next.js, and a wide range of UI tools.",
    url: "https://sayedragheb.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
