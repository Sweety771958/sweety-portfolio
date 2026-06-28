import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Sweety Pal | Biomedical Engineering Profile",
  description: "Professional portfolio website for Dr. Sweety Pal, presenting research, publications, education, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Force dark theme for server-rendered HTML (keeps preview consistently dark)
  const htmlClass = `${geistSans.variable} ${geistMono.variable} h-full antialiased`;

  return (
    <html lang="en" className={htmlClass} data-theme={"dark"}>
      <body className="min-h-full bg-theme text-theme">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
