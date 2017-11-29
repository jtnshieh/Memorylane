import { connect } from 'react-redux';
import PostIndexItem from './post_index_item.jsx';
import { fetchPost } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';
import { getUserInfo } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.match.params.postId],
    currentUser: state.session.currentUser,
    isShow: true,
});

const mapDispatchToProps = (dispatch) => ({
    // fetchPost: () => dispatch(fetchPost()),
    fetchPost: (id) => dispatch(fetchPost(id)),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    createLike: (user_id, post_id) => dispatch(createLike(user_id, post_id)),
    deleteLike: (user_id, post_id) => dispatch(deleteLike(user_id, post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem);
