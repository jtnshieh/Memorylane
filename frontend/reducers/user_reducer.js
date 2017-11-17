import merge from 'lodash/merge';
import { RECEIVE_USER, RESET_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOWING, REMOVE_FOLLOWING } from '../actions/following_actions';

// const nullUser = Object.freeze({
//   user: null
// });

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
    case RESET_USER:
      return {};
    case RECEIVE_FOLLOWING:
      const newState = Object.assign({}, state);
      newState[action.followed] = true;
      return newState;
    case REMOVE_FOLLOWING:
      const anotherState = Object.assign({}, state);
      anotherState[action.followed] = false;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
