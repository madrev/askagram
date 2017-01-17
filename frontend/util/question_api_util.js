export const fetchQuestions = () => (
  $.ajax( {
    method: "GET",
    url: "api/questions"
  })
);

export const fetchQuestionDetail = (id) => (
  $.ajax( {
    method: "GET",
    url: `api/questions/${id}`,
  })
);

export const createQuestion = question => (
  $.ajax( {
    method: "POST",
    url: "api/questions",
    data: question

  })
);

export const searchQuestions = query => (
 $.ajax( {
   method: "GET",
   url: `api/questions/search?query=${query}`
 })
);
