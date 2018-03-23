import * as types from './authTypes';
import SampleWebApi from './../../framework/api';
import config from './../../framework/config';

export function setAuthenticatedUser(data) {
  return {
    type: types.AUTH_USER,
    data
  };
}

export function authError(errorData) {
  return {
    type: types.AUTH_ERROR,
    errorData
  };
}
