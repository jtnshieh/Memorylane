import React from 'react';
import {Link} from 'react-router-dom';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment);
  }

  render() {
    const {comment} = this.props;
    return (
      <li className="post-comments">
        <div className="comment-username-body">
          <div className="comment-username">{comment.username}</div>
          <div className="comment-body">{comment.body}</div>
        </div>
        <div className="comment-delete-button" onClick={this.handleDelete}>
          x
        </div>
      </li>
    );
  }
}

export default Comment;
