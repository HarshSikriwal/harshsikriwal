import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import DetailsProvider from "@/context/ProjectContext";
import ProjectsProvider from "@/context/ProjectContext";

const mainFont = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "900"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} ${mainFont.variable} flex flex-col h-screen text-primary-color overflow-y-hidden bg-[#020207] px-32 py-4`}
      >
        <Navbar />
        <ProjectsProvider>{children}</ProjectsProvider>
      </body>
    </html>
  );
}
