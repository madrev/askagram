import React from 'react';
import { Link } from 'react-router';

const thumbnailUrl = answer => {
  const publicKey = /.*\/(.*)/.exec(answer.image_url)[1];
  return `http://res.cloudinary.com/askagram/image/upload/w_400,h_400,c_fill/${publicKey}`;
};

class QuestionIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      firstThumbnailIndex: 0
    };
    this.question = this.props.question;
    this.allAnswers = this.props.question.answers;
  }

  thumbnailUrl(answer) {
     const publicKey = /.*\/(.*)/.exec(answer.image_url)[1];
     return `http://res.cloudinary.com/askagram/image/upload/w_400,h_400,c_fill/${publicKey}`;
  }


  render() {
      return <li className="question-index-item">
      <Link to={`/question/${this.props.question.id}`}>
        <h3>{this.question.title}</h3>
      </Link>
      <div className="answer-thumbnails">
        {this.allAnswers.slice(this.state.firstThumbnailIndex, 3).map(answer => (
        <Link key= {answer.id} to={`/question/${this.question.id}`}>
          <img src= {thumbnailUrl(answer)}
               className="answer-thumbnail" />
        </Link>
                                         )
                                       )}
     <button onClick={ this.props.openModal }>Add Answer</button>
      </div>

    </li>;
  }
}


export default QuestionIndexItem;
