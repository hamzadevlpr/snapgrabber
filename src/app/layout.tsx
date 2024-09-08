import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";

const lexend = Lexend(
  {
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  }
);

export const metadata: Metadata = {
  title: "Seamless Video Downloads from Facebook & More",
  description: "Download videos from Facebook, Instagram, Twitter, and more with ease. No software required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
