import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  // state = {
  //   nightMode: () => window.localStorage.theme == "dark" ? "on" : "off"
  // }

  toggleDark = () => {
    // let { nightMode } = this.state
    // const ball = document.getElementById("ball")
    // if (nightMode == "dark") {
    //   ball.setAttribute("class", "light")
    //   this.setState({ nightMode: "off"})
    // } else {
    //   ball.setAttribute("class", "light off")
    //   this.setState({ nightMode: "on"})
    // }
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="darkmode">
            <div id="toggle-container" onClick={this.toggleDark}>
              <div id="ball" className="light"></div>
            </div>
            <img
              src="../../../icons/day-night.svg"
              alt="day-night"
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
            />
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
