import { Link } from "gatsby"
import React from "react"
import burgerMenu from "../../../public/icons/burger-menu.png"

const Header = () => {
  const listItems = document.getElementsByClassName("burger-menu-list-item")
  const toggleMenu = () => {
    console.log("PooP", listItems)
    if (listItems[0].getAttribute("class") == "burger-menu-list-item") {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].setAttribute("class", "burger-menu-list-item toggle")
      }
    } else {
      for (let i = 0; i < listItems.length; i++) {
        listItems[i].setAttribute("class", "burger-menu-list-item")
      }
    }
  }

  return (
    <div id="navbars">
      <div id="navbar">
        <img
          id="burger-menu"
          src={burgerMenu}
          alt="burger-menu"
          onClick={toggleMenu}
        />
        <ul className="burger-menu-list">
          <Link to="/#about">
            <li className="burger-menu-list-item">ABOUT</li>
          </Link>
          <Link to="/#work">
            <li className="burger-menu-list-item">WORK</li>
          </Link>
          <Link to="/#education">
            <li className="burger-menu-list-item">EDUCATION</li>
          </Link>
          <Link to="/#skills">
            <li className="burger-menu-list-item">SKILLS</li>
          </Link>
          <Link to="/#projects">
            <li className="burger-menu-list-item">PROJECTS</li>
          </Link>
          <Link to="/#languages">
            <li className="burger-menu-list-item">LANGUAGES</li>
          </Link>
          <Link to="/#achievements">
            <li className="burger-menu-list-item">ACHIEVEMENTS</li>
          </Link>
          <Link to="/#certifications">
            <li className="burger-menu-list-item">CERTIFICATIONS</li>
          </Link>
          <Link to="/#photography">
            <li className="burger-menu-list-item">PHOTOGRAPHY</li>
          </Link>
          <Link to="/#resume">
            <li className="burger-menu-list-item">RESUME</li>
          </Link>
          <Link to="/#contact">
            <li className="burger-menu-list-item">CONTACT</li>
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
