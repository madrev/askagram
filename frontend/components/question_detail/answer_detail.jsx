import React from 'react';

class AnswerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
    this.handleDelete = this.handleDelete.bind(this);
    console.log(this.props.ownAnswer);
  }

  handleDelete(id) {
    return e => {
      e.preventDefault();
      this.props.deleteAnswer(id);
    };
  }

  deleteButton(id) {
    if(this.props.ownAnswer) return <button onClick={this.handleDelete(id)}>Delete</button>;
  }

  render() {
    return <li className="answer-detail">
      <div className="answer-metadata">
        <span>{this.answer.poster.username}</span>
        <span>{this.answer.time_ago} ago</span>
        { this.deleteButton(this.answer.id) }
      </div>
      <img src={this.answer.image_url} />
    </li>;
  }

}

export default AnswerDetail;
