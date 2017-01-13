import React from 'react';
import AnswerDetail from './answer_detail';


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.answers = this.props.answers;
  }

  componentDidMount () {
    this.props.fetchQuestionDetail(this.props.params.questionId);
  }

  componentWillReceiveProps(newProps) {
    this.answers = newProps.answers;
    console.log(this.answers);
    this.render();
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
      {  this.props.children }
      { this.answers ?
        this.answers.map((answer, idx) => <AnswerDetail key={idx} answer={answer} />)
        : "" }
    </div>;
  }
}

 export default QuestionDetail;
