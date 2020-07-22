import { Link } from "gatsby"
import React from "react"
import burgerMenu from "../../../public/icons/burger-menu.png"
import DarkMode from "./dark-mode"

const Header = () => {
  const listItems = document.getElementsByClassName("burger-menu-list-item")
  const list = document.getElementsByClassName("burger-menu-list")
  const icon = document.getElementsByClassName("navbar-icon")
  const toggleMenu = () => {
    if (listItems[0].getAttribute("class") == "burger-menu-list-item") {
      list[0].style.border = "1px solid gray"
      for (let i = 0; i < listItems.length; i++) {
        icon[i].style.visibility = "visible"
        listItems[i].setAttribute("class", "burger-menu-list-item toggle")
      }
    } else {
      list[0].style.border = "0"
      for (let i = 0; i < listItems.length; i++) {
        icon[i].style.visibility = "hidden"
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
        <br />
        <ul className="burger-menu-list">
          <Link to="/#about">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/user.svg"
                alt="about"
              />
              ABOUT
            </li>
          </Link>
          <Link to="/#work">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/work.svg"
                alt="work"
              />
              WORK
            </li>
          </Link>
          <Link to="/#education">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/education.svg"
                alt="education"
              />
              EDUCATION
            </li>
          </Link>
          <Link to="/#skills">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/skills.svg"
                alt="skills"
              />
              SKILLS
            </li>
          </Link>
          <Link to="/#projects">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/projects.svg"
                alt="projects"
              />
              PROJECTS
            </li>
          </Link>
          <Link to="/#achievements">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/achievements.svg"
                alt="achievements"
              />
              ACHIEVEMENTS
            </li>
          </Link>
          <Link to="/#photography">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/photography.svg"
                alt="photography"
              />
              PHOTOGRAPHY
            </li>
          </Link>
          <Link to="/#contact">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <img
                className="navbar-icon"
                src="../../icons/contact.svg"
                alt="contact"
              />
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      <div id="sidebar-cont">
        <div id="sidebar">
          <DarkMode />
          <div className="tooltips">
            <Link to="/#cover" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/user.svg"
                alt="about"
              />
            </Link>
            <span className="tooltiptext">About</span>
          </div>
          <div className="tooltips">
            <Link to="/#work" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/work.svg"
                alt="work"
              />
            </Link>
            <span className="tooltiptext">Work</span>
          </div>
          <div className="tooltips">
            <Link to="/#education" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/education.svg"
                alt="education"
              />
            </Link>
            <span className="tooltiptext">Education</span>
          </div>
          <div className="tooltips">
            <Link to="/#skills" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/skills.svg"
                alt="skills"
              />
            </Link>
            <span className="tooltiptext">Skills</span>
          </div>
          <div className="tooltips">
            <Link to="/#projects" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/projects.svg"
                alt="projects"
              />
            </Link>
            <span className="tooltiptext">Projects</span>
          </div>
          <div className="tooltips">
            <Link to="/#achievements" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/achievements.svg"
                alt="achievements"
              />
            </Link>
            <span className="tooltiptext">Achievements</span>
          </div>
          <div className="tooltips">
            <Link to="/#photography" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/photography.svg"
                alt="photography"
              />
            </Link>
            <span className="tooltiptext">Photography</span>
          </div>
          <div className="tooltips">
            <Link to="/#contact" className="sidebar-link">
              <img
                className="sidebar-icon"
                src="../../icons/contact.svg"
                alt="contact"
              />
            </Link>
            <span className="tooltiptext">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
