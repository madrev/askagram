import { connect } from 'react-redux';
import QuestionDetail from './question_detail.jsx';
import  { fetchQuestionDetail } from '../../actions/question_actions.js';

const mapStateToProps = ({ questionDetail }) => ({
  title: questionDetail.title,
  description: questionDetail.description,
  answers: questionDetail.answers
});

const mapDispatchToProps = dispatch => ({
  fetchQuestionDetail: (id) => dispatch(fetchQuestionDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
