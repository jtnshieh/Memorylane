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

  renderDeleteButton() {
    if (this.props.comment.user_id === this.props.session.currentUser.id) {
      return (
      <div className="comment-delete-button" onClick={this.handleDelete}>
        x
      </div>);
    } else {
      return "";
    }
  }

  render() {
    const {comment} = this.props;
    return (
      <li className="post-comments">
        <div className="comment-username-body">
          <div className="comment-username">{comment.username}</div>
          <div className="comment-body">{comment.body}</div>
        </div>
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default Comment;
