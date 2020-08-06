import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  state = {
    condition: window.localStorage.theme,
  }

  handleClick = () => {
    const darkhtml = document.getElementsByClassName("darkmode-tooltip")[0];
    this.setState({
      condition: window.localStorage.theme,
    })
    return this.state.condition == "dark" ? darkhtml.innerHTML = "LIGHT" : darkhtml.innerHTML = "DARK"
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            className="darkmode"
            onClick={() => {
              toggleTheme(theme === "light" ? "dark" : "light")
              this.handleClick()
            }}
          >
            <div id="toggle-container">
              <div
                id="ball"
                className={
                  this.state.condition === "dark" ? "light-off" : "light"
                }
              ></div>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
