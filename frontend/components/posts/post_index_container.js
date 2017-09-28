import { connect } from 'react-redux';
import PostIndex from './post_index.jsx';
import { fetchPosts } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';
import { getUserInfo } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/like_actions';


const mapStateToProps = state => ({
    posts: allPosts(state),
    currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    getUserInfo: (id) => dispatch(getUserInfo(id)),
    createLike: (user_id, post_id) => dispatch(createLike(user_id, post_id)),
    deleteLike: (user_id, post_id) => dispatch(deleteLike(user_id, post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
