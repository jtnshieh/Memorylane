import React from 'react';
import Comment from './comment';

class Comments extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body:"",
      loading: false
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({loading:!this.state.loading});
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = Object.assign({}, this.state);
    comment['post_id'] = this.props.post.id;
    this.props.createComment(comment).then(() => {
      this.props.fetchPost(this.props.post.id);
      this.setState({"body":""});
    });
  }

  render() {
    const postComments = [];

    this.props.comments.map(comment=> {
      this.props.post.commentIds.map(postCommentId=> {
        if (postCommentId === comment.id) {
          postComments.push(comment);
        }
      });
    });


    return (
      <div>
        <ul className="post-comments-list">
        {
          postComments.map(postComment=> (
            <Comment
              key = { postComment.id }
              comment = { postComment }
              deleteComment = { this.props.deleteComment }
              session = { this.props.session }
            />
          ))
        }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            className="comment-input"
            type='text'
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Add a comment..."
          />
        </form>
      </div>
    );
  }
}

export default Comments;
