import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {

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
    //   username: this.state.username,
    //   password: this.state.password
    // }

    //Some services call
      //Redirect home
  }

  render() {
    return(
      <div className="Register">
        <form className="Register-form" onSubmit={this.handleSubmit}>
          <input className="Register-username" type="text" name="username" onChange={this.handleChange} />
          <input className="Register-password" type="password" name="password" onChange={this.handleChange} />
          <input className="Register-submit" type="submit" value="Register" />
        </form>
        <p className="Register-login">Already have an account? You can login <Link to="/login">here</Link></p>
        {this.state.fireRedirect ? <Redirect to="/" /> : ''}
      </div>
    );
  }
};

export default Register;
