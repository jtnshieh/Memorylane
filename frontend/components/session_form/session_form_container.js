//From mapStateToProps(state, ownProps):
//loggedIn (boolean) -
//representing whether a currentUser exists
//errors (array) - list of errors from the state
//From mapDispatchToProps(dispatch, ownProps):
//formType (string):
//'login' or 'signup' given the current ownProps.location.pathname
//processForm (function):
//dispatching action creators login or signup given formType
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: location.pathname.slice(1),
    currentUser: state.session.currentUser,
  };
};

// location.pathname returns the current url
const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login: signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    formType,
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
