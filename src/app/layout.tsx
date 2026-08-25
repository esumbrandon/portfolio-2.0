import type { Metadata } from "next";
import localFont from "next/font/local";
import NavBar from "./component/nav/page";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Esum Brandon Oben | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 7 years of experience designing, developing, and deploying scalable banking platforms, microservices, mobile apps, and cloud infrastructure. Proficient in Java, Spring Boot, Angular, React, Next.js, Flutter, and OAuth2/PSD2 Open Finance.",
  keywords: [
    "Esum Brandon Oben",
    "Full-Stack Software Engineer",
    "Senior Software Engineer",
    "Java",
    "Spring Boot",
    "PSD2",
    "Open Finance",
    "Berlin Group Specification",
    "Keycloak",
    "OAuth2",
    "Angular",
    "React",
    "Next.js",
    "Flutter",
    "Dart",
    "Microservices",
    "Docker",
    "AWS",
  ],
  authors: [{ name: "Esum Brandon Oben", url: "https://github.com/esumbrandon" }],
  creator: "Esum Brandon Oben",
  openGraph: {
    title: "Esum Brandon Oben | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 7 years of experience building secure banking APIs, microservices, web apps, and cross-platform mobile apps.",
    url: "https://github.com/esumbrandon/portfolio-2.0",
    siteName: "Esum Brandon Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        < NavBar />
        {children}
      </body>
    </html>
  );
}
