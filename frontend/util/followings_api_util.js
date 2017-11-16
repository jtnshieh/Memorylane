export const createFollowing = (followee_id) => (
  $.ajax({
    method: 'POST',
    url: 'api/followings',
    data: {followee_id}
  })
);

export const deleteFollowing = (followee_id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/followings/${followee_id}`,
    data: {followee_id}
  })
);
