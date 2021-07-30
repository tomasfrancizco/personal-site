import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div id="footer-container">
      <Link to="" uk-totop="true" id="totop" uk-tooltip="title: Back to Top; pos: top"></Link>
      <footer>
        © {new Date().getFullYear()}, hecho con cariño y{` `}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        por Tomás Freire Knight.
      </footer>
    </div>
  )
}

export default Footer
