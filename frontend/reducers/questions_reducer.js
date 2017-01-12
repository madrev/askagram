import { RECEIVE_QUESTIONS } from "../actions/question_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {};

const questionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};

export default questionReducer;
