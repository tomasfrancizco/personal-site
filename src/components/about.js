import React from "react"
// import profilePic from "../images/tomasFreire.png"
import profilePic2 from "../images/tomasFreire2.jpg"
// import profilePic3 from "../images/babyBoss.png"

import nyantocat from "../images/octodex/nyantocat.gif"
import codercat from "../images/octodex/codercat.jpg"
import eclipseCat from "../images/octodex/total-eclipse-of-the-octocat.jpg"
import original from "../images/octodex/original.png"
import defunktocat from "../images/octodex/defunktocat.png"
import hipster from "../images/octodex/hipster-partycat.jpg"
import linktocat from "../images/octodex/linktocat.jpg"
import diaDeMuertos from "../images/octodex/octocat-de-los-muertos.jpg"
import oktobercat from "../images/octodex/oktobercat.png"
import orderedList from "../images/octodex/orderedlistocat.png"
import plumber from "../images/octodex/plumber.jpg"
import homercat from "../images/octodex/homercat.png"
import droidtocat from "../images/octodex/droidtocat.png"
import thanktocat from "../images/octodex/thanktocat.png"
import visionary from "../images/octodex/visionary.jpg"
import daftpunktocatguy from "../images/octodex/daftpunktocat-guy.gif"
import daftpunkttocatthomas from "../images/octodex/daftpunktocat-thomas.gif"
import mummytocat from "../images/octodex/mummytocat.gif"

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
        <img src={profilePic2} alt="TomasFreire" />
        <div id="cover-info">
          <h1 style={{ textAlign: "center" }}>Tomás Freire Knight</h1>
          <p>MERN Stack Web Developer</p>
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
            {/* <li>
              <a href="mailto:tomasfreire@gmail.com" target="_blank">
                <img src="../../icons/gmail.png" alt="gmail" title="gmail" />
              </a>
            </li>
            <li>
              <a href="https://wa.link/x0nbkf" target="_blank">
                <img src="../../icons/whatsapp.png" alt="whatsapp" title="whatsapp" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="section" id="about">
        <img src={octoImg} alt="codercat" />
        <div>
          <h3 className="section-title">About</h3>
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
