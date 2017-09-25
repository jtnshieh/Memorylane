import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUserInfo = (id) => dispatch => (
  UserUtil.getUserInfo(id).then(user => dispatch(receiveUser(user)))
);
