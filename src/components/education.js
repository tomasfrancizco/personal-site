import React from "react"
import { Card } from "react-bootstrap"

import ironhack from "../images/ironhack2.jpg"
import uces from "../images/uces2.png"

const Education = () => (
  <div className="section" id="education">
    <h3 className="section-title">EDUCATION</h3>
    <div className="card-container we-card-container">
      <Card className="card">
        {/* <Card.Img variant="top" src={ironhack} /> */}
        <Card.Body>
          <Card.Title>Full Stack Developer</Card.Title>
          <Card.Subtitle>@ <a href="https://www.ironhack.com/en" target="_blank" rel="noopener noreferrer">Ironhack Mexico City</a></Card.Subtitle><br></br>
          <Card.Subtitle>2019</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        {/* <Card.Img variant="top" src={uces} /> */}
        <Card.Body>
          <Card.Title>Advertising</Card.Title>
          <Card.Subtitle>@ <a href="https://www.uces.edu.ar/" target="_blank" rel="noopener noreferrer">UCES</a></Card.Subtitle><br></br>
          <Card.Subtitle>2007 - 2011</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Education
