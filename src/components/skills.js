import React from "react"
import webdev from "../images/skills/web.svg"
import react from "../images/skills/react.svg"
import node from "../images/skills/nodejs.svg"
import database from "../images/skills/database.svg"
import art from "../images/skills/art.svg"
import github from "../images/skills/github.svg"

const Skills = () => (
  <div className="section" id="skills">
    <h3 className="section-title">SKILLS</h3>
    <div
      className="card-container skills-card-container"
      uk-scrollspy="cls: uk-animation-fade; target: .skills-card; delay: 300"
    >
      <div className="card skills-card">
        <img src={webdev} alt="webdev" />
        <div className="skills-card-info">
          <h6 className="card-title">Web Development</h6>
          <p className="card-subtitle mb-2 text-muted">(HTML/CSS/Javascript)</p>
        </div>
      </div>
      <div className="card skills-card">
        <img src={react} alt="react" />
        <div className="skills-card-info">
          <h6 className="card-title">Frontend Javascript Frameworks</h6>
          <p className="card-subtitle mb-2 text-muted">(React/Gatsby)</p>
        </div>
      </div>
      <div className="card skills-card">
        <img src={node} alt="node" />
        <div className="skills-card-info">
          <h6 className="card-title">Backend Javascript Frameworks</h6>
          <p className="card-subtitle mb-2 text-muted">
            (Node.js/Express.js/Mongoose)
          </p>
        </div>
      </div>
      <div className="card skills-card">
        <img src={database} alt="database" />
        <div className="skills-card-info">
          <h6 className="card-title">Database Management</h6>
          <p className="card-subtitle mb-2 text-muted">
            (MongoDB/MySQL/GraphQL)
          </p>
        </div>
      </div>
      <div className="card skills-card">
        <img src={art} alt="art" />
        <div className="skills-card-info">
          <h6 className="card-title">UX/UI Libraries</h6>
          <p className="card-subtitle mb-2 text-muted">(Bootstrap/UIKit)</p>
        </div>
      </div>
      <div className="card skills-card">
        <img src={github} alt="github" />
        <div className="skills-card-info">
          <h6 className="card-title">Version Control Systems</h6>
          <p className="card-subtitle mb-2 text-muted">Git/Github</p>
        </div>
      </div>
    </div>
  </div>
)

export default Skills
