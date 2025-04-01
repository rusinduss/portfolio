/* eslint-disable react/prop-types */
import "./ProjectCard.css"

export const ProjectCard = ({project:{title,description,imageSrc,skills,demo,source}
}) => {
  return (
    <div className="project-container">
                    <img className="project-image" src={`src//assets/${imageSrc}`} alt={title}/>
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                <ul className="project-skills">
                    {skills.map((skills)=>{
                        return(
                        <li className="project-skill" key={skills.id}>{skills}</li>
                    )})}
                </ul>
                <div className="project-links">
                    <a className="project-link" href={demo}>Demo</a>
                    <a className="project-link" href={source}>Source</a>
                </div>

                </div>
  )
}
