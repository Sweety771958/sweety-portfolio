import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Determine initial theme from server cookie (if present)
  const cookiesList = await cookies();
  const themeCookie = cookiesList.get("theme");
  const initialTheme = themeCookie ? (themeCookie.value === "light" ? "light" : "dark") : undefined;

  const htmlClass = `${geistSans.variable} ${geistMono.variable} h-full antialiased` + (initialTheme === "light" ? " light" : "");
  const dataTheme = initialTheme === "light" ? "light" : "dark";

  return (
    <html lang="en" className={htmlClass} data-theme={dataTheme}>
      <body className="min-h-full bg-theme text-theme">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
