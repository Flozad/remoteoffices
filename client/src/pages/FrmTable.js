import React, { Component } from "react";
import NavBar from '../components/navbar/NavBar.js'

import axios from 'axios'
import validator from 'email-validator'

//Guia: https://github.com/tayiorbeii/react_google_form/blob/master/src/App.js
//https://script.google.com/macros/s/AKfycbwmbCjWIoLLvXKti_kNSv0hl1hteloEmdsGG3-NqsqerlUrRvXebR16qlcwfQmpYjMp/exec
const formUrl = 'https://script.google.com/macros/s/AKfycbxnrea2pr5rkCWJ0ZZQv67ac0JJI0yevWGQJThfyFkaOvmHIB3FiShhu__bxCfI0BAZ/exec'
const ThankYou = () => <div>Thank You!</div>

class ContactForm extends Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid
    return (
      <form
        onChange={this.props.onChange}
        onSubmit={this.props.onSubmit}
      >
        <label>
          Name <input type='text' name='name' />
        </label>

        <label>
          Email <input type='text' name='email' ref={node => (this.emailNode = node)}/>
        </label>

        <button disabled={!this.props.emailIsValid}>
          Submit
        </button>

        {showEmailError && <div>Invalid Email</div>}

      </form>
    )
  }
}

class App extends Component {
  state = {
    name: '',
    email: '',
    emailIsValid: false,
    submitted: false
  }

  validateEmail = () => {
    this.setState({emailIsValid: validator.validate(this.state.email)})
  }

  updateValues = (e) => {
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
    this.validateEmail()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = this.state

    axios({
      method: 'get',
      url: `${formUrl}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
    })

    this.setState({submitted: true})
  }

  render() {
    const { emailIsValid, submitted } = this.state

    return (
      <div>
        <NavBar/>
        <div>
          Join My List Plz
          {submitted
            ? <ThankYou />
            : <ContactForm
                onChange={this.updateValues}
                onSubmit={this.handleSubmit}
                emailIsValid={emailIsValid}
              />
          }
        </div>
      </div>
    )
  }
}

export default App