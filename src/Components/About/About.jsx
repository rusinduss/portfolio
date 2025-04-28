import "./About.css";
import aboutImage from "../../assets/aboutImage.png";
import cursorIcon from "../../assets/cursorIcon.png";
import serverIcon from "../../assets/serverIcon.png";

export const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h3 className="abt-title">About</h3>
      </div>
      <div className="abt-content">
        <img src={aboutImage} className="abt-img" />
        <div className="abt-description">
          <div className="front">
            <img src={cursorIcon} />
            <div className="inner-dtl">
              <h3>FrontEnd Developer</h3>
              <p>Mostly involed in React based projects</p>
            </div>
          </div>

          <div className="back">
            <img src={serverIcon}></img>
            <div className="inner-dtl">
              <h3>Backend Developer</h3>
              <p>Mostly involed in SpringBoot based projects</p>
            </div>
          </div>

            
          
        </div>
      </div>
    </div>
  );
};
