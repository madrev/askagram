import React from 'react';


const QuestionIndexItem = ({question, openModal}) => {
    return <li className="question-index-item">
    <h3>{question.title}</h3>
    <button onClick={ openModal }>Add Answer</button>
      {question.answers.map(answer => <img key= {answer.id}
                                           src= {answer.image_url}
                                           className="answer-thumbnail" />)}


  </li>;
};


export default QuestionIndexItem;
