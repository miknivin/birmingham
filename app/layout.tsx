import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Birmingham Associates | Global Education Opportunities",
  description:
    "Birmingham Associates helps students across India access quality education through career-focused programs, international pathways, and skill-based courses designed for the future.",
  keywords: [
    "Birmingham Associates",
    "education counselling",
    "international education",
    "career-focused programs",
    "study abroad",
  ],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Birmingham Associates | Global Education Opportunities",
    description:
      "Guidance for career-focused programs, international pathways, and skill-based courses across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
