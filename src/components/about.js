import React from "react"
import Typewriter from "typewriter-effect"
import profileSinFondo from "../images/sinFondo.png"

import daftpunktocatguy from "../images/octodex/daftpunktocat-guy.gif"
import daftpunkttocatthomas from "../images/octodex/daftpunktocat-thomas.gif"
import original from "../images/octodex/original.png"
import oktobercat from "../images/octodex/oktobercat.png"
import orderedList from "../images/octodex/orderedlistocat.png"
import homercat from "../images/octodex/homercat.png"

const About = () => {
  const octoFiles = [
    original,
    oktobercat,
    orderedList,
    homercat,
    daftpunktocatguy,
    daftpunkttocatthomas,
  ]

  const octoImg = octoFiles[Math.floor(Math.random() * octoFiles.length)]

  return (
    <div>
      <div className="section" id="cover">
        <img src={profileSinFondo} alt="TomasFreire" />
        <div id="cover-info">
          <h1>Tomás Freire Knight</h1>
          <Typewriter
            options={{
              loop: true,
              cursor: "_",
            }}
            onInit={typewriter => {
              typewriter
                .typeString("Full Stack Web Developer.")
                .pauseFor(2500)
                .deleteAll()
                .start()
            }}
          />
          <ul id="social-list">
            <li>
              <a href="https://github.com/tomasfrancizco" target="_blank">
                <img src="../../icons/github.png" alt="github" title="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tomas-f-freire-knight-376b0219/"
                target="_blank"
              >
                <img
                  src="../../icons/linkedin.png"
                  alt="linkedin"
                  title="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tomasfrancizco/"
                target="_blank"
              >
                <img
                  src="../../icons/instagram.png"
                  alt="instagram"
                  title="instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section" id="about">
        <img src={octoImg} alt="codercat" />
        <div>
          <h3 className="section-title">ABOUT</h3>
          <p>
            Hi! I'm a sotware developer currently based in Buenos Aires,
            Argentina.
          </p>
          <p>
            I've been working for the last 11 years in the media industry,
            leading Ad Operations teams across Latin America and I'm now looking
            for a role in web development.
          </p>
          <p>
            I handle pretty well the MERN stack and some other cool things as well, you can
            check them out in the <a href="/#skills">skills</a> section.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
