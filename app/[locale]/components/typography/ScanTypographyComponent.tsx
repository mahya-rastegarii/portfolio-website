



export type skillsProps = {
  id: number;
  skill: string;
  dir:string;
}


export default function ScanTypographyComponent ({skill, id, dir}: skillsProps ) {


 return(
   
  
   
  

      <span
        style={{"--i": id } as React.CSSProperties}
         className={`relative inline-block font-bold text-2xl md:text-3xl ${dir}`}
          data-text={skill}
          > 
         {
          skill
         }
           </span>
    
    
    
    


 
 )
}