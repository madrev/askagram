import React from 'react';
import AnswerDetail from './answer_detail';
import Modal from 'react-modal';
import modalStyle from '../styles/modal_style';
import UploadFormContainer from '../upload_form/upload_form_container';
import { withRouter } from 'react-router';
import { answersAsArray } from '../../reducers/selectors';



class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestionDetail(this.props.params.questionId);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.params.questionId !== nextProps.params.questionId) {
      this.props.fetchQuestionDetail(nextProps.params.questionId);
      return false;
    }
    else return true;
  }



  ownAnswer(answer) {
    return answer.poster.id === this.props.currentUser.id;
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalOpen: true});
  }

  closeModal() {
    this.setState({ modalOpen: false});
    this.props.clearErrors();
  }

  renderAnswerDetails() {
    const allAnswers = answersAsArray(this.props.answers)
    if(allAnswers.length !== 0 )  {
      return (allAnswers.map((answer) => <AnswerDetail key={answer.id}
                                               answer={answer}
                                               ownAnswer={this.ownAnswer(answer)}
                                               deleteAnswer={this.props.deleteAnswer} />));
    }
// Checks for the case where the question has not been fetched yet
    else if (this.props.title !== "") {
      return <div className="no-answers-message">
        <h4>There's nothing here.</h4>
        <span>Be the first to answer this question!</span>
      </div>;
    } else {
      return "";
    }
  }

  render() {
    return <div className="question-detail">
      <div className="question-metadata">
        <h2>{this.props.title}</h2>
        { this.props.description ? <span>{this.props.description}</span> : "" }
        <span>Asked by {this.props.author.username} {this.props.timeAgo} ago</span>
        <button onClick={this.openModal}>Add Answer</button>
      </div>
      {  this.props.children }
      { this.renderAnswerDetails() }

      <Modal isOpen={this.state.modalOpen}
             onRequestClose={this.closeModal}
             style={modalStyle}
             contentLabel="Answer Upload Form">
        <UploadFormContainer question={this.props.questionDetail}
                             closeModal={this.closeModal}/>
      </Modal>
    </div>;
  }

  componentWillUnmount() {
    this.props.clearQuestionDetail();
  }
}


 export default withRouter(QuestionDetail);
