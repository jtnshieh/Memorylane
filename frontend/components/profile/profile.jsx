import React from 'react';
import ProfileItem from './profile_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.followOrUnfollow = this.followOrUnfollow.bind(this);
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
    this.getProfileItems = this.getProfileItems.bind(this);
    this.state = {
      render: ""
    };
  }

  componentWillMount() {
    this.props.getUserInfo(this.props.match.params.userId);
    this.props.fetchPosts();
  }

  componentWillUnmount() {
    this.props.clearUser();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.userId !== this.props.match.params.userId) {
      this.props.getUserInfo(nextProps.match.params.userId);
    }
  }

  follow(e) {
    e.preventDefault();
    this.props.createFollowing(this.props.currentUser.id, this.props.user.id).then(() => {
      this.props.getUserInfo(this.props.user.id);
      this.setState({render:""});
    });
  }

  unfollow(e) {
    e.preventDefault();
    this.props.deleteFollowing(this.props.currentUser.id, this.props.user.id).then(() => {
      this.props.getUserInfo(this.props.user.id);
      this.setState({render:""});
    });
  }

  followOrUnfollow() {
    if(this.props.currentUser.id !== this.props.user.id) {
      if(this.props.user.followed){
        return (
          <button className="follow-button"
                  onClick={this.unfollow}>
            Following
          </button>
        );
      } else {
        return (
          <button className="follow-button"
                  onClick={this.follow}>
            Follow
          </button>
        );
      }
    }
  }

  getProfileItems() {
    const profileItems = [];
    this.props.user.posts.forEach(userPost => {
      this.props.posts.forEach(post => {
        if (userPost.id === post.id) {
          profileItems.push(post);
        }
      });
    });
    return profileItems;
  }

  render() {
    const user = this.props.user;
    const posts = this.props.posts;
    if (!user.posts || !posts) {
      return null;
    }

    const profileItems = this.getProfileItems();

    return user ? (
      <div className="profile">
        <div className="profile-header">
          <div className="profile-header-left">
            <img id="profile-pic-circle" src={user.profile_pic_url}></img>
          </div>
          <div className="profile-header-right">
            <div className="profile-header-right-a">
              <span id="profile-username">{user.username}</span>
              <span>{this.followOrUnfollow()}</span>
            </div>
            <div className="profile-header-right-b">
              <span>
                <span className="profile-counts">{user.posts_count}</span> posts
              </span>
              <span>
                <span className="profile-counts">{user.followers_count}</span> followers
              </span>
              <span>
                <span className="profile-counts">{user.followees_count}</span> following
              </span>
            </div>
            <div className="profile-header-right-c">
              <span id="profile-full-name">{user.full_name}</span>
              {user.user_blurb}
            </div>
          </div>
        </div>

        <ul className="profile-posts">
          {
            profileItems.map(profileItem=> (
              <ProfileItem
                key = { profileItem.id }
                post = { profileItem }
              />
            ))
          }
        </ul>
      </div>
    ) : "";
  }
}


export default Profile;
