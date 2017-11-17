export const createFollowing = (followerId, followeeId) => (
  $.ajax({
    method: 'POST',
    url: 'api/followings',
    data: {following : {follower_id: followerId, followee_id: followeeId}}
  })
);

export const deleteFollowing = (followerId, followeeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/followings/${followerId}`,
    data: {following : {follower_id: followerId, followee_id: followeeId}}
  })
);
