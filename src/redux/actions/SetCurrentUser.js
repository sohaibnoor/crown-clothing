import { SET_CURRENT_USER } from '../types/types';
export const SetCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
