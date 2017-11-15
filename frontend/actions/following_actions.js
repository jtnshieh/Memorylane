import * as FollowingUtil from '../util/followings_api_util';

export const RECEIVE_FOLLOWING = 'RECEIVE FOLLOWING';
export const REMOVE_FOLLOWING = 'REMOVE FOLLOWING';

export const receiveFollowing = following => ({
  type: RECEIVE_FOLLOWING,
  follower: following.follower,
  followee: following.followee
});

export const removeFollowing = following => ({
  type: REMOVE_FOLLOWING,
  follower: following.follower,
  followee: following.followee
});

export const createFollowing = (followee_id) => dispatch => {
  return FollowingUtil.createFollowing(followee_id).then(following => (
    dispatch(receiveFollowing(following))
  ));
};

export const deleteFollowing = (followee_id) => dispatch => {
  return FollowingUtil.deleteFollowing(followee_id).then(following => (
    dispatch(removeFollowing(following))
  ));
};
