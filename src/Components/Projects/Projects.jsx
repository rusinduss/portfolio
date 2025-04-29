import projects from "../../data/projects.json"
import { ProjectCard } from "./ProjectCard"
import "./Projects.css"

export const Projects = () => {
  return (
    <section className="project-container1" id="project">
      
        <h2 className="project-title1">Projects</h2>
        
        <div className="project-projects">
               {projects.map((project)=>
               {return(
              
                <ProjectCard key={project.id} project={project}/>
               )})} 
        
        </div>
    </section>
  )
}
