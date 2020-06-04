import React from "react"
import { Card, Button } from "react-bootstrap"

import warnerMedia from "../images/warnermedia.png"

const Work = () => (
  <div className="section" id="work">
    <h3>Work</h3>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={warnerMedia} />
      <Card.Body>
        <Card.Title>Sales Operations Manager @ WarnerMedia</Card.Title>
        <Card.Subtitle>2015 - 2020</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <a href="https://www.warnermediagroup.com/" target="_blank">
          <Button variant="primary">Go to WarnerMedia site</Button>
        </a>
      </Card.Body>
    </Card>
  </div>
)

export default Work
