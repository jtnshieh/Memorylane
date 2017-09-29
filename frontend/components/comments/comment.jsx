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
      <li>
        <p>{comment.body}</p>
        <button onClick={this.handleDelete}>delete comment</button>
      </li>
    );
  }
}

export default Comment;
