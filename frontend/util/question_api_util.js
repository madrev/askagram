export const fetchAllQuestions = () => (
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
