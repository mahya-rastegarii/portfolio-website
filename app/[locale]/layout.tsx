import { Outfit, Vazirmatn } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navdar/Navbar";
import Menu from "./components/menu/Menu";
import { PageTransition } from "./components/transition/PageTransition";
import { I18nProviderClient } from "../../locales/client";



const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-outfit",
});

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "600", "800"],
  variable: "--font-vazir"
})


export const metadata: Metadata = {
  title:{
 template: "Portfolio | %s",
 default: "Portfolio"
  },
  description: "portfolio",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale : string};
}>) {

 


 
  return (
    <html lang={params.locale}>
      <body className={ params.locale === "fa" ? vazir.variable : outfit.variable}>
       
        <PageTransition/>

        <I18nProviderClient locale={params.locale}>
        <div className=" absolute inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 via-indigo-900/20 to-transparent" />
        <Navbar/>
        <Menu/>
        {children}
        </div>
        {/* </PageTransition> */}
        </I18nProviderClient>
      </body>
    </html>
  );
}
