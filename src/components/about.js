import React from "react"
import Typewriter from "typewriter-effect"
import profileSinFondo from "../images/sinFondo.png"
import curriculumVitae from "../files/CVSP - Tomas Freire Knight.pdf"

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
                <img src="../../icons/github.svg" alt="github" title="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tomas-f-freire-knight-376b0219/"
                target="_blank"
              >
                <img
                  src="../../icons/linkedin.svg"
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
                  src="../../icons/instagram.svg"
                  alt="instagram"
                  title="instagram"
                />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5491140577446"
                target="_blank"
              >
                <img
                  src="../../icons/whatsapp.svg"
                  alt="whatsapp"
                  title="whatsapp"
                />
              </a>
            </li>
          </ul>
          <div id="podes">
            <p>Podés...</p>
            <div>
              <a href="/#projects">
                <button>Ver mis proyectos</button>
              </a>
              <a href={curriculumVitae} target="_blank">
                <button>Descargar mi CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="continue">
        <a href="/#about">
          <img src="../../icons/arrow.svg" alt="next" id="arrow" />
        </a>
      </div>
      <div className="section" id="about">
        <img
          src={octoImg}
          alt="codercat"
          uk-scrollspy="cls: uk-animation-slide-left; delay: 300"
        />
        <div uk-scrollspy="cls: uk-animation-fade; delay: 300">
          <h3 className="section-title">ABOUT</h3>
          <p>
            Hola! Soy Tomás, un desarrollador web ubicado en Buenos Aires.
            {/* Hi! I'm a sotware developer currently based in Buenos Aires,
            Argentina. */}
          </p>
          <p>
            Los últimos 11 años estuve trabajando en la industria de la TV y
            Publicidad, liderando equipos de operaciones en América Latina.
            Ahora estoy buscando meterme de lleno en el mundo de desarrollo.
            {/* I've been working for the last 11 years in the media industry,
            leading Ad Operations teams across Latin America and I'm now looking
            for a role in web development. */}
          </p>
          <p>
            Me doy maña con el MERN Stack y algunas otras cosas copadas, que
            podés ver en la sección de <a href="/#skills">skills</a>.
            {/* I handle pretty well the MERN stack and some other cool things as well, you can
            check them out in the <a href="/#skills">skills</a> section. */}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
