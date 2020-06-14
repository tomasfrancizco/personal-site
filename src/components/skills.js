import React from "react"
import webdev from "../images/skills/web.webp"
import react from "../images/skills/react.png"
import node from "../images/skills/nodejs.webp"
import database from "../images/skills/database.webp"
import uikit from "../images/skills/uikit.png"
import github from "../images/skills/github.png"

const Skills = () => (
  <div className="section" id="skills">
    <h3 className="section-title">SKILLS</h3>
    <div className="card-container skills-card-container">
      <div className="card skills-card">
        <img src={webdev} alt="webdev" />
        <h6 className="card-title">Web Development</h6>
        <p className="card-subtitle text-muted">(HTML/CSS/Javascript)</p>
      </div>
      <div className="card skills-card">
        <img src={react} alt="react" />
        <h6 className="card-title">Frontend Javascript Frameworks</h6>
        <p className="card-subtitle text-muted">(React/Gatsby)</p>
      </div>
      <div className="card skills-card">
        <img src={node} alt="node" />
        <h6 className="card-title">Backend Javascript Frameworks</h6>
        <p className="card-subtitle mb-2 text-muted">
          (Node.js/Express.js/Mongoose)
        </p>
      </div>
      <div className="card skills-card">
        <img src={database} alt="database" />
        <h6 className="card-title">Database Management</h6>
        <p className="card-subtitle mb-2 text-muted">(MongoDB/MySQL/GraphQL)</p>
      </div>
      <div className="card skills-card">
        <img src={uikit} alt="uikit" />
        <h6 className="card-title">UX/UI Libraries</h6>
        <p className="card-subtitle mb-2 text-muted">(Bootstrap/UIKit)</p>
      </div>
      <div className="card skills-card">
        <img src={github} alt="github" />
        <h6 className="card-title">Version Control Systems</h6>
        <p className="card-subtitle mb-2 text-muted">Git/Github</p>
      </div>
    </div>
  </div>
)

export default Skills
