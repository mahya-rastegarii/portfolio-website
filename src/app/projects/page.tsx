
import ProjectSlider from '@/components/section/projects/ProjectSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:"My Projects",
  description: " projects page in portfolio",
};

async function getProjects(){
  const response = await fetch("https://portfolio-website-nu-three-50.vercel.app/api/projects", {
    cache: "no-store",
  });

  if(!response.ok){
    throw new Error('Failed to fetch projects');
  }

   return response.json();
}

export default async function ProjectsPage() {
  
  const projects = await getProjects();
 

  return (
    <section className="h-screen w-full text-white px-6 py-20 md:px-24 flex flex-col items-center justify-center overflow-y-scroll md:overflow-hidden">
      
     <ProjectSlider projects={projects}/>
    </section>
  );
}