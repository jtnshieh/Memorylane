import { connect } from 'react-redux';
import Profile from './profile';
import { getUserInfo } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/following_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  createFollow: (followerId, followeeId) =>
                dispatch(createFollow(followerId, followeeId)),
  deleteFollow: (followerId, followeeId) =>
                dispatch(deleteFollow(followerId, followeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
