/* eslint-disable react/prop-types */
import "./ProjectCard.css";
import CStours from "../../assets/CStours.png";
import Movieapp from "../../assets/Movieapp.png";
import CEB from "../../assets/CEB.png";
import AtDigital from "../../assets/AtDigital.png"
import FullStack from "../../assets/FullStack.png"

const projectImages = {
  "Movieapp.png": Movieapp,
  "CStours.png": CStours,
  "CEB.png": CEB,
  "AtDigital.png":AtDigital,
  "FullStack.png":FullStack
};

export const ProjectCard = ({ project: { title, description, imageSrc, skills, source,demo} }) => {
  return (
    <div className="project-container">
      <img className="project-image" src={projectImages[imageSrc]} alt={title} />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-skills">
        {skills.map((skill, index) => (
          <li className="project-skill" key={index}>{skill}</li>
        ))}
      </ul>
      <div className="project-links">
        {/* <a className="project-link" href={demo} target="_blank" rel="noopener noreferrer">Demo</a> */}
        <a className="project-link" href={source} target="_blank" rel="noopener noreferrer">Source</a>
        <a className="project-link" href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
      </div>
    </div>
  );
}
