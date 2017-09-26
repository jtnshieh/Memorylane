import React from 'react';

class ProfileItem extends React.Component {

  render() {
    const {post} = this.props;
    return(
      <li className='profile-item'>
        <img src={post.image_url}></img>
      </li>
    );
  }
}

export default ProfileItem;
