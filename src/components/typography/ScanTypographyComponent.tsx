



export type skillsProps = {
  id: number;
  skill: string;
}


export default function ScanTypographyComponent ({skill, id}: skillsProps) {


 return(
   
  
   
  

      <span
        style={{"--i": id } as React.CSSProperties}
         className="relative inline-block font-bold  text-3xl  text-scan"
          data-text={skill}
          > 
         {
          skill
         }
           </span>
    
    
    
    


 
 )
}