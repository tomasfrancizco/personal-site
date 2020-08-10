import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import sun from "../../images/sun.svg"
import moon from "../../images/moon.svg"

class DarkMode extends React.Component {
  componentDidMount() {
    this.setTheme()
  }

  setTheme = () => {
    return document.body.setAttribute("class", "light")
  }

  render() {
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
                    <img src={theme === "dark" ? moon : sun} alt="darkmode" />
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeToggler>
    )
  }
}

export default DarkMode
