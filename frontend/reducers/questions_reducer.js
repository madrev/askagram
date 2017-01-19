import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from "../actions/question_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {
  questions: {},
  sortOrder: []
};

const questionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return merge({}, state, { questions: { [action.question.id]: action.question}  });
    default:
      return state;
  }
};

export default questionReducer;
