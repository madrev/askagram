import { connect } from 'react-redux';
import QuestionForm from './question_form.jsx';
import { createQuestion  } from "../../actions/question_actions";



const mapStateToProps = ({ session }, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createQuestion: question => dispatch(createQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
