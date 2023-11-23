import Navbar from "@/components/Navbar";
import ProjectsProvider from "@/context/ProjectContext";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const mainFont = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "900"],
  variable: "--font-main",
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
        className={`${mainFont.className} ${mainFont.variable} flex flex-col min-h-screen text-primary-color  bg-[#020207] px-32 py-4 custom-scrollbar`}
      >
        <Navbar />
        <ProjectsProvider>{children}</ProjectsProvider>
      </body>
    </html>
  );
}
