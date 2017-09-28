import React from 'react';
import {Link} from 'react-router-dom';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
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

    if (this.props.post){
      return(
        <li className={`index-item ${this.props.isShow ? 'post-show' : ''}`}>
          <div className="item">
            <div className="index-header">
              <Link to={`/${post.author.id}`}>
                <img id="img-circle" src={post.author.profile_pic_url}></img>
              </Link>
              <div className="index-header-text">
                <Link to={`/${post.author.id}`} className="index-username">
                  {post.author.username}
                </Link>
                <span>{post.location}</span>
              </div>
            </div>
            <Link to={`/post/${post.id}`}>
              <img src={post.image_url}></img>
            </Link>
            <div className="index-bottom">
              <div className="index-bottom-text">
                <button onClick={this.handleLike}>
                  Like
                </button>
                <span>{post.numlikes} likes</span>
                <span className="index-username">{post.author.username}</span>
                <span>{post.caption}</span>
              </div>
            </div>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }
}

export default PostIndexItem;
