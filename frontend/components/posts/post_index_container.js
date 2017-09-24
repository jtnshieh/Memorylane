import { connect } from 'react-redux';
import PostIndex from './post_index.jsx';
import { fetchPosts } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';


const mapStateToProps = state => ({
    posts: allPosts(state)
});


const mapDispatchToProps = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
