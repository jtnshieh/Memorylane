import React from 'react';
import ProfileItem from './profile_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.followOrUnfollow = this.followOrUnfollow.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }

  componentDidMount() {
    this.props.getUserInfo(this.props.match.params.userId);
  }

  follow(e) {
    e.preventDefault();
    this.props.createFollowing(this.props.currentUser.id, this.props.user.id);
  }

  unfollow(e) {
    e.preventDefault();
    this.props.deleteFollowing(this.props.currentUser.id, this.props.user.id);
  }

  followOrUnfollow() {
    if(this.props.currentUser.id !== this.props.user.id) {
      if(this.props.user.followed){
        return (
          <button
                  onClick={this.unfollow}>
            Following
          </button>
        );
      } else {
        return (
          <button
                  onClick={this.follow}>
            Follow
          </button>
        );
      }
    }
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
            <div className="profile-header-right-a">
              <span id="profile-username">{user.username}</span>
            </div>
            <div className="profile-header-right-b">
              <span id="profile-full-name">{user.full_name}</span>
              {user.user_blurb}
            </div>
            <div>
              {this.followOrUnfollow()}
            </div>
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
