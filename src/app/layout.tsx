import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navdar/Navbar";
import Menu from "@/components/menu/Menu";
import { PageTransition } from "@/components/transition/PageTransition";
// import ScrollRouteTransition from "@/components/transition/ScrollRouteTransition";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-outfit",
});

// const vazir = Vazirmatn({
//   subsets: ["arabic"],
//   weight: ["400", "600", "800"],
//   variable: "--font-vazir"
// })


export const metadata: Metadata = {
  title:{
 template: "Portfolio | %s",
 default: "Portfolio"
  },
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="">
       
        <PageTransition/>

       
        <div className=" absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 via-indigo-900/20 to-transparent" />
        <Navbar/>
        <Menu/>
        {children}
        </div>
        {/* </PageTransition> */}
       
      </body>
    </html>
  );
}
