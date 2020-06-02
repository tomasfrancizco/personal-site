import React from "react"
import profile from "../images/tomasFreire.png"

const About = () => (
  <div className="section" id="about">
    <img src={profile} alt="TomasFreire" />
    <div>
      <h1>Tomás Freire Knight</h1>
      <p>Welcome to my new Gatsby site.</p>
      <ul id="social-list">
        <li><a href="https://github.com/tomasfrancizco" target="_blank"><img src="../../icons/github.png" alt="github"/></a></li>
        <li><a href="https://www.linkedin.com/in/tomas-f-freire-knight-376b0219/" target="_blank"><img src="../../icons/linkedin.png" alt="linkedin"/></a></li>
        <li><a href="https://www.instagram.com/tomasfrancizco/" target="_blank"><img src="../../icons/instagram.png" alt="instagram"/></a></li>
      </ul>
    </div>
  </div>
)

export default About
