import "./Contact.css"

export const Contact = () => {
  return (
        <footer id="contact" className="contact-container">
            <div className="contact-text">
                <h2>Contact</h2>
                <p> Feel free to reach out!</p>
            </div>
            <ul className="contacts-links">
                <li className="contact-link">
                    <img src="src/assets/contact/emailIcon.png" alt="email icon"></img>
                    <a href="mailto:rusindunm@gmail.com">rusindunm@gmail.com</a>
                </li>
                <li className="contact-link">
                    <img src="src/assets/contact/linkedinIcon.png" alt="linkedin icon"></img>
                    <a href="mailto:rusindunm@gmail.com">linkedin.com</a>
                </li>
                <li className="contact-link">
                    <img src="src/assets/contact/githubIcon.png" alt="github icon"></img>
                    <a href="mailto:rusindunm@gmail.com">github.com</a>
                </li>
            </ul>
        </footer>
  )
}
