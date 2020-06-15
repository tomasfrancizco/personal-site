import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <div id="sidebar">
    <div className="tooltips">
      <Link to="/#cover" className="sidebar-link">
        <img src="../../icons/about.png" alt="about" />
      </Link>
      <span className="tooltiptext">About</span>
    </div>
    <div className="tooltips">
      <Link to="/#work" className="sidebar-link">
        <img src="../../icons/work.png" alt="work" />
      </Link>
      <span className="tooltiptext">Work</span>
    </div>
    <div className="tooltips">
      <Link to="/#education" className="sidebar-link">
        <img src="../../icons/education.png" alt="education" />
      </Link>
      <span className="tooltiptext">Education</span>
    </div>
    <div className="tooltips">
      <Link to="/#skills" className="sidebar-link">
        <img src="../../icons/skills.png" alt="skills" />
      </Link>
      <span className="tooltiptext">Skills</span>
    </div>
    <div className="tooltips">
      <Link to="/#projects" className="sidebar-link">
        <img src="../../icons/projects.png" alt="projects" />
      </Link>
      <span className="tooltiptext">Projects</span>
    </div>
    <div className="tooltips">
      <Link to="/#languages" className="sidebar-link">
        <img src="../../icons/languages.png" alt="languages" />
      </Link>
      <span className="tooltiptext">Languages</span>
    </div>
    <div className="tooltips">
      <Link to="/#achievements" className="sidebar-link">
        <img src="../../icons/achievements.png" alt="achievements" />
      </Link>
      <span className="tooltiptext">Achievements</span>
    </div>
    <div className="tooltips">
      <Link to="/#certifications" className="sidebar-link">
        <img src="../../icons/certifications.png" alt="certifications" />
      </Link>
      <span className="tooltiptext">Certification</span>
    </div>
    <div className="tooltips">
      <Link to="/#photography" className="sidebar-link">
        <img src="../../icons/photography.png" alt="photography" />
      </Link>
      <span className="tooltiptext">Photography</span>
    </div>
    <div className="tooltips">
      <Link to="/#resume" className="sidebar-link">
        <img src="../../icons/resume.png" alt="resume" />
      </Link>
      <span className="tooltiptext">Resume</span>
    </div>
    <div className="tooltips">
      <Link to="/#contact" className="sidebar-link">
        <img src="../../icons/contact.png" alt="contact" />
      </Link>
      <span className="tooltiptext">Contact</span>
    </div>
  </div>
)

export default Header
