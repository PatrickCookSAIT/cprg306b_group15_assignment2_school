/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: Layout logic
 *
 * Description: Wraps each page with the NavBar and Footer. Sets the structure for each page. 
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NGHS",
  description: "Student portal for New Generation High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className = "flex-1">{children}</main>
        <Footer />
      </body>

    </html>
  );
}
