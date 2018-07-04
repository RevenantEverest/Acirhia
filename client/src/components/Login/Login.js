import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // let data = {
    //     username: this.state.username,
    //     password: this.state.password
    // }

    // services.login(data)
    //   .then(results => {
    //     console.log(results);
    //   })
    //   .catch(err => {
    //     console.log("Failed at Login => ", err);
    //   })
  }


  render() {
    return(
      <div className="Login">
        <form className="Login-form" onSubmit={this.handleSubmit}>
          <input className="Login-username" type="text" name="username" onChange={this.handleChange} />
          <input className="Login-password" type="password" name="password" onChange={this.handleChange} />
          <input classname="Login-submit" type="submit" value="Login" />
        </form>
        {/* <p className="Login-register">Don't have an account? You can sign up <Link to="/register">here</Link></p> */}
        {this.state.fireRedirect ? <Redirect to="/" /> : ''}
      </div>
    );
  }
};

export default Login;
