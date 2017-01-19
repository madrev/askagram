import { RECEIVE_QUESTION_ERRORS, CLEAR_ERRORS } from "../actions/question_actions.js";
import { RECEIVE_UPLOAD_ERRORS } from "../actions/answer_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {
  uploadFormErrors: [],
  questionFormErrors: []
};

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_UPLOAD_ERRORS:
      console.log(action.errors);
      return merge({}, _defaultState, { uploadFormErrors: action.errors});
    case RECEIVE_QUESTION_ERRORS:
      return merge({}, _defaultState, { questionFormErrors: action.errors});
    case CLEAR_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default errorsReducer;
