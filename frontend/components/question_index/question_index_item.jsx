import React from 'react';
import { Link } from 'react-router';

import { answersAsArray } from '../../reducers/selectors.js';
import AnswerCarousel from './answer_carousel';


class QuestionIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    console.log(this.question.title);
    console.log(this.answers);
      return <li className="question-index-item">
      <Link to={`/questions/${this.props.question.id}`}>
        <h3>{this.props.question.title}</h3>
      </Link>
      <AnswerCarousel answers={answersAsArray(this.props.question.answers)}
                      questionId={this.props.question.id}/>
     <button onClick={ this.props.openModal }>Add Answer</button>
    </li>;
  }
}


export default QuestionIndexItem;
