export const likersAsArray = answer => (
  Object.keys(answer.likers || {} ).reverse().map( id => answer.likers[id])
);

export const answersAsArray = answers => (
   Object.keys(answers || {} ).reverse().map( id =>
  answers[id] )
);

export const questionsAsArray = questions => (
   Object.keys(questions.questions || {} ).map( id =>
  questions.questions[id] )
);

export const answeredQuestions = questions => {
  return questions.sortOrder.map( id => questions.questions[id]);
};

export const unansweredQuestions = questions => {
  return questionsAsArray(questions).reverse().filter( question => !question.answers);
};
