import React from "react"
import { Card } from "react-bootstrap"

const Projects = () => (
  <div className="section" id="projects">
    <h3 className="section-title">PROJECTS</h3>
    <div id="projects-card-container">
      <Card style={{ width: "18rem" }} className="card projects-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Sales Operations Manager</Card.Title>
          <Card.Subtitle>
            @{" "}
            <a
              href="https://www.warnermediagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WarnerMedia
            </a>
          </Card.Subtitle>
          <br></br>
          <Card.Subtitle>2015 - 2020</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card projects-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Sales Operations Manager</Card.Title>
          <Card.Subtitle>
            @{" "}
            <a
              href="https://www.warnermediagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WarnerMedia
            </a>
          </Card.Subtitle>
          <br></br>
          <Card.Subtitle>2015 - 2020</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card projects-card">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Sales Operations Manager</Card.Title>
          <Card.Subtitle>
            @{" "}
            <a
              href="https://www.warnermediagroup.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WarnerMedia
            </a>
          </Card.Subtitle>
          <br></br>
          <Card.Subtitle>2015 - 2020</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Projects
