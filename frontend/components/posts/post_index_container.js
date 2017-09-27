import { connect } from 'react-redux';
import PostIndex from './post_index.jsx';
import { fetchPosts } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';
import { getUserInfo } from '../../actions/user_actions';


const mapStateToProps = state => ({
    posts: allPosts(state),
    currentUser: state.session.currentUser
});


const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    getUserInfo: (id) => dispatch(getUserInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
