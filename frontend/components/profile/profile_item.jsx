import React from 'react';
import {Link} from 'react-router-dom';

class ProfileItem extends React.Component {

  render() {
    console.log(this.props.post);
    const {post} = this.props;
    return(
      <li>
        <Link to={`/post/${post.id}`}>
          <div className="profile-item-parent">
            <img className='profile-item' src={post.image_url}>
            </img>
            <span>{post.commentIds.count}</span>
            <span>{post.numLikes}</span>
          </div>
        </Link>
      </li>
    );
  }
}

export default ProfileItem;
