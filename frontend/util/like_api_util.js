export const likeAnswer = answerId  => (
  $.ajax({
    method: "POST",
    url: `api/answers/${answerId}/like`
  })
);

export const unlikeAnswer = answerId => (
  $.ajax({
    method: "DELETE",
    url: `api/answers/${answerId}/like`
  })
);
