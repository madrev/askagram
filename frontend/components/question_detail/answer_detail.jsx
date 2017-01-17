import React from 'react';
import LikeDisplayContainer from "../like_display/like_display_container";
import { likersAsArray } from "../../reducers/selectors";

class AnswerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.answer = this.props.answer;
    this.handleDelete = this.handleDelete.bind(this);
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
        <LikeDisplayContainer answerId={this.answer.id}/>
        { this.deleteButton(this.answer.id) }
      </div>
      <img src={this.answer.image_url} />
    </li>;
  }

}

export default AnswerDetail;
