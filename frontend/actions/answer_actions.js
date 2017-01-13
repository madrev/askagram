import * as APIUtil from "../util/answer_api_util";


export const receiveNewAnswer = answer => ({
  type: "RECIEVENEWANSWER",
  answer
});


export const createAnswer = (file, questionId, userId) => dispatch =>
(
  APIUtil.sendToCloudinary(file).then(
    res => APIUtil.createAnswer(res.secure_url, questionId, userId ),
    err => console.log(err.responseJSON) ).then(
    res2 => dispatch(receiveNewAnswer(res2)))
);
