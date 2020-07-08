import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{" "}
      and love, by Tomás Freire Knight
    </footer>
  )
}

export default Footer
