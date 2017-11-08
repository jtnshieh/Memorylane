import * as CommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE COMMENT';
export const REMOVE_COMMENT = 'REMOVE COMMENT';

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});



export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});


export const fetchComments = () => dispatch => (
  CommentUtil.fetchComments().then(comments => (
    dispatch(receiveComments(comments))
  ))
);

export const createComment = (comment) => dispatch => {
  return CommentUtil.createComment(comment).then(successComment => (
    dispatch(receiveComment(successComment))
  ));
};

export const deleteComment = (comment) => dispatch => {
  return CommentUtil.deleteComment(comment).then(successComment => (
    dispatch(removeComment(successComment))
  ));
};
