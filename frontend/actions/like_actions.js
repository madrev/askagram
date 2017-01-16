import * as APIUtil from "../util/like_api_util";

export const RECEIVE_ANSWER_LIKE = "RECEIVE_ANSWER_LIKE";
export const REMOVE_ANSWER_LIKE = "REMOVE_ANSWER_LIKE";

export const receiveLike = like => ({
  type: RECEIVE_ANSWER_LIKE,
  like
});

export const removeLike = id => ({
  type: REMOVE_ANSWER_LIKE,
  answerId: id
});

export const likeAnswer = answerId => dispatch => (
  APIUtil.likeAnswer(answerId).then( res =>  dispatch(receiveLike(res)),
  err => console.log(err.responseJSON ) )
);

export const unlikeAnswer = answerId => dispatch => (
  APIUtil.unlikeAnswer(answerId).then( res => dispatch(removeLike(res.id), err => console.log(err.responseJSON)))
);
