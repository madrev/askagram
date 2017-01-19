import { connect } from 'react-redux';
import UploadForm from './upload_form.jsx';
import { createAnswer  } from "../../actions/answer_actions";



const mapStateToProps = ({ errors }, ownProps) => ({
  questionId: ownProps.question.id,
  title: ownProps.question.title,
  description: ownProps.question.description,
  uploadFormErrors: errors.uploadFormErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAnswer: (file, questionId) => dispatch(createAnswer(file, questionId)),
  closeModal: ownProps.closeModal

  });

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
