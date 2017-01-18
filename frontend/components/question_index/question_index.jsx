import React from 'react';
import { Link } from 'react-router';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from '../question_form/question_form_container';
import Modal from 'react-modal';
import modalStyle from '../styles/modal_style';
import UploadFormContainer from '../upload_form/upload_form_container';
import { answeredQuestions, unansweredQuestions } from "../../reducers/selectors";

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalQuestionId: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  openModal(questionId) {
    return (e) => {
      e.preventDefault();
      this.setState({ modalOpen: true,
                      modalQuestionId: questionId });
    };
  }

  closeModal() {
    this.setState({ modalOpen: false});
  }




  render() {
    // let questionKeys = Object.keys(this.props.questions);

    return <div className="question-index">
      <QuestionFormContainer />
      <ul>
        { answeredQuestions(this.props.questions).map((question, idx) =>
          <QuestionIndexItem key={idx}
                             question={question}
                             openModal={this.openModal(question.id)}/>) }
      </ul>
      <Modal isOpen={this.state.modalOpen}
             onRequestClose={this.closeModal}
             style={modalStyle}
             contentLabel="Answer Upload Form">
        <UploadFormContainer questionId={this.state.modalQuestionId}
                             closeModal={this.closeModal}
                             fromIndex={true}/>
      </Modal>
    </div>;
  }

}

export default QuestionIndex;
