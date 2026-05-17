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
  description: "Full-Stack Software Engineer with 6-7 years of experience. Specialized in Banking APIs, Java/Spring Boot, React, Next.js, Flutter, and Cloud-native architectures.",
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
