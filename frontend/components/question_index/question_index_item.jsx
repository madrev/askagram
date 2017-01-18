import React from 'react';
import { Link } from 'react-router';

import { answersAsArray } from '../../reducers/selectors.js';
import AnswerCarousel from './answer_carousel';


class QuestionIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.question = this.props.question;
    this.answers = this.props.question.answers;
  }


  render() {
      return <li className="question-index-item">
      <Link to={`/questions/${this.props.question.id}`}>
        <h3>{this.question.title}</h3>
      </Link>
      <AnswerCarousel answers={answersAsArray(this.answers)}
                      questionId={this.question.id}/>
     <button onClick={ this.props.openModal }>Add Answer</button>
    </li>;
  }
}


export default QuestionIndexItem;
