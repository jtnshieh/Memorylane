import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
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
        comments = {this.props.comments}
      />);
    });
    return(
      <div className="post-index-body">
        <ul className="post-index-body-ul">
          {postIndexItem}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
