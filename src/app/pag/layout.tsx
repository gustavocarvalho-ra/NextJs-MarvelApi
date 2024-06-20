import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Poppins({ subsets: ["latin"], weight: "900" });

export const metadata: Metadata = {
  title: "Marvel API",
  icons: "./favicon.ico",
  description: "Marvel API",
};

export default function PagLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>
        {children}
      </body>
      <Footer />
    </html>
  );
}
