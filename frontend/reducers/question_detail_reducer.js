import { RECEIVE_QUESTION_DETAIL } from "../actions/question_actions.js";
import { RECEIVE_NEW_ANSWER, REMOVE_ANSWER } from "../actions/answer_actions.js";
import { RECEIVE_ANSWER_LIKE, REMOVE_ANSWER_LIKE } from "../actions/like_actions.js";
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
    case RECEIVE_NEW_ANSWER:
      return merge({}, state, {answers: [action.answer, ...state.answers]});
    case REMOVE_ANSWER:
      return merge({}, state, { answers: state.answers.filter( answer => answer.id != action.answerId)});
    case RECEIVE_ANSWER_LIKE:
      return state;
    case REMOVE_ANSWER_LIKE:
      return state;
    default:
      return state;
  }
};

export default questionDetailReducer;
