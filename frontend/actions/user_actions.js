import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RESET_USER = "RESET_USER";

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const resetUser = () => ({
  type: RESET_USER,
});

export const getUserInfo = (id) => dispatch => (
  UserUtil.getUserInfo(id).then(user => dispatch(receiveUser(user)))
);
