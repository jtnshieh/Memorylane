export const allPosts = (state) => {
    return Object.values(state.posts).reverse();
 };

export const allComments = (state) => {
    return Object.values(state.comments);
 };
