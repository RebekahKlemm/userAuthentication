import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  createUser(e) {
    e.preventDefault();
    console.log("You are logging in a user");
  }

  handleSubmit(e){
    e.preventDefault();
      axios.post('/api/users/login', {email: e.target.email.value})
          .then(res => res.data)
          .then(users => console.log(users))
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
