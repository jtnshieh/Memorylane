export const allPosts = (state) => {
    return Object.values(state.posts);
 };

export const allComments = (state) => {
    return Object.values(state.comments);
 };
