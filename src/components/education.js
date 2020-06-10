import React from "react"
import { Card } from "react-bootstrap"

import ironhack from "../images/ironhack.jpg"
import uces from "../images/uces.jpg"

const Education = () => (
  <div className="section" id="education">
    <h3 className="section-title">Education</h3>
    <div className="card-container we-card-container">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={ironhack} />
        <Card.Body>
          <Card.Title>Full Stack Developer</Card.Title>
          <Card.Subtitle>@ <a href="https://www.ironhack.com/en" target="_blank">Ironhack Mexico City</a></Card.Subtitle><br></br>
          <Card.Subtitle>2019</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={uces} />
        <Card.Body>
          <Card.Title>Advertising</Card.Title>
          <Card.Subtitle>@ <a href="https://www.uces.edu.ar/" target="_blank">UCES</a></Card.Subtitle><br></br>
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
