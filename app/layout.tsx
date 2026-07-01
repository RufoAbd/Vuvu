import type { Metadata } from "next";
import localFont from "next/font/local";
import { ImageProtection } from "@/components/layout/ImageProtection";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Vusala Huseynova | Data Analyst",
  description:
    "Vusala Huseynova is a Data Analyst who specializes in building exceptional data-driven solutions through Excel, SQL, Python, and Power BI.",
  keywords: ["Data Analyst", "Power BI", "SQL", "Python", "Excel", "Vusala Huseynova"],
  authors: [{ name: "Vusala Huseynova" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vusaleh.dev",
    title: "Vusala Huseynova | Data Analyst",
    description:
      "Data Analyst specializing in transforming raw data into actionable insights.",
    siteName: "Vusala Huseynova",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ImageProtection />
        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>
        {children}
      </body>
    </html>
  );
}
