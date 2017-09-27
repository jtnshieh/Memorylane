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
    if (!user.posts) {
      return null;
    }

    let profileItem;
    if (user) {
      profileItem = user.posts.map(post => (
        <ProfileItem
          key = { post.id }
          post = { post }
          />
      ));
    }

    return this.props.user ? (
      <div className="profile">
        <div className="profile-header">
          <div className="profile-header-left">
            <img id="profile-pic-circle" src={user.profile_pic_url}></img>
          </div>
          <div className="profile-header-right">
            {user.username}
            {user.user_blurb}
          </div>
        </div>

        <ul className="profile-posts">
          {profileItem}
        </ul>
      </div>
    ) : "";
  }
}


export default Profile;
