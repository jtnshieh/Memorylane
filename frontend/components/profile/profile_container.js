import { connect } from 'react-redux';
import Profile from './profile';
import { getUserInfo, clearUser } from '../../actions/user_actions';
import { createFollowing, deleteFollowing } from '../../actions/following_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  clearUser: () => dispatch(clearUser()),
  createFollowing: (followerId, followeeId) =>
                dispatch(createFollowing(followerId, followeeId)),
  deleteFollowing: (followerId, followeeId) =>
                dispatch(deleteFollowing(followerId, followeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
