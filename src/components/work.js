import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"
// import Modal from "react-bootstrap/Modal"

const Work = () => {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  return (
    <div id="work" uk-scrollspy="cls: uk-animation-slide-top; delay: 300">
      <h3 className="section-title">WORK</h3>
      <div className="card-container we-card-container">
        <Card className="card">
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
            <button
              className="uk-button uk-button-default uk-margin-small-right"
              type="button"
              uk-toggle="target: #modal-close-default-a"
            >
              Descripción
            </button>

            <div id="modal-close-default-a" uk-modal="true">
              <div className="uk-modal-dialog uk-modal-body">
                <button
                  className="uk-modal-close-default"
                  type="button"
                  uk-close="true"
                ></button>
                <h4 className="uk-modal-title">Sales Operations Manager</h4>
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
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="card">
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
            <button
              className="uk-button uk-button-default uk-margin-small-right"
              type="button"
              uk-toggle="target: #modal-close-default-b"
            >
              Descripción
            </button>

            <div id="modal-close-default-b" uk-modal="true">
              <div className="uk-modal-dialog uk-modal-body">
                <button
                  className="uk-modal-close-default"
                  type="button"
                  uk-close="true"
                ></button>
                <h4 className="uk-modal-title">Ad Sales Supervisor</h4>
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
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Work
