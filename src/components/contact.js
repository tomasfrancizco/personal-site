import React from "react"
import { Form, Button } from "react-bootstrap"

const Contact = () => (
  <div className="section" id="contact">
    <h3>CONTACT</h3>
    <h6>Let's work together!</h6>
    <Form>
      <Form.Group>
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </Form>
  </div>
)

export default Contact
