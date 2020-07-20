import React from "react"
import { Card } from "react-bootstrap"

const Projects = () => (
  <div className="section" id="projects">
    <h3 className="section-title">PROJECTS</h3>
    <div id="projects-card-container">
      <Card className="card projects-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>morFapp</Card.Title>
          <Card.Subtitle>Julio 2019</Card.Subtitle>
          <Card.Text>
            morfApp es una red social gastronómica en la que los usuarios puede
            compartir sus recetas, guardar sus favoritas y buscar otras de
            acuerdo a los ingredientes con los que cuentan en el momento
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card projects-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>La Roma Wars</Card.Title>
          <Card.Subtitle>Febrero 2019</Card.Subtitle>
          <Card.Text>
            <p>Un juego de plataformas creado con HTML Canvas y Javascript.</p>
            <p>Localizado en el barrio de "La Roma" en la Ciudad de México.</p>
            <p>
              Cuenta la historia de una lucha entre personajes típicos de la
              colonia, teniendo como Jefa final a la niña conocida por ser la
              voz del camión que recoge electrodomésticos.
            </p>
            <p>Cuenta con opción de uno y dos jugadores.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card projects-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Denuncia Chilanga</Card.Title>
          <Card.Subtitle>Abril 2019</Card.Subtitle>
          <Card.Text>
            <p>
              Una plataforma en la que los usuarios, luego de registrarse y
              acceder, pueden realizar denuncias y/u observaciones acerca de
              situaciones o problemas con los que se cruzan en la ciudad.
            </p>
            <p>
              El objetivo es generar conciencia y un sentido de pertenencia a la
              comunidad, impulsando de esta manera el cuidado de los espacios
              comunes.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Projects
