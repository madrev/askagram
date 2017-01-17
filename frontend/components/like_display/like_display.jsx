import React from 'react';
import FontAwesome from 'react-fontawesome';

class LikeDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likeCount: this.props.likers.length,
      likedByCurrentUser:
        this.props.likers.map( liker => liker.id ).indexOf(this.props.currentUser.id) !== -1
    };
    this.answerId = this.props.answerId;
    this.toggleLike = this.toggleLike.bind(this);
  }
  componentWillReceiveProps(newProps) {
    console.log(this.answerId);
    console.log("Receiving props");
    console.log(this.props.likers);
    console.log(newProps.likers);
    this.setState({
      likeCount: newProps.likers.length,
      likedByCurrentUser:
        newProps.likers.map( liker => liker.id ).indexOf(this.props.currentUser.id) !== -1
    });
  }
  toggleLike(e) {
    e.preventDefault();
    if(this.state.likedByCurrentUser) this.unlikeAnswer();
    else this.likeAnswer();
  }

  likeAnswer() {
    this.props.likeAnswer(this.props.answerId);
    // .then( () => {
    //   this.setState({ likeCount: this.state.likeCount +1,
    //                   likedByCurrentUser: true});
    // });
  }

  likeButtonClass() {
    return (this.state.likedByCurrentUser ? "liked" : "");
  }

  unlikeAnswer() {
    this.props.unlikeAnswer(this.props.answerId);
    // .then( () => {
    //   this.setState({ likeCount: this.state.likeCount -1,
    //                   likedByCurrentUser: false});
    // });
  }

  likeText() {
    switch(this.state.likeCount) {
      case 0:
        return "";
      case 1:
        return "1 person likes this.";
      default:
        return `${this.state.likeCount} people like this.`;
    }
  }

  render() {
    let buttonText = (this.state.likedByCurrentUser ? "Unlike" : "Like");
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
