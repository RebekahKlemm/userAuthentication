import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component {
  constructor(props) {
    super(props);
  }

  loginUser(e) {
    e.preventDefault();
    console.log("You are logging");
  }

  createUser(e){
    e.preventDefault();
    axios.post('/api/users/signup', {email: e.target.email.value})
        .then(res => res.data)
        .then(users => console.log(users))
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1>Signup</h1>
          <form onSubmit={this.createUser}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirmation_password">Confirm Password</label>
              <input type="password" className="form-control" id="confirmation_password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm
