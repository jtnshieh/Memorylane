import React from 'react';
import ProfileItem from './profile_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;
    const profileItem = user.posts.map(post => (
      <ProfileItem
        key = { post.id }
        post = { post }
      />
    ));

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

// <ul>
//   {profileItem}
// </ul>

export default Profile;
