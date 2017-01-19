import { connect } from 'react-redux';
import QuestionIndex from './question_index.jsx';
import  { fetchQuestions, clearErrors } from '../../actions/question_actions.js';
import { answeredQuestions, unansweredQuestions } from "../../reducers/selectors";


const mapStateToProps = ({ questions }) => ({
  questions: questions,
  unansweredQuestions: unansweredQuestions(questions),
  answeredQuestions: answeredQuestions(questions)
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
