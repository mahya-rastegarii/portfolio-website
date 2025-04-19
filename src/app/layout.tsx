import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navdar/Navbar";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-outfit",
});



export const metadata: Metadata = {
  title: "Portfolio",
  description: "portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
