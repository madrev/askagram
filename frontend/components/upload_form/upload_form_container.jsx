import { connect } from 'react-redux';
import UploadForm from './upload_form.jsx';
import { createAnswer  } from "../../actions/answer_actions";



const mapStateToProps = ({ session }, ownProps) => ({
  questionId: ownProps.questionId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAnswer: (file, questionId) => dispatch(createAnswer(file, questionId)),
  closeModal: ownProps.closeModal

  });

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
