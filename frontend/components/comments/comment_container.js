import { connect } from 'react-redux';
import Comments from './comments';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import { fetchPost } from '../../actions/post_actions';
import { allPosts, allComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let x = {
    comments: allComments(state),
    posts: allPosts(state),
    post: ownProps.post
  };
  return x;
};


const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    fetchComments: () => dispatch(fetchComments()),
    fetchPost: (id) => dispatch(fetchPost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
