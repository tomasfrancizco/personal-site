import React from "react"

const Education = () => (
  <div id="education" uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400; offset-top: -200">
    <h3 className="section-title">EDUCACIÓN</h3>
    <div className="card-container we-card-container">
      <div className="uk-card uk-card-default uk-card-body uk-width-1@m card">
        <h3 className="uk-card-title">Full Stack Developer (MERN)</h3>
        <p>
          @{" "}
          <a
            href="https://www.ironhack.com/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ironhack Ciudad de México
          </a>
        </p>
        <p>2019</p>
      </div>
      <div className="uk-card uk-card-default uk-card-body uk-width-1@m card">
        <h3 className="uk-card-title">Publicidad</h3>
        <p>
          @{" "}
          <a
            href="https://www.uces.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UCES
          </a>
        </p>
        <p>2007 - 2011</p>
      </div>
    </div>
  </div>
)

export default Education
