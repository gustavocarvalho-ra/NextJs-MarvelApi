import { Inter } from "next/font/google";
import type { Metadata } from "next";
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
        <Header />
      <html lang="en">
        <body className={inter.className}>{children}
        </body>
      </html>
    </>
  );
}
