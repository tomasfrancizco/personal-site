import React from "react"
import { Card } from "react-bootstrap"
import morfappImg from "../images/projects/morfapp.png"
import romaImg from "../images/projects/roma.png"
import denunciaImg from "../images/projects/denuncia.jpg"
import trophy from "../../public/icons/trophy.svg"
import noImage from "../images/No-Image-Available.png"

const Projects = () => (
  <div
    className="section"
    id="projects"
    uk-scrollspy="cls: uk-animation-fade; delay: 200"
  >
    <h3 className="section-title">PROJECTS</h3>
    <div id="projects-card-container">
      <Card className="card projects-card">
        <Card.Img variant="top" src={morfappImg} />
        <Card.Body>
          <Card.Title>morFapp</Card.Title>
          <Card.Subtitle>
            Julio 2019 -{" "}
            <a
              href="https://gist.github.com/tomasfrancizco/2f024b14f675226e57ad50cd1ea16ba2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link al repo
            </a>
          </Card.Subtitle>
          <br />
          <div className="chip-container">
            <div className="chip">React</div>
            <div className="chip">MongoDB</div>
            <div className="chip">HTML</div>
            <div className="chip">CSS</div>
            <div className="chip">UIkit</div>
            <div className="chip">Javascript</div>
          </div>
          <Card.Text>
            morfApp es una red social gastronómica en la que los usuarios pueden
            compartir sus recetas, guardar sus favoritas y buscar otras de
            acuerdo a los ingredientes con los que cuentan en el momento.
          </Card.Text>

          <footer className="blockquote-footer">
            <img
              src={trophy}
              alt="trophy"
              style={{ width: "1rem", marginRight: "5px" }}
            />
            Ganadora del 1er lugar en{" "}
            <cite title="Source Title">
              Ironhack Mexico City Web Dev Hackshow (2019)
            </cite>
          </footer>
        </Card.Body>
      </Card>
      <Card className="card projects-card">
        <Card.Img variant="top" src={romaImg} />
        <Card.Body>
          <Card.Title>La Roma Wars</Card.Title>
          <Card.Subtitle>
            Febrero 2019 -{" "}
            <a
              href="https://github.com/tomasfrancizco/La-Roma-Wars-Videogame"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link al repo
            </a>
          </Card.Subtitle>
          <br />
          <div className="chip-container">
            <div className="chip">Javascript</div>
            <div className="chip">Canvas</div>
          </div>
          <Card.Text>
            Un juego de plataformas creado con HTML Canvas y Javascript.
            <br />
            Localizado en el barrio de "La Roma" en la Ciudad de México.
            <br />
            Cuenta la historia de una lucha entre personajes típicos de la
            colonia, teniendo como Jefa final a la niña conocida por ser la voz
            del camión que recoge electrodomésticos.
            <br />
            Cuenta con opción de uno y dos jugadores.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card projects-card">
        <Card.Img variant="top" src={denunciaImg} />
        <Card.Body>
          <Card.Title>Denuncia Chilanga</Card.Title>
          <Card.Subtitle>
            Abril 2019 -{" "}
            <a
              href="https://github.com/ironhack-proyecto-2-fullstack-app/denuncia-chilanga"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link al repo
            </a>
          </Card.Subtitle>
          <br />
          <div className="chip-container">
            <div className="chip">HTML</div>
            <div className="chip">CSS</div>
            <div className="chip">Javascript</div>
            <div className="chip">NodeJS</div>
            <div className="chip">Express</div>
            <div className="chip">MongoDB</div>
            <div className="chip">Mongoose</div>
          </div>
          <Card.Text>
            Una plataforma en la que los usuarios, luego de registrarse y
            acceder, pueden realizar denuncias y/u observaciones acerca de
            situaciones o problemas con los que se cruzan en la ciudad.
            <br />
            El objetivo es generar conciencia y un sentido de pertenencia a la
            comunidad, impulsando de esta manera el cuidado de los espacios
            comunes.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card projects-card">
        <Card.Img variant="top" src={noImage} />
        <Card.Body>
          <Card.Title>Pomodoro</Card.Title>
          <Card.Subtitle>
            Junio 2020 -{" "}
            <a
              href="https://github.com/tomasfrancizco/pomodoro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link al repo
            </a>
          </Card.Subtitle>
          <br />
          <div className="chip-container">
            <div className="chip">HTML</div>
            <div className="chip">CSS</div>
            <div className="chip">Javascript</div>
          </div>
          <Card.Text>
            Una simple web app con un cronómetro para aplicar la técnica
            Pomodoro.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card projects-card">
        <Card.Img variant="top" src={noImage} />
        <Card.Body>
          <Card.Title>Calculadora Javascript</Card.Title>
          <Card.Subtitle>
            Julio 2020 -{" "}
            <a
              href="https://github.com/tomasfrancizco/Javascript-calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link al repo
            </a>
          </Card.Subtitle>
          <br />
          <div className="chip-container">
            <div className="chip">HTML</div>
            <div className="chip">CSS</div>
            <div className="chip">Javascript</div>
          </div>
          <Card.Text>Una calculadora con diseño neomorfista.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Projects
