import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class DarkMode extends React.Component {
  render() {

    console.log("Desde el darkmode")
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkMode