import skills from "../../data/skills.json"
import history from "../../data/history.json"
import "./Experience.css"

export const Experience = () => {
  return (
    <section className="exp-Container" id="Experience">
        <div className="exp-Experience">
            <h2 className="exp-title">Experiences</h2>
            <div className="exp-Content">
                <div className="exp-skills">{skills.map((skill)=>
                {return <div className="skill-img-container" key={skill.id}>
                    <img src={`/assets/${skill.imageSrc}`} alt={skill.title}></img>
                    <p>{skill.title}</p>
                    </div>
                    })}
                    </div>
                    <div>
                        
                        <ul className="exp-history">
                            {history.map((history)=>{
                                return <li key={history.id} className="history-item">
                                    <img src={`/assets/${history.imageSrc}`} alt={`${history.organisation} logo`}></img>
                                    <div className="history-item-details">
                                        <h3>{`${history.role},${history.organisation}`}</h3>
                                        
                                    <p>
                                        {`${history.startDate}-${history.endDate}`}
                                    </p>
                                    <ul >
                                        <p>{history.experiences.map((experience)=>{
                                           return<li key={experience.id}>
                                                        {experience}
                                            </li>
                                        })}</p>
                                    </ul>
                                    </div>

                                </li>
                            })}
                        </ul>
                    </div>

                </div>
        </div>
    </section>
  )
}
