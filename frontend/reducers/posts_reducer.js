import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';
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
    // case RECEIVE_USER:
    //   const testState = Object.assign({}, state);
    //   action.user.posts.forEach(post => {
    //     testState[post.id] = post;
    //     testState[post.id]['author'] = action.user;
    //   });
    //   return testState;
    default:
      return state;
  }
};

export default PostsReducer;
