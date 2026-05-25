import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELCO Plumbing — Marietta's Trusted Plumbers | 24/7 Emergency Service",
  description:
    "Family-run plumbing experts serving Marietta, Cobb County and the greater Atlanta area for 15+ years. Drain cleaning, water heaters, leak detection and 24/7 emergency repairs. Licensed, bonded, and insured. Call 678-772-1218.",
  keywords: [
    "plumber Marietta",
    "Cobb County plumber",
    "emergency plumber Atlanta",
    "drain cleaning Marietta",
    "water heater installation",
    "water restoration Cobb County",
    "ELCO Plumbing",
  ],
  openGraph: {
    title: "ELCO Plumbing — If Water Runs Through It, We Do It!",
    description:
      "Marietta's most trusted plumbers. 24/7 emergency service across Cobb County and the 50-mile Atlanta radius.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="cursor-active bg-white text-brand-navy antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
