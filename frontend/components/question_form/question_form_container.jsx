import { connect } from 'react-redux';
import QuestionForm from './question_form.jsx';
import { createQuestion  } from "../../actions/question_actions";



const mapStateToProps = ({ errors }, ownProps) => ({
  questionFormErrors: errors.questionFormErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createQuestion: question => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
