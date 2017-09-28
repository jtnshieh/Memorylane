import * as LikeUtil from '../util/like_api_util';
import {receivePost} from './post_actions';


export const createLike = (user_id, post_id) => dispatch => {
  return LikeUtil.createLike(user_id, post_id).then(post => (
    dispatch(receivePost(post))
  ));
};

export const deleteLike = (user_id, post_id) => dispatch => {
  return LikeUtil.deleteLike(user_id, post_id).then(post => (
    dispatch(receivePost(post))
  ));
};
