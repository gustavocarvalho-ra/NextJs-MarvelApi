import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "../app/page.module.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "L_v2",
  description: "Loja de roupas",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <Header />
        <body className={inter.className}>{children}
        </body>
      </html>765'
    </>
  );
}
