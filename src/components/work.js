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
              <a href="https://www.warnermediagroup.com/" target="_blank" rel="noopener noreferrer">
                WarnerMedia
              </a>
            </Card.Subtitle>
            <br></br>
            <Card.Subtitle>2015 - 2020</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              See Description
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card className="card">
          <Card.Img variant="top" src={warnerMedia} />
          <Card.Body>
            <Card.Title>Ad Sales Supervisor</Card.Title>
            <Card.Subtitle>
              @{" "}
              <a href="https://www.warnermediagroup.com/" target="_blank" rel="noopener noreferrer">
                WarnerMedia
              </a>
            </Card.Subtitle>
            <br></br>
            <Card.Subtitle>2009 - 2015</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" onClick={handleShow}>
              See Description
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
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
