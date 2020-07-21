import React from "react"
import { Form, Button } from "react-bootstrap"

const Contact = () => {
  return (
    <div className="section" id="contact">
      <h3>CONTACT</h3>
      <h6>Let's work together!</h6>
      <Form
        className="contact-form"
        method="post"
        action="https://getform.io/f/035d54f4-515a-461b-8cee-2a2ece721769"
      >
        <Form.Group uk-scrollspy="cls: uk-animation-slide-left; delay: 300">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
          />
        </Form.Group>
        <Form.Group uk-scrollspy="cls: uk-animation-slide-right; delay: 300">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            id="email"
          />
        </Form.Group>
        <Form.Group uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" id="message" />
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          id="submit"
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300"
        >
          Send Message
        </Button>
      </Form>
    </div>
  )
}
export default Contact
