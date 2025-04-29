import "./Contact.css"
import emailIcon from "../../assets/emailIcon.png"
import linkedinIcon from "../../assets/linkedinIcon.png"
import github from "../../assets/githubIcon.png"

export const Contact = () => {
  return (
        <footer id="contact" className="contact-container">
            <div className="contact-text">
                <h2>Contact</h2>
                <p> Feel free to reach out!</p>
            </div>
            <ul className="contacts-links">
                <li className="contact-link">
                <img src={emailIcon} alt="email icon"></img>
                    <a href="mailto:rusindunm@gmail.com">rusindunm@gmail.com</a>
                </li>
                <li className="contact-link">
                    <img src={linkedinIcon} alt="linkedin icon"></img>
                    <a href="https://www.linkedin.com/in/rusindu-meegamuwage-66a59b261">linkedin.com</a>
                </li>
                <li className="contact-link">
                    <img src={github} alt="github icon"></img>
                    <a href="https://github.com/rusinduss">github.com</a>
                </li>
            </ul>
        </footer>
  )
}
