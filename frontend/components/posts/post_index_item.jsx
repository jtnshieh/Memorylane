import React from 'react';
import {Link} from 'react-router-dom';
import CommentContainer from '../comments/comment_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }
  //
  // componentDidMount() {
  //   this.props.fetchPosts();
  // }

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
    const {post, comments} = this.props;
    const heartType = (post.like === true ?
      <i className="fa fa-heart" aria-hidden="true"></i> :
      <i className="fa fa-heart-o" aria-hidden="true"></i>);

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
            <Link className="feed-photo-link" to={`/post/${post.id}`}>
              <img className="feed-photo" src={post.image_url}></img>
            </Link>
            <div className="index-bottom">
              <div className="index-bottom-text">
                <button id="post-item-blank-button" onClick={this.handleLike}>
                  {heartType}
                </button>
                <span>{post.numlikes} likes</span>
                <div className="index-bottom-username-section">
                  <span className="index-username">{post.author.username}</span>
                  <span>{post.caption}</span>
                  <CommentContainer post={post}
                                    comments={comments}/>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default PostIndexItem;
