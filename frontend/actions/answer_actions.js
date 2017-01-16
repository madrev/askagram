import * as AnswerAPIUtil from "../util/answer_api_util";
import * as LikeAPIUtil from "../util/like_api_util";

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";


export const receiveAnswer = answer => ({
  type: RECEIVE_ANSWER,
  answer
});

export const removeAnswer = id => ({
  type: REMOVE_ANSWER,
  answerId: id
});


export const createAnswer = (file, questionId) => dispatch =>
(
  AnswerAPIUtil.sendToCloudinary(file).then(
    res => AnswerAPIUtil.createAnswer(res.url, questionId),
    err => console.log(err.responseJSON) ).then(
    res2 => dispatch(receiveAnswer(res2), err => console.log(err.responseJSON)))
);


// TODO: delete from cloudinary as well!
export const deleteAnswer = (id) => dispatch => (
  AnswerAPIUtil.deleteAnswer(id).then(
    res => dispatch(removeAnswer(res.id), err => console.log(err.responseJSON)))
);


export const likeAnswer = answerId => dispatch => (
  LikeAPIUtil.likeAnswer(answerId).then(
    res => AnswerAPIUtil.fetchAnswer(res.likeable_id),
    err => console.log(err.responseJSON)).then(
    res2 =>  dispatch(receiveAnswer(res2)),
    err => console.log(err.responseJSON ))
);

export const unlikeAnswer = answerId => dispatch => (
  LikeAPIUtil.unlikeAnswer(answerId).then(
    res => AnswerAPIUtil.fetchAnswer(res.likeable_id),
    err => console.log(err.responseJSON)).then(
    res2 =>  dispatch(receiveAnswer(res2)),
    err => console.log(err.responseJSON ))
);
