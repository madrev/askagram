import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTION_DETAIL = "RECEIVE_QUESTION_DETAIL";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";

export const receiveQuestions = questions => ( {
  type: RECEIVE_QUESTIONS,
  questions
});

export const receiveQuestionDetail = questionDetail => ({
  type: RECEIVE_QUESTION_DETAIL,
  questionDetail
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
});

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = results => ({
  type: CLEAR_SEARCH_RESULTS
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveQuestionErrors = errors => ({
  type: RECEIVE_QUESTION_ERRORS,
  errors
});

// TODO: figure out error display scheme for question fetching errors, if any

export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions().then( res => dispatch(receiveQuestions(res)),
  err => console.log(err.responseJSON) ).then( () => dispatch(clearErrors()))
);

export const fetchQuestionDetail = id => dispatch => (
  APIUtil.fetchQuestionDetail(id).then( res => dispatch(receiveQuestionDetail(res)),
  err => console.log(err.responseJSON) )
);

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question).then( res =>  dispatch(receiveQuestion(res)),
  err => dispatch(receiveQuestionErrors(err.responseJSON))).then(
    () => dispatch(clearErrors()))
);

export const searchQuestions = query => dispatch => (
  APIUtil.searchQuestions(query).then( res => dispatch(receiveSearchResults(res)),
  err => console.log(err.responseJSON) )
);
