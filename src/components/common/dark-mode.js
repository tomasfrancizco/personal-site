import React, { useState, useEffect } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import sun from "../../images/sun.svg"
import moon from "../../images/moon.svg"

const DarkMode = () => {
  const [darkTheme, setDarkTheme] = useState(null)

  useEffect(() => {
    const theme = window.document.body.getAttribute("class")
    theme === "dark" ? setDarkTheme(sun) : setDarkTheme(moon)
  }, [])

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <div>
            <div
              className="darkmode"
              onClick={() => {
                toggleTheme(theme === "light" ? "dark" : "light")
                setDarkTheme(theme === "light" ? sun : moon)
              }}
              role="button"
              tabIndex="-1"
            >
              <div id="toggle-container">
                <div id="ball">
                  {" "}
                  <img id="ball-img" src={darkTheme} alt="darkmode" />
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeToggler>
  )
}

export default DarkMode
