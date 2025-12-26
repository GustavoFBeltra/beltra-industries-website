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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col text-white dark:text-white light:text-zinc-900 antialiased transition-colors duration-300">
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
