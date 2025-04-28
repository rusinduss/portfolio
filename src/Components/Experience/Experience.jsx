
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import "./Experience.css";

// Import images directly (ensures they are bundled)
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/css.png";
import reactImage from "../../assets/react.png";
import nodeImage from "../../assets/node.png";
import springBootImage from "../../assets/Spring-Boot.png";
import googleImage from "../../assets/google.png";

// Map image filenames to imports
const skillImages = {
  "html.png": htmlImage,
  "css.png": cssImage,
  "react.png": reactImage,
  "node.png": nodeImage,
  "Spring-Boot.png": springBootImage
};

const historyImages = {
  "google.png": googleImage
};

export const Experience = () => {
  return (
    <section className="exp-Container" id="Experience">
      <div className="exp-Experience">
        <h2 className="exp-title">Experiences</h2>

        {/* Skills Section */}
        <div className="exp-Content">
          <div className="exp-skills">
            {skills.map((skill) => (
              <div className="skill-img-container" key={skill.id}>
                <img src={skillImages[skill.imageSrc]} alt={skill.title} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>

          {/* Work Experience Section */}
          <div>
            <ul className="exp-history">
              {history.map((historyItem) => (
                <li key={historyItem.id} className="history-item">
                  <img
                    src={historyImages[historyItem.imageSrc]}
                    alt={`${historyItem.organisation} logo`}
                  />
                  <div className="history-item-details">
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, index) => (
                        <li key={index}>{experience}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
