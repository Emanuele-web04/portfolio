import type { Metadata } from "next";
import { spaceGrotesk, inter } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emanuele Di Pietro",
  description: "iOS/Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
