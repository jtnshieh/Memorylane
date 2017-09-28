import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE POST';

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = (id) => dispatch => (
  APIUtil.fetchPost(id).then(post => (
    dispatch(receivePost(post))
  ))
);

export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts().then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const createPost = post => dispatch => {
  return APIUtil.createPost(post).then(successPost => (
    dispatch(receivePost(successPost))
  ));
};
