import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Core | Optimising Human Performance in Safety-Critical Operations",
  description:
    "Core is a consultancy and technology business helping organisations improve safety, performance, and human reliability in safety-critical environments. UK & Dubai.",
  metadataBase: new URL("https://core.example.com"),
  openGraph: {
    title: "Core | Optimising Human Performance in Safety-Critical Operations",
    description:
      "Consulting and intelligent systems for safety, performance, and operational reliability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="bg-white text-ink-900 font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
