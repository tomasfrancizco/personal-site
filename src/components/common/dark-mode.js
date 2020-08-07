import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  state = {
    condition: window.localStorage.theme,
  }

  handleClick = () => {
    const darkhtml = document.getElementsByClassName("darkmode-tooltip")[0]
    this.setState({
      condition: window.localStorage.theme,
    })
    return this.state.condition == "dark"
      ? (darkhtml.innerHTML = "LIGHT")
      : (darkhtml.innerHTML = "DARK")
  }

  componentDidMount() {
    const darkhtml = document.getElementsByClassName("darkmode-tooltip")[0]
    this.state.condition == "dark"
      ? (darkhtml.innerHTML = "DARK")
      : (darkhtml.innerHTML = "LIGHT")
  }

  render() {
    let { condition } = this.state
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
                className={condition === "dark" ? "light-off" : "light"}
              ></div>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
