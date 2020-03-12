import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import CartReducer from '../cart/CartReducer';

export default combineReducers({
  user: UserReducer,
  cart: CartReducer
});
