
// import Button from "@/components/button/Button";
import ContactMe from "@/components/section/contact/ContactMe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Contact Me",
  description: " Contact page in portfolio",
};
export default function ContactPage() {
 

  return (
    <section className="h-screen flex flex-col justify-center items-center  text-white px-6 py-20 md:px-24 ">
   
      
         <ContactMe/>
    </section>
  );
}
