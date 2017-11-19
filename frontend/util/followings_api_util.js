export const createFollowing = (followerId, followingId) => (
  $.ajax({
    method: 'POST',
    url: 'api/followings',
    data: {following : {follower_id: followerId, following_id: followingId}}
  })
);

export const deleteFollowing = (followerId, followingId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/followings/${followerId}`,
    data: {following : {follower_id: followerId, following_id: followingId}}
  })
);
