import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Marvel API",
  description: "Marvel API",
};

export default function LayoutOff({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={Inter.className}>
          <Header />
            {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
