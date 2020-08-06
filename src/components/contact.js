import React from "react"
import { Form, Button } from "react-bootstrap"

class Contact extends React.Component {
  render() {
    return (
      <div className="section full-height" id="contact">
        <h3>CONTACTO</h3>
        <h6 id="contact-subtitle">¡Trabajemos juntos!</h6>
        <Form
          className="contact-form"
          method="post"
          action="https://getform.io/f/035d54f4-515a-461b-8cee-2a2ece721769"
          onSubmit={this.validateForm}
        >
          <Form.Group uk-scrollspy="cls: uk-animation-slide-left; delay: 300; offset-top: -200">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Regina Falange"
              name="name"
              id="name"
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
            />
          </Form.Group>
          <Form.Group
            uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
            id="submit-container"
          >
            <Button type="submit" variant="primary" id="submit">
              Enviar
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Contact

// state = {
  //   message: {
  //     name: "",
  //     email: "",
  //     message: "",
  //   },
  // }

  // handleChange = e => {
  //   const { message } = this.state
  //   let field = e.target.name
  //   message[field] = e.target.value
  //   this.setState({ message })
  // }

  // handleFormSubmit = e => {
  //   e.preventDefault()
  //   const { message } = this.state
  //   if (message.name === "" || message.email === "" || message.message === "") {
  //     return this.setState({
  //       success: "",
  //       error: "¡Por favor, completá todos los campos!",
  //     })
  //   }
  //   this.onUpload()
  // }

  // onUpload = () => {
  //   const { message } = this.state
  //   uploadMessage(message)
  //     .then(() => {
  //       this.setState({
  //         message: {
  //           name: "",
  //           email: "",
  //           message: "",
  //         },
  //         success: "¡Gracias por tu mensaje!",
  //         error: "",
  //       })
  //     })
  //     .catch(error => this.setState({ error: error.message }))
  // }

  // render() {
  //   const { name, email, message } = this.state.message
  //   const { error, success } = this.state

  //   return (
  //     <div className="section full-height" id="contact">
  //       <h3>CONTACTO</h3>
  //       <h6 id="contact-subtitle">¡Trabajemos juntos!</h6>
  //       <Form className="contact-form" onSubmit={this.handleFormSubmit}>
  //         <Form.Group uk-scrollspy="cls: uk-animation-slide-left; delay: 300; offset-top: -200">
  //           <Form.Label>Nombre</Form.Label>
  //           <Form.Control
  //             className="form-input"
  //             type="text"
  //             placeholder="Regina Falange"
  //             name="name"
  //             value={name}
  //             id="name"
  //             onChange={this.handleChange}
  //           />
  //         </Form.Group>
  //         <Form.Group uk-scrollspy="cls: uk-animation-slide-right; delay: 300; offset-top: -200">
  //           <Form.Label>Mail</Form.Label>
  //           <Form.Control
  //             className="form-input"
  //             type="email"
  //             placeholder="regina@falange.com"
  //             name="email"
  //             value={email}
  //             id="email"
  //             onChange={this.handleChange}
  //           />
  //         </Form.Group>
  //         <Form.Group uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -200">
  //           <Form.Label>Mensaje</Form.Label>
  //           <Form.Control
  //             as="textarea"
  //             rows="3"
  //             name="message"
  //             value={message}
  //             id="message"
  //             className="form-input"
  //             onChange={this.handleChange}
  //           />
  //         </Form.Group>
  //         <Form.Group
  //           uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; offset-top: -100"
  //           id="submit-container"
  //         >
  //           <Button type="submit" variant="primary" id="submit">
  //             Enviar
  //           </Button>
  //           {success && (
  //             <div className="uk-alert-container">
  //               <p className="uk-alert-success uk-alert" uk-alert="true">
  //                 {success}
  //               </p>
  //             </div>
  //           )}
  //           {error && (
  //             <div className="uk-alert-container">
  //               <p className="uk-alert-danger uk-alert" uk-alert="true">
  //                 {error}
  //               </p>
  //             </div>
  //           )}
  //         </Form.Group>
  //       </Form>
  //     </div>
  //   )
  // }
