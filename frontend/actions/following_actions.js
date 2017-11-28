import * as FollowingUtil from '../util/followings_api_util';

export const RECEIVE_FOLLOWING = 'RECEIVE FOLLOWING';
export const REMOVE_FOLLOWING = 'REMOVE FOLLOWING';

export const receiveFollowing = following => ({
  type: RECEIVE_FOLLOWING,
  following
});

export const removeFollowing = following => ({
  type: REMOVE_FOLLOWING,
  following
});

export const createFollowing = (followerId, followeeId) => dispatch => {
  return FollowingUtil.createFollowing(followerId, followeeId)
         .then(() => (dispatch(receiveFollowing())
  ));
};

export const deleteFollowing = (followerId, followeeId) => dispatch => {
  // debugger;
  return FollowingUtil.deleteFollowing(followerId, followeeId)
         .then(() => (dispatch(removeFollowing())
  ));
};
