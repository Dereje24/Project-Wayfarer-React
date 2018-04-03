import React, { Component } from 'react';

class SignIn extends Component {

  constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin () {

        let formData = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };
        console.log(formData)
        this.props.authenticate(formData);
    }


    render () {
        return (
          <div className="">
              <h4>Sign in </h4>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={ this.handleLogin }>
                    <input type="text" ref="username" placeholder="Username"/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <input type="submit"/>
                </form>
            </div>

          </div>




        );
    }
}

export default SignIn;
