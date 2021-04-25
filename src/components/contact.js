import React from "react"
import Recaptcha from "react-google-recaptcha"
import { Form, Button } from "react-bootstrap"

// const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

const RECAPTCHA_KEY = "6LfMWLkaAAAAAFYM11ctU1Dxfz_v3SVrAKLOR3rM"
class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value })
  }

  render() {
    return (
      <div className="section half-height" id="contact">
        <h3>CONTACTO</h3>
        <h6 id="contact-subtitle">¡Trabajemos juntos!</h6>
        <h6 id="direct-mail">
          También podés mandarme un mail directo a{" "}
          <a
            href="mailto:tomasfreire@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            tomasfreire@gmail.com
          </a>
        </h6>
        <Form
          className="contact-form"
          method="post"
          action="https://getform.io/f/035d54f4-515a-461b-8cee-2a2ece721769"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <Form.Group uk-scrollspy="cls: uk-animation-slide-left; delay: 300; offset-top: -200">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Regina Falange"
              name="name"
              id="name"
              required
            />
          </Form.Group>
          <Form.Group uk-scrollspy="cls: uk-animation-slide-right; delay: 300; offset-top: -200">
            <Form.Label>Mail</Form.Label>
            <Form.Control
              className="form-input"
              type="email"
              placeholder="regina@falange.com"
              name="email"
              id="email"
              required
            />
          </Form.Group>
          <Form.Group uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -200">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="message"
              id="message"
              className="form-input"
              required
            />
          </Form.Group>
          <Form.Group
            uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
            id="recaptcha-container"
          >
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
          </Form.Group>

          <Form.Group
            uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
            id="submit-container"
          >
            <Button type="submit" variant="primary" id="submit" disabled={true}>
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Contact
