import { Geist, Geist_Mono, Space_Grotesk, Inter } from "next/font/google";

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export const spaceGrotesk = Space_Grotesk({
    variable: "--font-space",
    subsets: ["latin"]
})

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})