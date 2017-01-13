import React from 'react';
import { Link } from 'react-router';
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }


  render() {
    let questionKeys = Object.keys(this.props.questions);

    return <div className="question-index">
      <ul>
        { questionKeys.map((id, idx) =>
          <QuestionIndexItem key={idx} question={this.props.questions[id]} />) }
      </ul>
    </div>;
  }

}

export default QuestionIndex;


// TODO: ADD TO ROUTE
