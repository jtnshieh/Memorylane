import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;

    return this.props.user ? (
      <div>
        {user.username}
        <br/>
        {user.user_blurb}
        <br/>
      </div>
    ) : "";
  }
}

export default Profile;
