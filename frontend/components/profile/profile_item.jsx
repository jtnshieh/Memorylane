import React from 'react';
import {Link} from 'react-router-dom';

class ProfileItem extends React.Component {

  render() {
    const {post} = this.props;
    return(
      <li>
        <Link to={`/post/${post.id}`}>
          <div className="profile-item-parent">
            <img className='profile-item' src={post.image_url}>
            </img>
          </div>
        </Link>
      </li>
    );
  }
}

export default ProfileItem;
