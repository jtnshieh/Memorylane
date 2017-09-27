
export const createLike = (like) => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { like }
  })
);

export const fetchLikes = (postId) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${postId}/likes`
  })
);

export const deleteLike = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`
  })
);
