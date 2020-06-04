import React from "react"
import { Card, Button } from "react-bootstrap"

import ironhack from "../images/ironhack.jpg"

const Education = () => (
  <div className="section" id="education">
    <h3>Education</h3>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ironhack} />
      <Card.Body>
        <Card.Title>Full Stack Developer</Card.Title>
        <Card.Subtitle>2019</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.ironhack.com/en" target="_blank">
          <Button variant="primary">Go to Ironhack site</Button>
        </a>
      </Card.Body>
    </Card>
  </div>
)

export default Education
