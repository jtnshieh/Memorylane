import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
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
    return(
      <div className = "homepage">
        <div className = "homepage-images">
          <img src = "https://github.com/jtnshieh/Memorylane/blob/master/app/assets/images/Instagram.png?raw=true" alt="Instagram phone"/>
        </div>
        <div>
          <div className = "login-form-container">
            <form onSubmit = {this.handleSubmit} className='login-form-box'>
              <h1 className = "homepage-logo">Memorylane</h1>
              <h3>Sign up to see photos and videos from your friends.</h3>
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                <label>Username:
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
              </div>
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
