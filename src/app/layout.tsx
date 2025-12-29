import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FixedBackground from "@/components/FixedBackground";

export const metadata: Metadata = {
  title: "Beltra Industries LLC | Applied AI & Intelligent Systems",
  description:
    "Beltra Industries develops applied AI and software platforms spanning commerce, language, legal access, and security.",
  keywords: [
    "AI",
    "artificial intelligence",
    "software platforms",
    "point of sale",
    "language translation",
    "legal tech",
    "security systems",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col antialiased transition-colors duration-300">
        <FixedBackground />
        <div className="relative z-50">
          <Header />
        </div>
        <main className="flex-1 relative z-10">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
