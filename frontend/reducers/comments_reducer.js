import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from '../actions/post_actions';
import merge from 'lodash/merge';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newState = Object.assign({}, state);
      newState[action.comment.id] = action.comment;
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
