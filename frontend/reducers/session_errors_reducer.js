import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

// RECEIVE_SESSION_ERRORS - sets errors to the action's errors
// RECEIVE_CURRENT_USER - clears the errors

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
    debugger
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
