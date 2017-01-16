import { RECEIVE_QUESTION_DETAIL } from "../actions/question_actions.js";
import { RECEIVE_ANSWER, REMOVE_ANSWER } from "../actions/answer_actions.js";
import merge from 'lodash/merge';

const _defaultState =  {
  answers: [],
  title: "",
  description: "",
  timeAgo: "",
  author: {}
};

const questionDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTION_DETAIL:
      return action.questionDetail;
    case RECEIVE_ANSWER:
      const newAnswers = merge({}, state.answers, { [action.answer.id]: action.answer });
      return merge({}, state, { answers: newAnswers } );
    case REMOVE_ANSWER:
      let filteredAnswers = {};
      Object.keys(state.answers).forEach( id => {
        if( id != action.answer.id ) filteredAnswers[id] = state.answers[id];
      });
      return merge({}, state, { answers: filteredAnswers });
    default:
      return state;
  }
};

export default questionDetailReducer;
