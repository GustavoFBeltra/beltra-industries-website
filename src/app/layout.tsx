import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechBackground from "@/components/TechBackground";
import CommandPalette from "@/components/CommandPalette";
import ScrollRail from "@/components/ScrollRail";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beltraindustries.com"),
  title: {
    default: "Beltra Industries LLC — Applied AI & Intelligent Systems",
    template: "%s — Beltra Industries",
  },
  description:
    "Beltra Industries builds applied AI and software platforms spanning commerce, language, legal access, and security. Engineered for production, not demos.",
  keywords: [
    "AI",
    "artificial intelligence",
    "software platforms",
    "point of sale",
    "language translation",
    "legal tech",
    "security systems",
  ],
  openGraph: {
    title: "Beltra Industries LLC",
    description:
      "Applied AI and software platforms spanning commerce, language, legal access, and security.",
    url: "https://beltraindustries.com",
    siteName: "Beltra Industries",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 2400,
        height: 1260,
        alt: "Beltra Industries — Applied AI & Intelligent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beltra Industries LLC",
    description:
      "Applied AI and software platforms spanning commerce, language, legal access, and security.",
    images: ["/og.png"],
  },
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
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Set the theme class before first paint to avoid a flash
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Beltra Industries LLC",
              url: "https://beltraindustries.com",
              logo: "https://beltraindustries.com/images/crest-black.png",
              email: "contact@beltraindustries.com",
              description:
                "Beltra Industries builds applied AI and software platforms spanning commerce, language, legal access, and security.",
              foundingLocation: { "@type": "Country", name: "United States" },
              founder: { "@type": "Person", name: "Gustavo Beltra" },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <TechBackground />
        <CommandPalette />
        <ScrollRail />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
