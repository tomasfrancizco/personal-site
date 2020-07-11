import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"

import warnerMedia from "../images/warnermedia.png"

const Work = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="section" id="work">
      <h3 className="section-title">WORK</h3>
      <div className="card-container we-card-container">
        <Card className="card">
          <Card.Img variant="top" src={warnerMedia} />
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
            <br></br>
            <Button variant="primary" onClick={handleShow}>
              See Description
            </Button>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={warnerMedia} />
          <Card.Body>
            <Card.Title>Ad Sales Supervisor</Card.Title>
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
            <Card.Subtitle>2009 - 2015</Card.Subtitle>
            <br></br>
            <Button variant="primary" onClick={handleShow}>
              See Description
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Work Description</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Sales Operations Manager</h4>
                <ul className="work-description-ul">
                  <li>Lead teams in México, Colombia & Panamá offices.</li>
                  <li>
                    Redesigned the team's structure & dynamic, creating both a
                    goals and people oriented group.
                  </li>
                  <li>
                    Built a process to optimize revenue & ad inventory, saving
                    millions of dollars per year.
                  </li>
                  <li>
                    Migrated the digital operation from Buenos Aires to México,
                    making the office Latam's central digital hub.
                  </li>
                </ul>
                <h4>Ad Sales Supervisor</h4>
                <ul className="work-description-ul">
                  <li>
                    Was responsible for the team that booked, managed and billed
                    TV campaigns on TNT, Space, Warner, Cartoon Network & CNN.
                  </li>
                  <li>
                    Through booking and billing accuracy we reduced the usual
                    billing delays more than 40%, making the company & clients
                    save time and thousands of dollars.
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Work
