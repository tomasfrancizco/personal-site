import React from "react"

const Skills = () => (
  <div className="section" id="skills">
    <h3 className="section-title">Skills</h3>
    <div className="card-container skills-card-container">
      <div className="card skills-card">
        <h6 className="card-title">Web Development</h6>
        <p className="card-subtitle mb-2 text-muted">(HTML/CSS/Javascript)</p>
      </div>
      <div className="card skills-card">
        <h6 className="card-title">Frontend Javascript Frameworks</h6>
        <p className="card-subtitle mb-2 text-muted">(React/Gatsby)</p>
      </div>
      <div className="card skills-card">
        <h6 className="card-title">Backend Javascript Frameworks</h6>
        <p className="card-subtitle mb-2 text-muted">(Node.js/Express.js/Mongoose)</p>
      </div>
      <div className="card skills-card">
        <h6 className="card-title">Database Management</h6>
        <p className="card-subtitle mb-2 text-muted">(MongoDB/MySQL)</p>
      </div>
      <div className="card skills-card">
        <h6 className="card-title">UX/UI Libraries</h6>
        <p className="card-subtitle mb-2 text-muted">(Bootstrap/UIKit)</p>
      </div>
      <div className="card skills-card">
        <h6 className="card-title">Version Control Systems</h6>
        <p className="card-subtitle mb-2 text-muted">Git/Github</p>
      </div>
    </div>
  </div>
)

export default Skills
