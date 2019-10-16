import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
const Cryptr = require('cryptr')
const cryptr = new Cryptr('myTotalySecretKey')

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        firstname: "",
        lastname: "",
        username: "",
        password: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event, type) {
    let user = this.state.user
    if(type === "password"){
        user[type] = cryptr.encrypt(event.target.value);
    }else{
        user[type] = event.target.value
    }
    this.setState({
        user
    })
  }

  handleSubmit(event) {
    let data = this.state.user
    console.log(JSON.stringify(data))
    event.preventDefault()
  }

  render() {
    return (
      <form className='regisform' onSubmit={this.handleSubmit}>
        <p>
          <label>first name : </label>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e, 'firstname')}
          />
        </p>
        <p>
          <label>last name : </label>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e, 'lastname')}
          />
        </p>
        <p>
          <label>username : </label>
          <input
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e, 'username')}
          />
        </p>
        <p>
          <label>password : </label>
          <input
            type="password"
            value={this.state.value}
            onChange={(e) => this.handleChange(e, 'password')}
          />
        </p>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

ReactDOM.render(<RegisterForm />, document.getElementById("root"))
