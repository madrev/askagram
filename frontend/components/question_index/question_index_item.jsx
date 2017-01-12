import React from 'react';


const QuestionIndexItem = ({question}) => {
    console.log("rendering item!");
    return <li>
    <h3>{question.title}</h3>
      {question.answers.map(answer => <img src= {answer.image_url}
                                          className="answer-thumbnail" />)}


  </li>;
};


export default QuestionIndexItem;
