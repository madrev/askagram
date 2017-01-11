import * as APIUtil from "../util/session_api_util";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const _demoUser = { user: {
    username: "askagrammer",
    password: "demodemo"
  }
};

export const receiveErrors = errors => ( {
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCurrentUser = currentUser => ( {
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const login = user => dispatch => (
  APIUtil.login(user).then( res => dispatch(receiveCurrentUser(res)),
  err => dispatch(receiveErrors(err.responseJSON)) )
);

export const logout = () => dispatch => (
  APIUtil.logout().then(dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then( res => dispatch(receiveCurrentUser(res)),
  err => dispatch(receiveErrors(err.responseJSON)) )
);

export const demoLogin = dispatch => (login(_demoUser));
