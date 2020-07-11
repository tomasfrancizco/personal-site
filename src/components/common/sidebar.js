import { Link } from "gatsby"
import React from "react"
import burgerMenu from "../../../public/icons/burger-menu.png"

const Header = () => {
  const displayMenu = () => {
    const list = document.getElementsByClassName("burger-menu-list")[0]
    list.style.opacity == "0"
      ? (list.style.opacity = "1")
      : (list.style.opacity = "0")
    list.style.display == "none"
      ? (list.style.display = "block")
      : (list.style.display = "none")
  }

  return (
    <div id="navbars">
      <div id="navbar">
        <img
          id="burger-menu"
          src={burgerMenu}
          alt="burger-menu"
          style={{ width: "50px" }}
          onClick={displayMenu}
        />
        <ul className="burger-menu-list">
          <Link to="/#about" onClick={displayMenu}>
            <li>ABOUT</li>
          </Link>
          <Link to="/#work" onClick={displayMenu}>
            <li>WORK</li>
          </Link>
          <Link to="/#education" onClick={displayMenu}>
            <li>EDUCATION</li>
          </Link>
          <Link to="/#skills" onClick={displayMenu}>
            <li>SKILLS</li>
          </Link>
          <Link to="/#projects" onClick={displayMenu}>
            <li>PROJECTS</li>
          </Link>
          <Link to="/#languages" onClick={displayMenu}>
            <li>LANGUAGES</li>
          </Link>
          <Link to="/#achievements" onClick={displayMenu}>
            <li>ACHIEVEMENTS</li>
          </Link>
          <Link to="/#certifications" onClick={displayMenu}>
            <li>CERTIFICATIONS</li>
          </Link>
          <Link to="/#photography" onClick={displayMenu}>
            <li>PHOTOGRAPHY</li>
          </Link>
          <Link to="/#resume" onClick={displayMenu}>
            <li>RESUME</li>
          </Link>
          <Link to="/#contact" onClick={displayMenu}>
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
      <div id="sidebar-cont">
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
      </div>
    </div>
  )
}

export default Header
