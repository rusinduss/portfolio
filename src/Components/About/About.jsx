import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h3 className="abt-title">About</h3>
      </div>
      <div className="abt-content">
        <img src="src/assets/about/aboutImage.png" className="abt-img" />
        <div className="abt-description">
          <div className="front">
            <img src="src/assets/about/cursorIcon.png" />
            <div className="inner-dtl">
              <h3>FrontEnd Developer</h3>
              <p>Mostly involed in React based projects</p>
            </div>
          </div>

          <div className="back">
            <img src="src/assets/about/serverIcon.png"></img>
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
