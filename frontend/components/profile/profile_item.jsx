import React from 'react';
import {Link} from 'react-router-dom';

class ProfileItem extends React.Component {

  render() {
    const {post} = this.props;
    return(
      <li>
        <Link to={`/post/${post.id}`}>
          <img className='profile-item' src={post.image_url}></img>
        </Link>
      </li>
    );
  }
}

export default ProfileItem;
