import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    e.preventDefault();
    const post = this.props.post;
    if (post.like === true) {
      this.props.deleteLike(this.props.currentUser.id, post.id);
    } else {
      this.props.createLike(this.props.currentUser.id, post.id);
    }
  }

  render() {
    const {post} = this.props;
    return(
      <li className='index-item'>
        <div className="item">
          <div className="index-header">
            <img id="img-circle" src={post.author.profile_pic_url}></img>
            <div className="index-header-text">
              <span className="index-username">{post.author.username}</span>
              <span>{post.location}</span>
            </div>
          </div>
          <img src={post.image_url}></img>
          <div className="index-bottom">
            <div className="index-bottom-text">
              <button onClick={this.handleLike}>
                Like
              </button>
              <span>{post.numlikes}</span>
              <span className="index-username">{post.author.username}</span>
              <span>{post.caption}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
export default PostIndexItem;
