import { connect } from 'react-redux';
import QuestionDetail from './question_detail.jsx';
import  { fetchQuestionDetail } from '../../actions/question_actions.js';

const mapStateToProps = ({ questionDetail }) => ({
  questionDetail
});

const mapDispatchToProps = dispatch => ({
  fetchQuestionDetail: (id) => dispatch(fetchQuestionDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);
