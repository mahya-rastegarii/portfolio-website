
import ProjectSlider from '../components/section/projects/ProjectSlider';
import { Metadata } from 'next';
import toast, { Toaster } from 'react-hot-toast';
import { getI18n } from '../../../locales/server';

export const metadata: Metadata = {
  title:"My Projects",
  description: " projects page in portfolio",
};


async function getProjects(){

  const t = await getI18n()
  const response = await fetch(" https://portfolio-website-nu-three-50.vercel.app/api/projects", {
    cache: "no-store",
  });

  if(!response.ok){
    toast.error(t("projects.notification.error"));
  }

   return response.json();
}

export default async function ProjectsPage() {
  
  const projects = await getProjects();
 

  return (
    <section className="relative min-h-screen h-screen w-full text-white px-6  md:px-24 flex flex-col items-center justify-center overflow-y-scroll lg:overflow-hidden pt-32 lg:pt-0">
      <Toaster
  position="top-left"
  reverseOrder={true}
/>
     <ProjectSlider projects={projects}/>
    </section>
  );
}