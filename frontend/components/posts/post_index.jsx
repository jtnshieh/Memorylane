import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("fetching posts");
    this.props.fetchPosts();
  }

  render() {
    const postIndexItem = this.props.posts.map(post => (
      <PostIndexItem
        key = { post.id }
        post = { post }
      />
    ));
    return(
      <div>
        <ul>
          {postIndexItem}
        </ul>
      </div>
    );
  }
}

export default PostIndex;
