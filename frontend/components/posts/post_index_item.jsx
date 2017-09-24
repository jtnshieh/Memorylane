import React from 'react';

class PostIndexItem extends React.Component {

  render() {
    const {post} = this.props;
    return(
      <li>
        {post.caption}
        <img src={post.image_url}></img>
      </li>
    );
  }
}
export default PostIndexItem;
