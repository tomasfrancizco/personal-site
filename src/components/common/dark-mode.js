import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
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
                <div id="ball" className={theme}></div>
              </div>
            </div>
            <span className="darkmode-tooltip">
              {theme === "dark" ? "DARK" : "LIGHT"}
            </span>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
