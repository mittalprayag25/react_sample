import * as types from '../actions/authTypes';
import { loadState } from './../localStorage';

const initialState = {
  userInfo: {},
  isAuthing: false,
  isError: false,
  mailSentStatus: 500,
  authStatus: {
    isSignedUp: true,
    isConfirmed: false,
    forgotPassword: false,
    retrievePassword: false,
    requiredOtp: false,
    isMailSent: false
  }
};

const auth = (state = initialState, action) => {
  switch(action.type) { //eslint-disable-line
    case types.AUTH_USER:
      return {
        ...state,
        isError: false,
        userInfo: action.payload
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        isError: true
      };
    case types.AUTH_SUCCESS:
      return {
        ...state,
        isError: false
      };
    case types.LOGOUT:
      return {
        ...state,
        userInfo: {}
      };
    case types.SIGNUP:
      return {
        ...state,
        authStatus: {
          isSignedUp: false,
          isConfirmed: false,
          forgotPassword: false,
          requiredOtp: false,
          isMailSent: true,
          retrievePassword: false
        },
        emailToken: action.payload.userInfo.emailToken
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        signupStatus: action.successData,
        isSignupError: false,
        isOTPSent: true,
        isOTPReceived: false,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        signupStatus: action.errorData,
        isSignupError: true,
        isOTPSent: false,
        isOTPReceived: false,
      };
    case types.RETRIEVE_PASSWORD:
      return {
        ...state,
        authStatus: {
          isSignedUp: false,
          isConfirmed: false,
          forgotPassword: false,
          retrievePassword: true,
          requiredOtp: false,
          isMailSent: false
        }
      };
    case types.VERIFICATION_MAIL_SENT:
      return {
        ...state,
        mailSentStatus: action.payload.status
      };
    case types.OTP_SENT:
      return {
        ...state,
        authStatus: {
          isSignedUp: false,
          isConfirmed: false,
          forgotPassword: false,
          requiredOtp: true,
          retrievePassword: false,
          isMailSent: false
        }
      };
    case types.SHOW_FORGOT_PASSWORD:
      return {
        ...state,
        authStatus: {
          isSignedUp: false,
          isConfirmed: false,
          forgotPassword: true,
          retrievePassword: false,
          requiredOtp: false,
          isMailSent: false
        }
      };
    case types.PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        authStatus: {
          isSignedUp: true,
          isConfirmed: false,
          retrievePassword: false,
          forgotPassword: false,
          requiredOtp: false,
          isMailSent: false
        }
      };
    case types.PASSWORD_UPDATE_ERROR:
      return {
        ...state,
      };
    case types.SUBMIT_EMAIL_FOR_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        authStatus: {
          isSignedUp: true,
          isConfirmed: false,
          retrievePassword: false,
          forgotPassword: false,
          requiredOtp: false,
          isMailSent: false
        }
      };
    default:
      if(loadState() !== undefined) {
        const persistedState = loadState().auth;
        persistedState.authStatus.isMailSent = false;// this is done to remove email verification after refreshing page
        persistedState.authStatus.isSignedUp = true;
        persistedState.authStatus.retrievePassword = false;
        persistedState.authStatus.forgotPassword = false;
        persistedState.authStatus.requiredOtp = false;// this is done to remove otp page after refreshing page
        return persistedState;
      }
      return state;
  }
};

export default auth;