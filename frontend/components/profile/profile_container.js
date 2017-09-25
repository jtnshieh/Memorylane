import { connect } from 'react-redux';
import Profile from './profile';
import { getUserInfo } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserInfo: (id) => dispatch(getUserInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
