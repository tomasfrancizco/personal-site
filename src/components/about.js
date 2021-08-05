import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"
// import curriculumVitae from "../files/CVSP - Tomas Freire Knight.pdf"
import { Link, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

import daftpunktocatguy from "../images/octodex/daftpunktocat-guy.gif"
import daftpunkttocatthomas from "../images/octodex/daftpunktocat-thomas.gif"
import original from "../images/octodex/original.png"
import oktobercat from "../images/octodex/oktobercat.png"
import orderedList from "../images/octodex/orderedlistocat.png"

const About = () => {
  const octoFiles = [
    original,
    oktobercat,
    orderedList,
    daftpunktocatguy,
    daftpunkttocatthomas,
  ]

  const [octoImage, setOctoImage] = useState(octoFiles[0])
  const [social, setSocial] = useState("")
  const [showContactame, setShowContactame] = useState("0")

  const handleOverContactame = e => {
    setShowContactame("1")
    setSocial(e.target.id)
  }

  const handleLeaveContactame = () => {
    setShowContactame("0")
  }

  useEffect(() => {
    setOctoImage(octoFiles[Math.floor(Math.random() * octoFiles.length)])
  }, [])

  // const query = useStaticQuery(graphql`
  //   query MyCoverQuery {
  //     allImageSharp(
  //       filter: { fluid: { originalName: { eq: "sinFondo.png" } } }
  //     ) {
  //       edges {
  //         node {
  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <div className="section" id="cover">
        <div id="img-info-container">
          {/* <Img
            fluid={query.allImageSharp.edges[0].node.fluid}
            alt="TomasFreire"
            className="cover-img"
          /> */}
          <div id="cover-info">
            <h1>TOMÁS</h1>
            <h1>FREIRE KNIGHT</h1>
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
            <div id="podes">
              <div>
                <a href="/#projects">
                  <button>proyectos</button>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <button disabled={true}>curriculum</button>
                </a>
              </div>
            </div>
            <ul id="social-list">
              <li
                onMouseOver={e => handleOverContactame(e)}
                onMouseLeave={handleLeaveContactame}
                id="github"
              >
                <a
                  href="https://github.com/tomasfrancizco"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github"
                >
                  <svg viewBox="0 0 438.549 438.549" id="github">
                    <path
                      d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"
                      id="github"
                    />
                  </svg>
                </a>
              </li>
              <li
                onMouseOver={e => handleOverContactame(e)}
                onMouseLeave={handleLeaveContactame}
                id="linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/tomasfreire"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkedin"
                >
                  <svg viewBox="0 0 512 512" id="linkedin">
                    <path
                      id="linkedin"
                      d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
                    />
                  </svg>
                </a>
              </li>
              <li
                onMouseOver={e => handleOverContactame(e)}
                onMouseLeave={handleLeaveContactame}
                id="instagram"
              >
                <a
                  href="https://www.instagram.com/tomasfrancizco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="instagram"
                >
                  <svg viewBox="0 0 512 512" id="instagram">
                    <path
                      id="instagram"
                      d="m305 256c0 27.0625-21.9375 49-49 49s-49-21.9375-49-49 21.9375-49 49-49 49 21.9375 49 49zm0 0"
                    />
                    <path
                      id="instagram"
                      d="m370.59375 169.304688c-2.355469-6.382813-6.113281-12.160157-10.996094-16.902344-4.742187-4.882813-10.515625-8.640625-16.902344-10.996094-5.179687-2.011719-12.960937-4.40625-27.292968-5.058594-15.503906-.707031-20.152344-.859375-59.402344-.859375-39.253906 0-43.902344.148438-59.402344.855469-14.332031.65625-22.117187 3.050781-27.292968 5.0625-6.386719 2.355469-12.164063 6.113281-16.902344 10.996094-4.882813 4.742187-8.640625 10.515625-11 16.902344-2.011719 5.179687-4.40625 12.964843-5.058594 27.296874-.707031 15.5-.859375 20.148438-.859375 59.402344 0 39.25.152344 43.898438.859375 59.402344.652344 14.332031 3.046875 22.113281 5.058594 27.292969 2.359375 6.386719 6.113281 12.160156 10.996094 16.902343 4.742187 4.882813 10.515624 8.640626 16.902343 10.996094 5.179688 2.015625 12.964844 4.410156 27.296875 5.0625 15.5.707032 20.144532.855469 59.398438.855469 39.257812 0 43.90625-.148437 59.402344-.855469 14.332031-.652344 22.117187-3.046875 27.296874-5.0625 12.820313-4.945312 22.953126-15.078125 27.898438-27.898437 2.011719-5.179688 4.40625-12.960938 5.0625-27.292969.707031-15.503906.855469-20.152344.855469-59.402344 0-39.253906-.148438-43.902344-.855469-59.402344-.652344-14.332031-3.046875-22.117187-5.0625-27.296874zm-114.59375 162.179687c-41.691406 0-75.488281-33.792969-75.488281-75.484375s33.796875-75.484375 75.488281-75.484375c41.6875 0 75.484375 33.792969 75.484375 75.484375s-33.796875 75.484375-75.484375 75.484375zm78.46875-136.3125c-9.742188 0-17.640625-7.898437-17.640625-17.640625s7.898437-17.640625 17.640625-17.640625 17.640625 7.898437 17.640625 17.640625c-.003906 9.742188-7.898437 17.640625-17.640625 17.640625zm0 0"
                    />
                    <path
                      id="instagram"
                      d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm146.113281 316.605469c-.710937 15.648437-3.199219 26.332031-6.832031 35.683593-7.636719 19.746094-23.246094 35.355469-42.992188 42.992188-9.347656 3.632812-20.035156 6.117188-35.679687 6.832031-15.675781.714844-20.683594.886719-60.605469.886719-39.925781 0-44.929687-.171875-60.609375-.886719-15.644531-.714843-26.332031-3.199219-35.679687-6.832031-9.8125-3.691406-18.695313-9.476562-26.039063-16.957031-7.476562-7.339844-13.261719-16.226563-16.953125-26.035157-3.632812-9.347656-6.121094-20.035156-6.832031-35.679687-.722656-15.679687-.890625-20.6875-.890625-60.609375s.167969-44.929688.886719-60.605469c.710937-15.648437 3.195312-26.332031 6.828125-35.683593 3.691406-9.808594 9.480468-18.695313 16.960937-26.035157 7.339844-7.480469 16.226563-13.265625 26.035157-16.957031 9.351562-3.632812 20.035156-6.117188 35.683593-6.832031 15.675781-.714844 20.683594-.886719 60.605469-.886719s44.929688.171875 60.605469.890625c15.648437.710937 26.332031 3.195313 35.683593 6.824219 9.808594 3.691406 18.695313 9.480468 26.039063 16.960937 7.476563 7.34375 13.265625 16.226563 16.953125 26.035157 3.636719 9.351562 6.121094 20.035156 6.835938 35.683593.714843 15.675781.882812 20.683594.882812 60.605469s-.167969 44.929688-.886719 60.605469zm0 0"
                    />
                  </svg>
                </a>
              </li>
              <li
                onMouseOver={e => handleOverContactame(e)}
                onMouseLeave={handleLeaveContactame}
                id="mail"
              >
                <Link to="#contact" id="mail">
                  <svg viewBox="0 0 512 512" id="mail">
                    <path
                      id="mail"
                      d="m187 390c0-112.968.1-126.93 0-126.98-.2-.06-3.28-.02-42.53-.02-8.1 0-15.09-6.22-15.45-14.31-.39-8.59 6.47-15.69 14.98-15.69 39.66 0 42.8.04 43-.02.1-.05 0-12.775 0-110.98 0-8.28 6.72-15 15-15h169.02c-39.58-41.19-94.91-66-155.02-66-119.1 0-216 96.45-216 215s96.9 215 216 215c60.08 0 115.42-24.79 155.02-66h-169.02c-8.28 0-15-6.72-15-15zm-59-221h23.53c8.1 0 15.09 6.22 15.45 14.31.39 8.59-6.47 15.69-14.98 15.69h-23.53c-8.1 0-15.09-6.22-15.45-14.31-.39-8.59 6.47-15.69 14.98-15.69zm16 158h-47.53c-8.1 0-15.09-6.22-15.45-14.31-.39-8.59 6.47-15.69 14.98-15.69h47.53c8.1 0 15.09 6.22 15.45 14.31.39 8.59-6.47 15.69-14.98 15.69z"
                    />
                    <path id="mail" d="m491.77 137h-255.558l129.652 99.956z" />
                    <path
                      id="mail"
                      d="m375.327 267.748c-5.382 4.273-13.009 4.354-18.485.131l-139.842-107.81v199.931c0 8.284 6.716 15 15 15h265c8.284 0 15-6.716 15-15v-200.756z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
            <div id="contactame">
              <p
                className="contactame-via"
                id="contactame-github"
                style={{ opacity: showContactame }}
              >
                contactame via {social}
              </p>
              {/* <p className="contactame-via" id="contactame-linkedin" style={{opacity: showLinkedin}}>
                contactame via Linkedin
              </p>
              <p className="contactame-via" id="contactame-instagram" style={{opacity: showInstagram}}>
                contactame via Instagram
              </p>
              <p className="contactame-via" id="contactame-mail" style={{opacity: showMail}}>
                contactame via Mail
              </p> */}
            </div>
          </div>
        </div>
        <div id="continue">
          <a href="/#about">
            <svg id="arrow" viewBox="0 0 256 256">
              <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		" />
            </svg>
          </a>
        </div>
      </div>
      <div className="section half-height" id="about">
        <img
          src={octoImage}
          alt="octocat"
          uk-scrollspy="cls: uk-animation-slide-left; delay: 300; offset-top: -200"
        />
        <div uk-scrollspy="cls: uk-animation-fade; delay: 300; offset-top: -200">
          <h3 className="section-title">ACERCA DE MI</h3>
          <p>
            ¡Hola! Soy desarrollador web y vivo en Buenos Aires.
            {/* Hi! I'm a sotware developer currently based in Buenos Aires,
            Argentina. */}
          </p>
          <p>
            Los últimos 11 años estuve trabajando en la industria de la TV y
            Publicidad, liderando equipos de operaciones en Buenos Aires, Ciudad
            de México, Bogotá y Panamá. Siempre muy enfocado a los objetivos de
            la empresa y al desarrollo de mis compañeros y reportes.
            {/* I've been working for the last 11 years in the media industry,
            leading Ad Operations teams across Latin America and I'm now looking
            for a role in web development. */}
          </p>
          <p>
            Manejo el stack <code>MERN, HTML, CSS</code> y algunas otras cosas,
            que podés ver en la sección de{" "}
            <Link to="/#skills">herramientas</Link>.
            {/* I handle pretty well the MERN stack and some other cool things as well, you can
            check them out in the <a href="/#skills">skills</a> section. */}
          </p>
          <p>
            También me divierte la fotografía, podés ver mis últimos posteos en
            la sección de <Link to="/#photography">Instagram.</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
