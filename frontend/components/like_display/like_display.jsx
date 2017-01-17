import React from 'react';
import FontAwesome from 'react-fontawesome';

class LikeDisplay extends React.Component {
  constructor(props){
    super(props);
    this.answerId = this.props.answerId;
    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike(e) {
    e.preventDefault();
    if(this.likedByCurrentUser()) this.unlikeAnswer();
    else this.likeAnswer();
  }

  likeAnswer() {
    this.props.likeAnswer(this.props.answerId);
  }

  likedByCurrentUser() {
    return (this.props.likers.map( liker => liker.id ).indexOf(this.props.currentUser.id) !== -1);
  }

  likeButtonClass() {
    return (this.likedByCurrentUser() ? "liked" : "");
  }

  unlikeAnswer() {
    this.props.unlikeAnswer(this.props.answerId);
  }

  likeText() {
    switch(this.props.likers.length) {
      case 0:
        return "";
      case 1:
        return "1 person likes this.";
      default:
        return `${this.props.likers.length} people like this.`;
    }
  }

  render() {
    let buttonText = (this.likedByCurrentUser() ? "Unlike" : "Like");
    return <div className="like-display">
      <FontAwesome name="heart"
                   size="2x"
                   onClick={this.toggleLike}
                   className={this.likeButtonClass()}/>
      <span>{this.likeText()}</span>
    </div>;
  }

}

export default LikeDisplay;
