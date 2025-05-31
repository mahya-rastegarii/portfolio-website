import { Vazirmatn, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navdar/Navbar";
import Menu from "./components/menu/Menu";
import { PageTransition } from "./components/transition/PageTransition";
import { I18nProviderClient } from "../../locales/client";




const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "600", "800"],
  display: "swap",
  variable: "--font-vazir"
})


export const metadata: Metadata = {
  title:{
 template: "Portfolio | %s",
 default: "Portfolio"
  },
  description: "my personal portfolio website",
  openGraph: {
    title: "Mahya Rastegari | Frontend Developer",
    description: "Welcome to my personal portfolio website.",
    url: "https://portfolio-website-nu-three-50.vercel.app/",
    siteName: "Mahya Rastegari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahya Portfolio Cover",
      },
    ],
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

 
 const {locale} = await params;

  return (
    <html lang={locale}>
      <body className={` ${vazir.variable}  ${poppins.variable} ${locale === "fa" ? 'vazir-font' : 'poppins-font'}`}>
       
        <PageTransition/>

        <I18nProviderClient locale={locale}>

       <div className="relative min-h-screen overflow-x-hidden">
        <div className=" absolute inset-0 -z-10 bg-black">
    <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/10 via-indigo-900/20 to-transparent" />
    </div>
        <Navbar/>
        <Menu/>
        {children}
        </div>
        
        </I18nProviderClient>
      </body>
    </html>
  );
}
