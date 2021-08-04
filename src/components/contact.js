import React, { useState } from "react"
import ReCaptcha from "react-google-recaptcha"
import { Form, Button } from "react-bootstrap"
import { navigate } from "gatsby"

const recaptchaKey = "6LfMWLkaAAAAAFYM11ctU1Dxfz_v3SVrAKLOR3rM"

const Contact = () => {
  const [state, setState] = useState({})
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const recaptchaRef = React.createRef()

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="section half-height" id="contact">
      <h3>CONTACTO</h3>
      <h6 id="contact-subtitle">¡Trabajemos juntos!</h6>
      <h6 id="direct-mail">
        También podés mandarme un mail a{" "}
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
        name="contact"
        data-netlify-recaptcha="true"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/thankyou"
        onSubmit={handleSubmit}
      >
        <Form.Group uk-scrollspy="cls: uk-animation-slide-left; delay: 300; offset-top: -200">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Regina Falange"
            onChange={handleChange}
            name="name"
            id="name"
            required
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
            onChange={handleChange}
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
            onChange={handleChange}
            id="message"
            className="form-input"
            required
          />
        </Form.Group>
        <Form.Group
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
          id="recaptcha-container"
        >
          <ReCaptcha
            id="recaptcha-google"
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={() => setButtonDisabled(false)}
          />
        </Form.Group>
        <Form.Group
          uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
          id="submit-container"
        >
          <Button
            type="submit"
            variant="primary"
            id="submit"
            disabled={buttonDisabled}
          >
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Contact
