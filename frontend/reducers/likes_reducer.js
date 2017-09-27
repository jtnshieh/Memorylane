import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      const brandnewState = merge({}, state);
      brandnewState[action.like.id] = action.like;
      return brandnewState;
    case REMOVE_LIKE:
      const newState = merge({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};

export default LikesReducer;
