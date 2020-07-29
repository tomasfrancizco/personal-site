import React from "react"

const Footer = () => {
  return (
    <footer id="footer-container">
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
  )
}

export default Footer
