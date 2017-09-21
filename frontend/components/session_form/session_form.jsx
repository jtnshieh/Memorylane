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

  }

  componentDidMount() {
    this.props.errors = [];
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
    }

    if (newProps.location.pathname !== this.props.location.pathname) {
      this.props.errors = [];
    }
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

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead!</Link>;
    } else {
      return <Link to="/login">log in instead!</Link>;
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
    const name = this.props.formType === "login" ?
      "" :
      <input type="text"
      value={this.state.full_name}
      placeholder="Full Name"
      onChange={this.update('full_name')}
      className="login-input"
      />;
    const submitValue = this.props.formType === "login" ?
      "Log in" : "Sign Up";

    return(
      <div className = "homepage">
        <div className = "homepage-images">
          <img src = "https://github.com/jtnshieh/Memorylane/blob/master/app/assets/images/Instagram.png?raw=true" alt="Instagram phone"/>
        </div>
        <div>
          <div className = "login-form-container">
            <form onSubmit = {this.handleSubmit} className='login-form-box'>
              <h1 className = "homepage-logo">Memorylane</h1>
              <h4>Sign up to see photos and videos from your friends.</h4>
              <div className="login-form">
                {name}
                <br/>
                  <input type="text"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.update('username')}
                  />
                <br/>
                  <input type="password"
                    value={this.state.password}
                    placeholder="Password"
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
            Please {this.props.formType} or {this.navLink()}
          </div>
        </div>
      </div>
    );
  }

  //...
}

export default withRouter(SessionForm);
