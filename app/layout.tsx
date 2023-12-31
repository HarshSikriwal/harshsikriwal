import Navbar from "@/components/Navbar";
import ProjectsProvider from "@/context/ProjectContext";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";

// const mainFont = Titillium_Web({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "600", "900"],
//   // variable: "--font-main",
// });
const myFont = localFont({
  src: [
    {
      path: "../public/Sabon.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/SabonBold.ttf",
      weight: "700",
      style: "bold",
    },

    {
      path: "../public/SabonItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Harsh Sikriwal",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} flex flex-col min-h-screen max-lg:w-screen text-primary-color max-lg:mb-12 lg:mx-32 bg-[#020207] custom-scrollbar`}
      >
        <Navbar />
        <ProjectsProvider>{children}</ProjectsProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
