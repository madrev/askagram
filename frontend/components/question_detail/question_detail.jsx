import React from 'react';
import AnswerDetail from './answer_detail';


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestionDetail(this.props.params.questionId);
  }

  answerList() {
    if( this.props.answers) {
      return <ul>
         {this.props.answers.map( answer => <li><img src={answer.image_url} /></li> ) }
      </ul>;
    }
  }


  render() {
    return <div className="question-detail">
      <h2>{this.props.title}</h2>
      <span>{this.props.description}</span>
      { this.props.answers ?
        this.props.answers.map((answer, idx) => <AnswerDetail key={idx} answer={answer} />)
        : "" }
        {  this.props.children }
    </div>;
  }
}

 export default QuestionDetail;
