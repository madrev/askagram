export const likersAsArray = answer => (
  Object.keys(answer.likers || {} ).reverse().map( id => answer.likers[id])
);

export const answersAsArray = answers => (
   Object.keys(answers || {} ).reverse().map( id =>
  answers[id] )
);

export const questionsAsArray = questions => (
   Object.keys(questions || {} ).reverse().map( id =>
  questions[id] )
);

export const answeredQuestions = questions => {
  return questionsAsArray(questions).filter( question => Boolean(question.answers));
};

export const unansweredQuestions = questions => {
  return questionsAsArray(questions).filter( question => !question.answers);
};
