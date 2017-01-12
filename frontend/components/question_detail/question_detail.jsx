import React from 'react';


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
    console.log(this.props.answers);
    return <div className="question-detail">
      <h2>{this.props.title}</h2>
      {this.answerList()}
    </div>;
  }
}

 export default QuestionDetail;
