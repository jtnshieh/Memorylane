import React from 'react';
import {Link} from 'react-router-dom';

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    return(
      <li>
        <Link to={`/post/${post.id}`}>
          <div className="profile-item-parent">
            <img className='profile-item' src={post.image_url}>
            </img>
            <div className="overlay">
                <div className="overlay-likes">
                  <img src="http://res.cloudinary.com/dq60klc41/image/upload/v1512278227/icons8-heart-50_keda76.png"></img>
                  <span>{post.numLikes}</span>
                </div>
                <div className="overlay-comments">
                  <img src="http://res.cloudinary.com/dq60klc41/image/upload/v1512278217/icons8-speech-bubble-filled-50_igwdio.png"></img>
                  <span>{post.commentIds.length}</span>
                </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}



export default ProfileItem;
