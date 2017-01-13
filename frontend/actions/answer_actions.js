import * as APIUtil from "../util/answer_api_util";

export const RECEIVE_NEW_ANSWER = "RECEIVE_NEW_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";


export const receiveNewAnswer = answer => ({
  type: RECEIVE_NEW_ANSWER,
  answer
});

export const removeAnswer = id => ({
  type: REMOVE_ANSWER,
  answerId: id
});


export const createAnswer = (file, questionId, userId) => dispatch =>
(
  APIUtil.sendToCloudinary(file).then(
    res => APIUtil.createAnswer(res.secure_url, questionId, userId ),
    err => console.log(err.responseJSON) ).then(
    res2 => dispatch(receiveNewAnswer(res2), err => console.log(err.responseJSON)))
);

export const deleteAnswer = (id) => dispatch => (
  APIUtil.deleteAnswer(id).then( res => dispatch(removeAnswer(res.id), err => console.log(err.responseJSON)))
);
