import React from 'react';


class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchQuestionDetail(this.props.params.questionId);
  }

  render() {
    return <p>{this.props.questionDetail.title}</p>;
  }
}

 export default QuestionDetail;
