import merge from 'lodash/merge';
import { RECEIVE_USER, RESET_USER } from '../actions/user_actions';

// const nullUser = Object.freeze({
//   user: null
// });

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, state, user);
    case RESET_USER:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
