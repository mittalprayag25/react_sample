import { combineReducers } from 'redux';
import auth from './auth';

export default function getRootReducer() {
  return combineReducers({
    auth
  });
}