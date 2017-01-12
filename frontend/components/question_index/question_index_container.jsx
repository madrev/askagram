import { connect } from 'react-redux';
import QuestionIndex from './question_index.jsx';
import  { fetchQuestions } from '../../actions/question_actions.js';

const mapStateToProps = ({ questions }) => ({
  questions: questions
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
