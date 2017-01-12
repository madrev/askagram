import { RECEIVE_QUESTION_DETAIL } from "../actions/question_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {};

const questionDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTION_DETAIL:
      return action.questionDetail;
    default:
      return state;
  }
};

export default questionDetailReducer;
