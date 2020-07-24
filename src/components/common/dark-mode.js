import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class DarkMode extends React.Component {
  toggleDark = () => {
    // const checkbox = document.getElementById("dark-checkbox")
    // console.log(checkbox.checked)
    // console.log(checkbox)
    // return checkbox.toggleAttribute("checked")
    
    
    // let event = new Event('change', { checked: true })
    // return checkbox.dispatchEvent(event)
  }

  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="darkmode">
            <img src="../../../icons/day-night.svg" alt="day-night" />
            <input
              id="dark-checkbox"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              // checked={theme === "dark"}
            />
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode
