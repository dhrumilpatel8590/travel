import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elohim Tours | Premium Travel & Expedition Packages",
  description:
    "Curated expeditions for those who seek more than just a vacation. Experience premium land packages in Goa, Baku (Azerbaijan), Georgia, and the Philippines.",
  keywords:
    "elohim tours, goa tour package, baku azerbaijan package, georgia travel, philippines tour, travel agency india",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${sourceSans.variable} scroll-smooth`}
    >
      <body className="flex flex-col min-h-screen bg-background text-text font-body antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
