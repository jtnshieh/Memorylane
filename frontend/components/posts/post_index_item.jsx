import React from 'react';

class PostIndexItem extends React.Component {

  render() {
    const {post} = this.props;
    return(
      <li className='index-item'>
        <div className="item-header">
          <div>
            <img id="img-circle" src={post.author.profile_pic_url}></img>
          </div>
          <div className="header-info">
            {post.author.username}
            {post.location}
          </div>
        </div>
        <br/>
        <img src={post.image_url}></img>
        <br/>
        {post.author.username}
        <br/>
        {post.caption}
      </li>
    );
  }
}
export default PostIndexItem;
