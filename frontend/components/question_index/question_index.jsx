import React from 'react';
import { Link } from 'react-router';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from '../question_form/question_form_container';
import Modal from 'react-modal';
import modalStyle from '../styles/modal_style';
import UploadFormContainer from '../upload_form/upload_form_container';
import UnansweredIndex from './unanswered_index';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalQuestion: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  openModal(question) {
    return (e) => {
      e.preventDefault();
      this.setState({ modalOpen: true,
                      modalQuestion: question });
    };
  }

  closeModal() {
    this.setState({ modalOpen: false});
    this.props.clearErrors();
  }


  render() {

    return <div className="question-index">
      <div className="question-utils">
        <QuestionFormContainer />
        <UnansweredIndex questions={this.props.unansweredQuestions}
                         openModal={this.openModal} />
      </div>
      <ul>
        { this.props.answeredQuestions.map((question, idx) =>
          <QuestionIndexItem key={idx}
                             question={question}
                             openModal={this.openModal(question)}/>) }
      </ul>
      <Modal isOpen={this.state.modalOpen}
             onRequestClose={this.closeModal}
             style={modalStyle}
             contentLabel="Answer Upload Form">
        <UploadFormContainer question={this.state.modalQuestion}
                             closeModal={this.closeModal}
                             fromIndex={true}/>
      </Modal>
    </div>;
  }

}

export default QuestionIndex;
