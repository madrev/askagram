import React from 'react';
import AnswerDetail from './answer_detail';
import Modal from 'react-modal';
import modalStyle from '../styles/modal_style';
import UploadFormContainer from '../upload_form/upload_form_container';



class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount () {
    this.props.fetchQuestionDetail(this.props.params.questionId);
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
  }

  render() {
    const allAnswers = this.props.answers || [];
    return <div className="question-detail">
      <h2>{this.props.title}</h2>
      <span>{this.props.description}</span>
      <button onClick={this.openModal}>Add Answer</button>
      {  this.props.children }
      {  allAnswers.map((answer) => <AnswerDetail key={answer.id}
                                                        answer={answer}
                                                        ownAnswer={this.ownAnswer(answer)}
                                                        deleteAnswer={this.props.deleteAnswer} />) }
      <Modal isOpen={this.state.modalOpen}
             onRequestClose={this.closeModal}
             style={modalStyle}
             contentLabel="Answer Upload Form">
        <UploadFormContainer questionId={this.props.params.questionId}
                             closeModal={this.closeModal}/>
      </Modal>
    </div>;
  }
}

 export default QuestionDetail;
