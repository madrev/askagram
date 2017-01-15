import * as APIUtil from "../util/question_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_QUESTION_DETAIL = "RECEIVE_QUESTION_DETAIL";

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

// TODO: figure out error display scheme for question fetching errors, if any

export const fetchQuestions = () => dispatch => (
  APIUtil.fetchQuestions().then( res => dispatch(receiveQuestions(res)),
  err => console.log(err.responseJSON) )
);

export const fetchQuestionDetail = id => dispatch => (
  APIUtil.fetchQuestionDetail(id).then( res => dispatch(receiveQuestionDetail(res)),
  err => console.log(err.responseJSON) )
);

export const createQuestion = question => dispatch => (
  APIUtil.createQuestion(question).then( res =>  dispatch(receiveQuestion(res)),
  err => console.log(err.responseJSON ) )
);
