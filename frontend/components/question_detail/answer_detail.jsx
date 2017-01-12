import React from 'react';

class AnswerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
  }

  render() {
    return <li className="answer-detail">
      <div className="answer-metadata">
        <span>{this.answer.poster.username}</span>
        <span>{this.answer.time_ago} ago</span>
      </div>
      <img src={this.answer.image_url} />
    </li>;
  }

}

export default AnswerDetail;
