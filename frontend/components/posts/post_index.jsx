import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
    if (this.props.currentUser){
      this.props.getUserInfo(this.props.currentUser.id);
    } else {
      return null;
    }
  }

  render() {
    const postIndexItem = this.props.posts.map(post => {
      return (
      <PostIndexItem
        key = { post.id }
        post = { post }
        currentUser = { this.props.currentUser }
        createLike = { this.props.createLike }
        deleteLike = { this.props.deleteLike }
        fetchPosts = {this.props.fetchPosts }
      />
    );});
    return(
      <div className="post-index-body">
        <ul>
          {postIndexItem}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
