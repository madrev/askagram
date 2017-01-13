import { connect } from 'react-redux';
import UploadForm from './upload_form.jsx';
import { createAnswer  } from "../../actions/answer_actions";



const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAnswer: (file, questionId, userId) => dispatch(createAnswer(file, questionId, userId))
  });

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
