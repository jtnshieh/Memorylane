import { connect } from 'react-redux';
import PostForm from './post_form.jsx';
import { createPost } from '../../actions/post_actions';
import { allPosts } from '../../reducers/selectors';

const mapStateToProps = state => ({
    posts: allPosts(state)
});


const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
