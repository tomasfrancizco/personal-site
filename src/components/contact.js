import React from "react"
import { Form, Button } from "react-bootstrap"

const Contact = () => {
  return (
    <div className="section" id="contact">
      <h3>CONTACTO</h3>
      <h6>Trabajemos juntos!</h6>
      <Form
        className="contact-form"
        method="post"
        action="https://getform.io/f/035d54f4-515a-461b-8cee-2a2ece721769"
      >
        <Form.Group uk-scrollspy="cls: uk-animation-slide-left; delay: 300">
          <Form.Label>Tu nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Regina Falange"
            name="name"
            id="name"
          />
        </Form.Group>
        <Form.Group uk-scrollspy="cls: uk-animation-slide-right; delay: 300">
          <Form.Label>Tu mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="regina@falange.com"
            name="email"
            id="email"
          />
        </Form.Group>
        <Form.Group uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300">
          <Form.Label>El mensaje</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" id="message" />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          id="submit"
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300"
        >
          Enviar
        </Button>
      </Form>
    </div>
  )
}
export default Contact
