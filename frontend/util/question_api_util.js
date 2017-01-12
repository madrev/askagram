export const fetchQuestions = () => (
  $.ajax( {
    method: "GET",
    url: "api/questions",
  })
);

export const fetchQuestionDetail = (id) => (
  $.ajax( {
    method: "GET",
    url: `api/questions/${id}`,
  })
);
