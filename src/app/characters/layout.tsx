import { Poppins } from "next/font/google";
import type { Metadata } from "next";

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
    <div className={Inter.className}>
      {children}
    </div>
  );
}
