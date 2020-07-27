import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  state = {
    condition: false,
  }

  handleClick = () => {
    console.log("holiss")
    this.setState({
      condition: !this.state.condition,
    })
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme, state }) => (
          <div className="darkmode">
            <div
              id="toggle-container"
              onClick={() => {toggleTheme(theme === "light" ? "dark" : "light"); this.handleClick()}}
            >
              <div
                id="ball"
                className="light"
                className={this.state.condition ? "light off" : "light"}
              ></div>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
