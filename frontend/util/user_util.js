export const getUserInfo = (id)  => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};
