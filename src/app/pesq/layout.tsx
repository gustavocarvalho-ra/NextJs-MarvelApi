import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Foot from "@/components/Foot";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "L_v2",
  description: "Loja de roupas",
  
};

export default function LayoutOff({
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
      <Foot />
    </>
  );
}
