import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
    <div id="sidebar">
      <Link to="/#cover" className="sidebar-link"><img title="About" src="../../icons/about.png" alt="about"/></Link>
      <Link to="/#work" className="sidebar-link"><img title="Work" src="../../icons/work.png" alt="work"/></Link>
      <Link to="/#education" className="sidebar-link"><img title="Education" src="../../icons/education.png" alt="education"/></Link>
      <Link to="/#skills" className="sidebar-link"><img title="Skills" src="../../icons/skills.png" alt="skills"/></Link>
      <Link to="/#projects" className="sidebar-link"><img title="Projects" src="../../icons/projects.png" alt="projects"/></Link>
      <Link to="/#languages" className="sidebar-link"><img title="Languages" src="../../icons/languages.png" alt="languages"/></Link>
      <Link to="/#achievements" className="sidebar-link"><img title="Achievements" src="../../icons/achievements.png" alt="achievements"/></Link>
      <Link to="/#certifications" className="sidebar-link"><img title="Certifications" src="../../icons/certifications.png" alt="certifications"/></Link>
      <Link to="/#photography" className="sidebar-link"><img title="Photography" src="../../icons/photography.png" alt="photography"/></Link>
      <Link to="/#resume" className="sidebar-link"><img title="Resume" src="../../icons/resume.png" alt="resume"/></Link>
      <Link to="/#contact" className="sidebar-link"><img title="Contact" src="../../icons/contact.png" alt="contact"/></Link>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
