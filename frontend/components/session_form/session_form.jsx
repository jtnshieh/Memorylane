import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      full_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = {username:"Demo", password:"123456"};
    this.props.login(user);
  }

  switchSession() {
    if (this.props.formType === 'login') {
      return (<div>Don't have an account?<Link to="/signup" onClick={this.props.clearErrors}> Sign up</Link>
      </div>);
    } else {
      return (<div>Have an account?<Link to="/login" onClick={this.props.clearErrors}> Log in</Link>
      </div>);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // console.log(this.state);
    const name = this.props.formType === "login" ?
      "" :
      <input type="text"
      value={this.state.full_name}
      placeholder=" Full Name"
      onChange={this.update('full_name')}
      className="login-input"
      />;
    const submitValue = this.props.formType === "login" ?
      "Log in" : "Sign Up";

    return(
      <div className = "homepage">
        <div className = "homepage-images">
          <img src = "https://res.cloudinary.com/dq60klc41/image/upload/v1509843830/insta-pic_zxgmgp.png" alt="Instagram phone"/>
        </div>
        <div>
          <div className = "login-form-container">
            <h1 className = "homepage-logo">Memorylane</h1>
            <h4>Sign up to see photos and videos from your friends.</h4>
            <button id="demo-login-button" onClick={this.handleDemoLogin}>Demo Log In</button>
            <form onSubmit = {this.handleSubmit} className='login-form-box'>
              <div className="login-form">
                <br/>
                {name}
                <br/>
                  <input type="text"
                    value={this.state.username}
                    placeholder=" Username"
                    onChange={this.update('username')}
                  />
                <br/>
                  <input type="password"
                    value={this.state.password}
                    placeholder=" Password"
                    onChange={this.update('password')}
                  />
                <br/>
                <br/>
                <button type="submit">{submitValue}</button>
              </div>
              <div className = "errors">{this.renderErrors()}</div>
            </form>
          </div>
          <div className = "switch-session-container">
            {this.switchSession()}
          </div>
        </div>
      </div>
    );
  }

  //...
}

export default withRouter(SessionForm);

//
