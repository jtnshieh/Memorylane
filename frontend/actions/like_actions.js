import * as LikeUtil from '../util/like_api_util';
import {receivePost} from './post_actions';


export const createLike = like => dispatch => {
  return LikeUtil.createLike(like).then(post => (
    dispatch(receivePost(post))
  ));
};

export const deleteLike = id => dispatch => {
  return LikeUtil.deleteLike(id).then(post => (
    dispatch(receivePost(post))
  ));
};
