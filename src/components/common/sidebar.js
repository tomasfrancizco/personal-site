import { Link } from "gatsby"
import React from "react"
import burgerMenu from "../../../public/icons/burger-menu.png"
import DarkMode from "./dark-mode"

// import about from "../../../public/icons/user.svg"

const Header = () => {
  const listItems = document.getElementsByClassName("burger-menu-list-item")
  const list = document.getElementsByClassName("burger-menu-list")
  const icon = document.getElementsByClassName("navbar-icon")
  const toggleMenu = () => {
    if (listItems[0].getAttribute("class") == "burger-menu-list-item") {
      list[0].style.border = "1px solid gray"
      for (let i = 0; i < listItems.length; i++) {
        icon[i].style.visibility = "visible"
        listItems[i].setAttribute("class", "burger-menu-list-item toggle")
      }
    } else {
      list[0].style.border = "0"
      for (let i = 0; i < listItems.length; i++) {
        icon[i].style.visibility = "hidden"
        listItems[i].setAttribute("class", "burger-menu-list-item")
      }
    }
  }

  return (
    <div id="navbars">
      <div id="navbar">
        <img
          id="burger-menu"
          src={burgerMenu}
          alt="burger-menu"
          onClick={toggleMenu}
        />
        <br />
        <ul className="burger-menu-list">
          <Link to="/#about">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 483.5 483.5">
                <g>
                  <path
                    d="M430.75,471.2v-67.8c0-83.9-55-155.2-130.7-179.8c36.4-20.5,61.1-59.5,61.1-104.2c0-65.8-53.6-119.4-119.4-119.4
s-119.4,53.6-119.4,119.4c0,44.7,24.7,83.7,61.1,104.2c-75.8,24.6-130.7,95.9-130.7,179.8v67.8c0,6.8,5.5,12.3,12.3,12.3h353.6
C425.25,483.4,430.75,478,430.75,471.2z M146.75,119.4c0-52.3,42.6-94.9,94.9-94.9s94.9,42.6,94.9,94.9s-42.6,94.9-94.9,94.9
S146.75,171.7,146.75,119.4z M406.25,458.9H77.05v-55.6c0-90.7,73.8-164.6,164.6-164.6s164.6,73.8,164.6,164.6V458.9z"
                  />
                </g>
              </svg>
              ABOUT
            </li>
          </Link>
          <Link to="/#work">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 511.996 511.996">
                <g>
                  <path d="m374.284 103.284v-19.428c0-27.256-22.174-49.43-49.43-49.43h-137.712c-27.255 0-49.43 22.174-49.43 49.43v19.428h-137.712v374.285h511.996v-374.285zm-206.572-19.428c0-10.714 8.716-19.43 19.43-19.43h137.712c10.713 0 19.43 8.716 19.43 19.43v19.428h-176.572zm314.284 49.428v50.199l-225.998 130.48-225.998-130.48v-50.199zm-451.996 314.285v-229.445l225.998 130.48 225.998-130.48v229.446h-451.996z" />
                  <path d="m221.569 204.698h68.857v30h-68.857z" />
                </g>
              </svg>
              WORK
            </li>
          </Link>
          <Link to="/#education">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 512 512">
                <g>
                  <path d="m391 271.005v-80.23l120.967-53.473-255.973-137.22-255.485 137.204 120.491 53.473v80.246zm-30-30h-210v-55.109l105-52.5 105 52.5zm-104.994-206.877 187.626 100.581-62.59 27.667-125.042-62.522-125.022 62.511-62.287-27.642z" />
                  <path d="m467 301.005c-8.218 0-88.918 15.158-212 14.994-124.778-.166-202.041-14.994-210-14.994-13.991 0-26.29 9.186-34.629 25.865-6.688 13.375-10.371 30.825-10.371 49.135s3.683 35.76 10.371 49.135c8.34 16.679 20.638 25.865 34.629 25.865 5.29 0 68.342-11.25 166-14.226v75.139l45-45 45 45v-75.139c100.996 3.078 158.863 14.226 166 14.226 13.991 0 26.29-9.186 34.629-25.865 6.688-13.375 10.371-30.825 10.371-49.135s-3.683-35.76-10.371-49.135c-8.339-16.679-20.638-25.865-34.629-25.865zm-429.797 110.718c-4.578-9.155-7.203-22.174-7.203-35.718s2.625-26.563 7.203-35.718c3.334-6.667 6.37-8.755 7.447-9.187 3.33.472 6.652 6.199 8.146 9.187 4.579 9.155 7.204 22.174 7.204 35.718s-2.625 26.563-7.203 35.718c-1.505 3.01-4.821 8.716-8.148 9.187-1.079-.434-4.113-2.523-7.446-9.187zm46.319 4.215c4.203-11.751 6.478-25.573 6.478-39.933 0-14.351-2.272-28.163-6.47-39.909 42.381 4.884 84.907 7.952 127.47 9.224v61.444c-42.696 1.275-85.378 4.35-127.478 9.174zm172.478 8.554-15 15v-93.567c5 .05 25 .05 30 0v93.567zm45-79.173c42.563-1.272 85.088-4.34 127.47-9.224-4.198 11.746-6.47 25.559-6.47 39.909 0 14.36 2.275 28.182 6.478 39.933-42.1-4.824-84.782-7.899-127.478-9.174zm173.797 66.404c-3.332 6.664-6.367 8.753-7.446 9.187-3.327-.471-6.644-6.178-8.148-9.187-4.578-9.156-7.203-22.174-7.203-35.718s2.625-26.563 7.203-35.718c1.496-2.992 4.817-8.716 8.146-9.187 1.077.432 4.113 2.52 7.447 9.187 4.578 9.156 7.203 22.174 7.203 35.718s-2.624 26.563-7.202 35.718z" />
                </g>
              </svg>
              EDUCATION
            </li>
          </Link>
          <Link to="/#skills">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 512 512">
                <g>
                  <path
                    d="M299.718,97.225c-22.442-36.06-62.432-60.116-107.941-60.116c-70.056,0-127.051,56.995-127.051,127.051
			c0,49.13,28.033,91.833,68.942,112.963C56.242,301.795,0,374.395,0,459.891v15h383.554v-15c0-15.375-1.831-30.329-5.264-44.667
			H512v-87.6H330.52c-9.897-10.377-20.951-19.639-32.939-27.6H512v-87.6H309.295c3.609-8.755,6.266-17.998,7.843-27.6H512V97.225
			H299.718z M94.726,164.16c0-53.514,43.537-97.051,97.051-97.051c53.514,0,97.051,43.537,97.051,97.051
			c0,53.514-43.537,97.051-97.051,97.051C138.263,261.211,94.726,217.674,94.726,164.16z M132.465,444.891H30.69
			c5.643-61.082,45.392-112.425,99.969-134.778l21.738,39.173L132.465,444.891z M163.11,444.891l17.304-83.005h22.725l17.304,83.005
			H163.11z M206.504,331.886H177.05l-17.002-30.639c10.264-2.049,20.872-3.133,31.729-3.133c10.857,0,21.465,1.083,31.729,3.133
			L206.504,331.886z M431,357.625h51v27.6h-51V357.625z M401,357.625v27.6h-32.58c-4.085-9.627-8.943-18.85-14.481-27.6H401z
			 M352.865,444.891H251.089l-19.931-95.605l21.738-39.173C307.473,332.466,347.222,383.81,352.865,444.891z M463,242.424h19v27.6
			h-19V242.424z M433,242.425v27.6H261.942c11.363-7.556,21.449-16.886,29.851-27.6H433z M369,154.825h-50.516
			c-0.695-9.528-2.448-18.766-5.138-27.6H369V154.825z M482,154.825h-83v-27.6h83V154.825z"
                  />
                </g>
              </svg>
              SKILLS
            </li>
          </Link>
          <Link to="/#projects">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 512 512">
                <path d="m512 401.912v-371.888h-241v-30.024h-30v30.024h-241v371.888h241v80.088h-105.096v30h240.192v-30h-105.096v-80.088zm-482-341.888h452v311.888h-452z" />
                <path d="m60.036 311.864h391.928v30h-391.928z" />
                <path d="m60.036 251.816h70.032v30h-70.032z" />
                <path d="m60.036 191.768h70.032v30h-70.032z" />
                <path d="m60.036 131.72h70.032v30h-70.032z" />
                <path d="m381.932 251.816h70.032v30h-70.032z" />
                <path d="m381.932 191.768h70.032v30h-70.032z" />
                <path d="m381.932 131.72h70.032v30h-70.032z" />
                <path d="m256 281.816c52.877 0 95.896-43.019 95.896-95.896s-43.019-95.896-95.896-95.896-95.896 43.019-95.896 95.896 43.019 95.896 95.896 95.896zm0-30c-12.745 0-24.649-3.648-34.744-9.939l40.957-40.957h57.94c-6.81 29.129-32.979 50.896-64.153 50.896zm64.153-80.896h-49.153v-49.153c24.307 5.683 43.47 24.846 49.153 49.153zm-79.153-49.153v57.94l-40.957 40.957c-6.291-10.095-9.939-21.999-9.939-34.744 0-31.174 21.767-57.343 50.896-64.153z" />
              </svg>
              PROJECTS
            </li>
          </Link>
          <Link to="/#achievements">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 488.7 488.7">
                <path
                  d="M244.3,100C164.7,100,100,164.7,100,244.3c0,79.5,64.7,144.3,144.3,144.3s144.3-64.8,144.3-144.3
			C388.6,164.7,323.9,100,244.3,100z M244.3,364.1c-66,0-119.8-53.7-119.8-119.8c0-66,53.7-119.8,119.8-119.8
			s119.8,53.8,119.8,119.8S310.3,364.1,244.3,364.1z"
                />
                <path
                  d="M467.2,252.1c-4.1-5.6-4.2-13.3-0.1-19l8.5-12.1c6.7-9.5,9.1-21.5,6.4-32.9s-10.1-21.1-20.4-26.6l-13-7
			c-6.2-3.3-9.5-10.1-8.4-17l2.5-14.6c1.9-11.5-1.2-23.3-8.5-32.4c-7.4-9.1-18.3-14.6-29.9-15.1l-14.8-0.6c-7-0.3-13-5-14.9-11.7
			L370.3,49c-5-17.3-21.1-29.4-39.2-29.4c-5.5,0-11,1.1-16.1,3.3l-13.6,5.8c-6.3,2.7-14,1-18.5-4.1l-9.9-11C265.3,5,254.2,0,242.7,0
			c-11.8,0-23,5.1-30.8,14l-9.6,11.2c-4.5,5.2-12.1,7-18.5,4.4L170.1,24c-5-2-10.2-3.1-15.5-3.1c-18.3,0-34.5,12.3-39.3,30
			l-3.9,14.3c-1.8,6.7-7.8,11.5-14.8,11.9L81.9,78c-11.6,0.6-22.5,6.3-29.7,15.5s-10.1,21.1-8,32.5l2.7,14.5
			c1.3,6.9-2,13.8-8.1,17.2l-12.9,7.2c-10.2,5.7-17.5,15.5-20,26.9s0,23.4,6.9,32.8l8.7,11.9c4.1,5.6,4.2,13.3,0.1,19l-8.5,12.1
			c-6.7,9.5-9.1,21.5-6.4,32.9s10.1,21.1,20.4,26.6l13,7c6.2,3.3,9.5,10.1,8.4,17L46,365.7c-1.9,11.5,1.2,23.3,8.5,32.4
			c7.4,9.1,18.3,14.6,29.9,15.1l14.8,0.6c7,0.3,13,5,14.9,11.7l4.1,14.2c5,17.3,21.1,29.4,39.2,29.4c5.5,0,11-1.1,16.1-3.3l13.6-5.8
			c6.3-2.7,14-1,18.5,4.1l9.9,11c7.7,8.6,18.8,13.6,30.3,13.6c11.8,0,23-5.1,30.8-14l9.7-11.2c4.5-5.2,12.1-7,18.5-4.4l13.7,5.6
			c5,2,10.2,3.1,15.5,3.1c18.3,0,34.5-12.3,39.3-30l3.9-14.3c1.8-6.7,7.8-11.5,14.8-11.9l14.8-0.9c11.7-0.7,22.5-6.3,29.7-15.5
			s10.1-21,8-32.5l-2.7-14.5c-1.3-6.9,2-13.8,8.1-17.2l12.9-7.2c10.2-5.7,17.5-15.5,20-26.9s0-23.4-6.9-32.8L467.2,252.1z
			 M458.9,291.6c-1,4.6-3.9,8.4-8,10.7l-12.9,7.2c-15.3,8.5-23.5,25.8-20.3,43l2.7,14.5c0.9,4.7-0.3,9.3-3.2,13
			c-2.9,3.7-7.1,5.9-11.9,6.2l-14.7,0.9c-17.5,1-32.4,13-37,29.9l-3.9,14.2c-1.9,7.1-8.4,12-15.7,12c-2.1,0-4.2-0.4-6.2-1.2
			l-13.7-5.6c-5-2-10.2-3.1-15.5-3.1c-11.8,0-23,5.1-30.8,14l-9.7,11.1c-3.1,3.6-7.5,5.6-12.3,5.6c-4.7,0-9-1.9-12.1-5.4l-9.9-11
			C216.1,439,205,434,193.4,434c-5.6,0-11,1.1-16.1,3.3l-13.6,5.8c-2.1,0.9-4.2,1.3-6.4,1.3c-7.2,0-13.6-4.8-15.6-11.7l-4.1-14.2
			c-4.9-16.8-19.9-28.6-37.4-29.4l-14.8-0.6c-4.7-0.2-9-2.3-11.9-6c-3-3.7-4.2-8.3-3.4-12.9l2.5-14.6c2.9-17.3-5.5-34.4-21-42.7
			l-13-7c-4.2-2.2-7.1-6-8.2-10.6c-1.1-4.6-0.2-9.3,2.6-13.1l8.5-12.1c10.1-14.3,10-33.4-0.4-47.6L32.4,210
			c-2.8-3.8-3.8-8.5-2.7-13.1c1-4.6,3.9-8.4,8-10.7l12.9-7.2c15.3-8.5,23.5-25.8,20.3-43l-2.6-14.4c-0.9-4.7,0.3-9.3,3.2-13
			c2.9-3.7,7.1-5.9,11.9-6.2l14.7-0.9c17.5-1,32.3-13,37-29.9l3.9-14.3c1.9-7.1,8.4-12,15.7-12c2.1,0,4.2,0.4,6.2,1.2l13.7,5.6
			c5,2,10.2,3.1,15.5,3.1c11.8,0,23-5.1,30.8-14l9.7-11.1c3.1-3.6,7.5-5.6,12.3-5.6c4.7,0,9,1.9,12.1,5.4l9.9,11
			c7.7,8.6,18.8,13.6,30.4,13.6c5.6,0,11-1.1,16.1-3.3l13.6-5.8c2.1-0.9,4.2-1.3,6.4-1.3c7.2,0,13.6,4.8,15.6,11.7l4.1,14.2
			c4.9,16.8,19.9,28.6,37.4,29.4l14.8,0.6c4.7,0.2,9,2.3,12,6s4.2,8.3,3.4,12.9l-2.5,14.6c-2.9,17.3,5.5,34.4,21,42.7l13,7
			c4.2,2.2,7.1,6,8.2,10.6s0.2,9.3-2.5,13.1l-8.5,12.1c-10.1,14.3-10,33.4,0.4,47.6l8.7,11.9C458.9,282.3,459.9,287,458.9,291.6z"
                />
                <path
                  d="M279.8,204.6l-53.6,53.3l-17.4-17.5c-4.8-4.8-12.5-4.8-17.3,0c-4.8,4.8-4.8,12.5-0.1,17.3l26.1,26.2
			c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.3-1.3,8.6-3.6l62.3-61.9c4.8-4.8,4.8-12.5,0.1-17.3C292.4,199.9,284.6,199.9,279.8,204.6z"
                />
              </svg>
              ACHIEVEMENTS
            </li>
          </Link>
          <Link to="/#photography">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 510 510">
                <g>
                  <path d="m210 74.439-25 60h-65v-60h-120v60 15 286.121h510v-361.121zm-5 90 25-60h250v90h-62.557c-20.545-27.307-53.216-45-89.943-45-38.293 0-72.172 19.236-92.5 48.548v-3.548h-85v-30zm205 97.5c0 45.49-37.01 82.5-82.5 82.5s-82.5-37.01-82.5-82.5 37.01-82.5 82.5-82.5 82.5 37.01 82.5 82.5zm-380-157.5h60v30h-60zm0 60h90v241.121h-90zm120 241.122v-181.122h71.435c-4.161 11.735-6.435 24.356-6.435 37.5 0 62.032 50.468 112.5 112.5 112.5s112.5-50.467 112.5-112.5c0-13.144-2.273-25.765-6.435-37.5h46.435v181.121h-330z" />
                  <path d="m420 134.439h30v30h-30z" />
                  <path d="m327.5 209.439c-28.948 0-52.5 23.552-52.5 52.5s23.552 52.5 52.5 52.5 52.5-23.552 52.5-52.5-23.552-52.5-52.5-52.5zm0 75c-12.406 0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5 22.5 10.094 22.5 22.5-10.094 22.5-22.5 22.5z" />
                </g>
              </svg>
              PHOTOGRAPHY
            </li>
          </Link>
          <Link to="/#contact">
            <li className="burger-menu-list-item" onClick={toggleMenu}>
              <svg className="navbar-icon" viewBox="0 0 512 512">
                <g>
                  <g>
                    <rect x="27.688" y="132.092" width="58.801" height="30" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="27.688" y="252.092" width="58.801" height="30" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect y="192.092" width="86.49" height="30" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M116.489,132.095v247.813H512V132.095H116.489z M448.25,162.095l-134.005,91.088L180.24,162.095H448.25z M482,349.909
			H146.489v-174.48l167.755,114.029L482,175.429V349.909z"
                    />
                  </g>
                </g>
              </svg>
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      <div id="sidebar-cont">
        <div id="sidebar">
          <DarkMode />
          <div className="tooltips">
            <Link to="/#cover" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 483.5 483.5">
                <g>
                  <path
                    d="M430.75,471.2v-67.8c0-83.9-55-155.2-130.7-179.8c36.4-20.5,61.1-59.5,61.1-104.2c0-65.8-53.6-119.4-119.4-119.4
s-119.4,53.6-119.4,119.4c0,44.7,24.7,83.7,61.1,104.2c-75.8,24.6-130.7,95.9-130.7,179.8v67.8c0,6.8,5.5,12.3,12.3,12.3h353.6
C425.25,483.4,430.75,478,430.75,471.2z M146.75,119.4c0-52.3,42.6-94.9,94.9-94.9s94.9,42.6,94.9,94.9s-42.6,94.9-94.9,94.9
S146.75,171.7,146.75,119.4z M406.25,458.9H77.05v-55.6c0-90.7,73.8-164.6,164.6-164.6s164.6,73.8,164.6,164.6V458.9z"
                  />
                </g>
              </svg>
            </Link>
            <span className="tooltiptext">About</span>
          </div>
          <div className="tooltips">
            <Link to="/#work" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 511.996 511.996">
                <g>
                  <path d="m374.284 103.284v-19.428c0-27.256-22.174-49.43-49.43-49.43h-137.712c-27.255 0-49.43 22.174-49.43 49.43v19.428h-137.712v374.285h511.996v-374.285zm-206.572-19.428c0-10.714 8.716-19.43 19.43-19.43h137.712c10.713 0 19.43 8.716 19.43 19.43v19.428h-176.572zm314.284 49.428v50.199l-225.998 130.48-225.998-130.48v-50.199zm-451.996 314.285v-229.445l225.998 130.48 225.998-130.48v229.446h-451.996z" />
                  <path d="m221.569 204.698h68.857v30h-68.857z" />
                </g>
              </svg>
            </Link>
            <span className="tooltiptext">Work</span>
          </div>
          <div className="tooltips">
            <Link to="/#education" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 512 512">
                <g>
                  <path d="m391 271.005v-80.23l120.967-53.473-255.973-137.22-255.485 137.204 120.491 53.473v80.246zm-30-30h-210v-55.109l105-52.5 105 52.5zm-104.994-206.877 187.626 100.581-62.59 27.667-125.042-62.522-125.022 62.511-62.287-27.642z" />
                  <path d="m467 301.005c-8.218 0-88.918 15.158-212 14.994-124.778-.166-202.041-14.994-210-14.994-13.991 0-26.29 9.186-34.629 25.865-6.688 13.375-10.371 30.825-10.371 49.135s3.683 35.76 10.371 49.135c8.34 16.679 20.638 25.865 34.629 25.865 5.29 0 68.342-11.25 166-14.226v75.139l45-45 45 45v-75.139c100.996 3.078 158.863 14.226 166 14.226 13.991 0 26.29-9.186 34.629-25.865 6.688-13.375 10.371-30.825 10.371-49.135s-3.683-35.76-10.371-49.135c-8.339-16.679-20.638-25.865-34.629-25.865zm-429.797 110.718c-4.578-9.155-7.203-22.174-7.203-35.718s2.625-26.563 7.203-35.718c3.334-6.667 6.37-8.755 7.447-9.187 3.33.472 6.652 6.199 8.146 9.187 4.579 9.155 7.204 22.174 7.204 35.718s-2.625 26.563-7.203 35.718c-1.505 3.01-4.821 8.716-8.148 9.187-1.079-.434-4.113-2.523-7.446-9.187zm46.319 4.215c4.203-11.751 6.478-25.573 6.478-39.933 0-14.351-2.272-28.163-6.47-39.909 42.381 4.884 84.907 7.952 127.47 9.224v61.444c-42.696 1.275-85.378 4.35-127.478 9.174zm172.478 8.554-15 15v-93.567c5 .05 25 .05 30 0v93.567zm45-79.173c42.563-1.272 85.088-4.34 127.47-9.224-4.198 11.746-6.47 25.559-6.47 39.909 0 14.36 2.275 28.182 6.478 39.933-42.1-4.824-84.782-7.899-127.478-9.174zm173.797 66.404c-3.332 6.664-6.367 8.753-7.446 9.187-3.327-.471-6.644-6.178-8.148-9.187-4.578-9.156-7.203-22.174-7.203-35.718s2.625-26.563 7.203-35.718c1.496-2.992 4.817-8.716 8.146-9.187 1.077.432 4.113 2.52 7.447 9.187 4.578 9.156 7.203 22.174 7.203 35.718s-2.624 26.563-7.202 35.718z" />
                </g>
              </svg>
            </Link>
            <span className="tooltiptext">Education</span>
          </div>
          <div className="tooltips">
            <Link to="/#skills" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 512 512">
                <g>
                  <path
                    d="M299.718,97.225c-22.442-36.06-62.432-60.116-107.941-60.116c-70.056,0-127.051,56.995-127.051,127.051
			c0,49.13,28.033,91.833,68.942,112.963C56.242,301.795,0,374.395,0,459.891v15h383.554v-15c0-15.375-1.831-30.329-5.264-44.667
			H512v-87.6H330.52c-9.897-10.377-20.951-19.639-32.939-27.6H512v-87.6H309.295c3.609-8.755,6.266-17.998,7.843-27.6H512V97.225
			H299.718z M94.726,164.16c0-53.514,43.537-97.051,97.051-97.051c53.514,0,97.051,43.537,97.051,97.051
			c0,53.514-43.537,97.051-97.051,97.051C138.263,261.211,94.726,217.674,94.726,164.16z M132.465,444.891H30.69
			c5.643-61.082,45.392-112.425,99.969-134.778l21.738,39.173L132.465,444.891z M163.11,444.891l17.304-83.005h22.725l17.304,83.005
			H163.11z M206.504,331.886H177.05l-17.002-30.639c10.264-2.049,20.872-3.133,31.729-3.133c10.857,0,21.465,1.083,31.729,3.133
			L206.504,331.886z M431,357.625h51v27.6h-51V357.625z M401,357.625v27.6h-32.58c-4.085-9.627-8.943-18.85-14.481-27.6H401z
			 M352.865,444.891H251.089l-19.931-95.605l21.738-39.173C307.473,332.466,347.222,383.81,352.865,444.891z M463,242.424h19v27.6
			h-19V242.424z M433,242.425v27.6H261.942c11.363-7.556,21.449-16.886,29.851-27.6H433z M369,154.825h-50.516
			c-0.695-9.528-2.448-18.766-5.138-27.6H369V154.825z M482,154.825h-83v-27.6h83V154.825z"
                  />
                </g>
              </svg>
            </Link>
            <span className="tooltiptext">Skills</span>
          </div>
          <div className="tooltips">
            <Link to="/#projects" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 512 512">
                <path d="m512 401.912v-371.888h-241v-30.024h-30v30.024h-241v371.888h241v80.088h-105.096v30h240.192v-30h-105.096v-80.088zm-482-341.888h452v311.888h-452z" />
                <path d="m60.036 311.864h391.928v30h-391.928z" />
                <path d="m60.036 251.816h70.032v30h-70.032z" />
                <path d="m60.036 191.768h70.032v30h-70.032z" />
                <path d="m60.036 131.72h70.032v30h-70.032z" />
                <path d="m381.932 251.816h70.032v30h-70.032z" />
                <path d="m381.932 191.768h70.032v30h-70.032z" />
                <path d="m381.932 131.72h70.032v30h-70.032z" />
                <path d="m256 281.816c52.877 0 95.896-43.019 95.896-95.896s-43.019-95.896-95.896-95.896-95.896 43.019-95.896 95.896 43.019 95.896 95.896 95.896zm0-30c-12.745 0-24.649-3.648-34.744-9.939l40.957-40.957h57.94c-6.81 29.129-32.979 50.896-64.153 50.896zm64.153-80.896h-49.153v-49.153c24.307 5.683 43.47 24.846 49.153 49.153zm-79.153-49.153v57.94l-40.957 40.957c-6.291-10.095-9.939-21.999-9.939-34.744 0-31.174 21.767-57.343 50.896-64.153z" />
              </svg>
            </Link>
            <span className="tooltiptext">Projects</span>
          </div>
          <div className="tooltips">
            <Link to="/#achievements" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 488.7 488.7">
                <path
                  d="M244.3,100C164.7,100,100,164.7,100,244.3c0,79.5,64.7,144.3,144.3,144.3s144.3-64.8,144.3-144.3
			C388.6,164.7,323.9,100,244.3,100z M244.3,364.1c-66,0-119.8-53.7-119.8-119.8c0-66,53.7-119.8,119.8-119.8
			s119.8,53.8,119.8,119.8S310.3,364.1,244.3,364.1z"
                />
                <path
                  d="M467.2,252.1c-4.1-5.6-4.2-13.3-0.1-19l8.5-12.1c6.7-9.5,9.1-21.5,6.4-32.9s-10.1-21.1-20.4-26.6l-13-7
			c-6.2-3.3-9.5-10.1-8.4-17l2.5-14.6c1.9-11.5-1.2-23.3-8.5-32.4c-7.4-9.1-18.3-14.6-29.9-15.1l-14.8-0.6c-7-0.3-13-5-14.9-11.7
			L370.3,49c-5-17.3-21.1-29.4-39.2-29.4c-5.5,0-11,1.1-16.1,3.3l-13.6,5.8c-6.3,2.7-14,1-18.5-4.1l-9.9-11C265.3,5,254.2,0,242.7,0
			c-11.8,0-23,5.1-30.8,14l-9.6,11.2c-4.5,5.2-12.1,7-18.5,4.4L170.1,24c-5-2-10.2-3.1-15.5-3.1c-18.3,0-34.5,12.3-39.3,30
			l-3.9,14.3c-1.8,6.7-7.8,11.5-14.8,11.9L81.9,78c-11.6,0.6-22.5,6.3-29.7,15.5s-10.1,21.1-8,32.5l2.7,14.5
			c1.3,6.9-2,13.8-8.1,17.2l-12.9,7.2c-10.2,5.7-17.5,15.5-20,26.9s0,23.4,6.9,32.8l8.7,11.9c4.1,5.6,4.2,13.3,0.1,19l-8.5,12.1
			c-6.7,9.5-9.1,21.5-6.4,32.9s10.1,21.1,20.4,26.6l13,7c6.2,3.3,9.5,10.1,8.4,17L46,365.7c-1.9,11.5,1.2,23.3,8.5,32.4
			c7.4,9.1,18.3,14.6,29.9,15.1l14.8,0.6c7,0.3,13,5,14.9,11.7l4.1,14.2c5,17.3,21.1,29.4,39.2,29.4c5.5,0,11-1.1,16.1-3.3l13.6-5.8
			c6.3-2.7,14-1,18.5,4.1l9.9,11c7.7,8.6,18.8,13.6,30.3,13.6c11.8,0,23-5.1,30.8-14l9.7-11.2c4.5-5.2,12.1-7,18.5-4.4l13.7,5.6
			c5,2,10.2,3.1,15.5,3.1c18.3,0,34.5-12.3,39.3-30l3.9-14.3c1.8-6.7,7.8-11.5,14.8-11.9l14.8-0.9c11.7-0.7,22.5-6.3,29.7-15.5
			s10.1-21,8-32.5l-2.7-14.5c-1.3-6.9,2-13.8,8.1-17.2l12.9-7.2c10.2-5.7,17.5-15.5,20-26.9s0-23.4-6.9-32.8L467.2,252.1z
			 M458.9,291.6c-1,4.6-3.9,8.4-8,10.7l-12.9,7.2c-15.3,8.5-23.5,25.8-20.3,43l2.7,14.5c0.9,4.7-0.3,9.3-3.2,13
			c-2.9,3.7-7.1,5.9-11.9,6.2l-14.7,0.9c-17.5,1-32.4,13-37,29.9l-3.9,14.2c-1.9,7.1-8.4,12-15.7,12c-2.1,0-4.2-0.4-6.2-1.2
			l-13.7-5.6c-5-2-10.2-3.1-15.5-3.1c-11.8,0-23,5.1-30.8,14l-9.7,11.1c-3.1,3.6-7.5,5.6-12.3,5.6c-4.7,0-9-1.9-12.1-5.4l-9.9-11
			C216.1,439,205,434,193.4,434c-5.6,0-11,1.1-16.1,3.3l-13.6,5.8c-2.1,0.9-4.2,1.3-6.4,1.3c-7.2,0-13.6-4.8-15.6-11.7l-4.1-14.2
			c-4.9-16.8-19.9-28.6-37.4-29.4l-14.8-0.6c-4.7-0.2-9-2.3-11.9-6c-3-3.7-4.2-8.3-3.4-12.9l2.5-14.6c2.9-17.3-5.5-34.4-21-42.7
			l-13-7c-4.2-2.2-7.1-6-8.2-10.6c-1.1-4.6-0.2-9.3,2.6-13.1l8.5-12.1c10.1-14.3,10-33.4-0.4-47.6L32.4,210
			c-2.8-3.8-3.8-8.5-2.7-13.1c1-4.6,3.9-8.4,8-10.7l12.9-7.2c15.3-8.5,23.5-25.8,20.3-43l-2.6-14.4c-0.9-4.7,0.3-9.3,3.2-13
			c2.9-3.7,7.1-5.9,11.9-6.2l14.7-0.9c17.5-1,32.3-13,37-29.9l3.9-14.3c1.9-7.1,8.4-12,15.7-12c2.1,0,4.2,0.4,6.2,1.2l13.7,5.6
			c5,2,10.2,3.1,15.5,3.1c11.8,0,23-5.1,30.8-14l9.7-11.1c3.1-3.6,7.5-5.6,12.3-5.6c4.7,0,9,1.9,12.1,5.4l9.9,11
			c7.7,8.6,18.8,13.6,30.4,13.6c5.6,0,11-1.1,16.1-3.3l13.6-5.8c2.1-0.9,4.2-1.3,6.4-1.3c7.2,0,13.6,4.8,15.6,11.7l4.1,14.2
			c4.9,16.8,19.9,28.6,37.4,29.4l14.8,0.6c4.7,0.2,9,2.3,12,6s4.2,8.3,3.4,12.9l-2.5,14.6c-2.9,17.3,5.5,34.4,21,42.7l13,7
			c4.2,2.2,7.1,6,8.2,10.6s0.2,9.3-2.5,13.1l-8.5,12.1c-10.1,14.3-10,33.4,0.4,47.6l8.7,11.9C458.9,282.3,459.9,287,458.9,291.6z"
                />
                <path
                  d="M279.8,204.6l-53.6,53.3l-17.4-17.5c-4.8-4.8-12.5-4.8-17.3,0c-4.8,4.8-4.8,12.5-0.1,17.3l26.1,26.2
			c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.3-1.3,8.6-3.6l62.3-61.9c4.8-4.8,4.8-12.5,0.1-17.3C292.4,199.9,284.6,199.9,279.8,204.6z"
                />
              </svg>
            </Link>
            <span className="tooltiptext">Achievements</span>
          </div>
          <div className="tooltips">
            <Link to="/#photography" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 510 510">
                <g>
                  <path d="m210 74.439-25 60h-65v-60h-120v60 15 286.121h510v-361.121zm-5 90 25-60h250v90h-62.557c-20.545-27.307-53.216-45-89.943-45-38.293 0-72.172 19.236-92.5 48.548v-3.548h-85v-30zm205 97.5c0 45.49-37.01 82.5-82.5 82.5s-82.5-37.01-82.5-82.5 37.01-82.5 82.5-82.5 82.5 37.01 82.5 82.5zm-380-157.5h60v30h-60zm0 60h90v241.121h-90zm120 241.122v-181.122h71.435c-4.161 11.735-6.435 24.356-6.435 37.5 0 62.032 50.468 112.5 112.5 112.5s112.5-50.467 112.5-112.5c0-13.144-2.273-25.765-6.435-37.5h46.435v181.121h-330z" />
                  <path d="m420 134.439h30v30h-30z" />
                  <path d="m327.5 209.439c-28.948 0-52.5 23.552-52.5 52.5s23.552 52.5 52.5 52.5 52.5-23.552 52.5-52.5-23.552-52.5-52.5-52.5zm0 75c-12.406 0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5 22.5 10.094 22.5 22.5-10.094 22.5-22.5 22.5z" />
                </g>
              </svg>
            </Link>
            <span className="tooltiptext">Photography</span>
          </div>
          <div className="tooltips">
            <Link to="/#contact" className="sidebar-link">
              <svg className="sidebar-icon" viewBox="0 0 512 512">
                <g>
                  <g>
                    <rect x="27.688" y="132.092" width="58.801" height="30" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="27.688" y="252.092" width="58.801" height="30" />
                  </g>
                </g>
                <g>
                  <g>
                    <rect y="192.092" width="86.49" height="30" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M116.489,132.095v247.813H512V132.095H116.489z M448.25,162.095l-134.005,91.088L180.24,162.095H448.25z M482,349.909
			H146.489v-174.48l167.755,114.029L482,175.429V349.909z"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            <span className="tooltiptext">Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
