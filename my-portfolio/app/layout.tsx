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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Pre-hydration script to apply stored theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');document.documentElement.setAttribute('data-theme','light');}else if(t==='dark'){document.documentElement.classList.remove('light');document.documentElement.setAttribute('data-theme','dark');}else{var p=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches;if(p){document.documentElement.classList.add('light');document.documentElement.setAttribute('data-theme','light');}else{document.documentElement.classList.remove('light');document.documentElement.setAttribute('data-theme','dark');}}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-theme text-theme">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
