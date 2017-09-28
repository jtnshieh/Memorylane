import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      const newState = Object.assign({}, state);
      // return Object.assign({}, state, {[action.post.id]:action.post});
      newState[action.post.id] = action.post;
      return newState;
      // return merge({}, state, {[action.post.id]:action.post});
    default:
      return state;
  }
};

export default PostsReducer;
