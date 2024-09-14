import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import { ThemeProvider } from 'next-themes'

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
      <body className={`${lexend.className} dark:bg-[#181C14]`}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
