import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {
    currentUser: null,
    errors: []
  };

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, _defaultState, { currentUser: action.currentUser} );
    case RECEIVE_ERRORS:
      return merge( {}, state, { errors: action.errors} );
    default:
      return state;
  }
};

export default sessionReducer;
