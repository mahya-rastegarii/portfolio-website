
// import Button from "@/components/button/Button";
import ContactMe from "../components/section/contact/ContactMe";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title:"Contact Me",
  description: " Contact page in portfolio",
};


export default function ContactPage() {
 

  return (
    <section className="relative min-h-screen  lg:h-screen flex flex-col justify-center items-center  text-white px-6 lg:py-20  lg:px-24 overflow-y-scroll pt-10 lg:pt-4 lg:overflow-hidden">
   <Toaster
  position="top-right"
  reverseOrder={true}
/>
      
         <ContactMe/>
    </section>
  );
}
