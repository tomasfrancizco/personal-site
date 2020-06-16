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
              cursor: "_"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
            vestibulum diam, nec placerat dolor. Morbi porta, lacus vitae
            pharetra facilisis, felis augue placerat enim, ac tempus mi augue
            vehicula odio. Suspendisse nec neque pharetra, hendrerit justo.
            <br></br>
            <br />
            Pellentesque erat massa, mollis et hendrerit non, tempor vel velit.
            Maecenas semper libero sit amet turpis pharetra, eu viverra sapien
            luctus. Phasellus eu metus aliquam, semper augue sed, varius odio.
            Aliquam dignissim posuere ante sit amet vestibulum. Aenean nec massa
            risus. Pellentesque semper tincidunt eleifend. Ut rhoncus rutrum
            sollicitudin. Aliquam eget nisl justo. Nulla ultricies commodo
            ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
