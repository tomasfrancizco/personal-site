import React, { useEffect } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import sun from "../../images/sun.svg"
import moon from "../../images/moon.svg"

const DarkMode = () => {

  useEffect(() => {
    const theme = window.document.body.getAttribute("class");
    const ball = window.document.getElementById("ball-img");
    theme === "dark" ? ball.src = sun : ball.src = moon;
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
              }}
              role="button"
              tabIndex="-1"
            >
              <div id="toggle-container">
                <div id="ball">
                  {" "}
                  <img
                    id="ball-img"
                    src={theme === "dark" ? sun : moon}
                    alt="darkmode"
                  />
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
