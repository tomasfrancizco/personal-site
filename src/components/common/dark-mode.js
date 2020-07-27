import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  state = {
    condition: window.localStorage.theme,
  }

  handleClick = () => {
    this.setState({
      condition: window.localStorage.theme,
    })
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme, state }) => (
          <div className="darkmode">
            <div
              id="toggle-container"
              onClick={() => {
                toggleTheme(theme === "light" ? "dark" : "light")
                this.handleClick()
              }}
            >
              <div
                id="ball"
                className={this.state.condition === "dark" ? "light off" : "light"}
              ></div>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
