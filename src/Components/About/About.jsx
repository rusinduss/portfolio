import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <div>
        <h3 className="abt-title">About</h3>
      </div>
      <div className="abt-content">
        <img src="/assets/about/aboutImage.png" className="abt-img" />
        <div className="abt-description">
          <div className="front">
            <img src="/assets/about/cursorIcon.png" />
            <div className="inner-dtl">
              <h3>FrontEnd Developer</h3>
              <p>I am a frontEnd developer</p>
            </div>
          </div>

          <div className="back">
            <img src="/assets/about/serverIcon.png"></img>
            <div className="inner-dtl">
              <h3>Backend Developer</h3>
              <p>I am a backend developer</p>
            </div>
          </div>

          <div className="ui">
            <img src="/assets/about/uiIcon.png" />
            <div className="inner-dtl">
              <h3>UI designer</h3>
              <p>I am a Ui designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
