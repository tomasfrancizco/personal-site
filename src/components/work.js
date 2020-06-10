import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby";

import warnerMedia from "../images/warnermedia.png"

const Work = () => (
  <div className="section" id="work">
    <h3 className="section-title">Work</h3>
    <div className="card-container">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={warnerMedia} />
        <Card.Body>
          <Card.Title>Sales Operations Manager</Card.Title>
          <Card.Subtitle>@ <a href="https://www.warnermediagroup.com/" target="_blank">WarnerMedia</a></Card.Subtitle><br></br>
          <Card.Subtitle>2015 - 2020</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/work/salesopsmanager">See description</Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={warnerMedia} />
        <Card.Body>
          <Card.Title>Ad Sales Supervisor</Card.Title>
          <Card.Subtitle>@ <a href="https://www.warnermediagroup.com/" target="_blank">WarnerMedia</a></Card.Subtitle><br></br>
          <Card.Subtitle>2009 - 2015</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/work/adsalessupervisor">See description</Link>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export default Work
