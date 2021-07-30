import React from "react"
import { Form, Button } from "react-bootstrap"
class Contact extends React.Component {
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
          data-netlify-recaptcha="true"
          data-netlify="true"
          netlify-honeypot="bot-field"
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
              disabled="true"
            />
          </Form.Group>
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <Form.Group uk-scrollspy="cls: uk-animation-slide-right; delay: 300; offset-top: -200">
            <Form.Label>Mail</Form.Label>
            <Form.Control
              className="form-input"
              type="email"
              placeholder="regina@falange.com"
              name="email"
              id="email"
              required
              disabled="true"
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
              disabled="true"
            />
          </Form.Group>
          <Form.Group
            uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
            id="recaptcha-container"
          >
            <div
              id="g-recaptcha"
              className="g-recaptcha"
              data-netlify-recaptcha="true"
              render="explicit"
            ></div>
          </Form.Group>
          <Form.Group
            uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
            id="submit-container"
          >
            <Button type="submit" variant="primary" id="submit" disabled="true">
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Contact
