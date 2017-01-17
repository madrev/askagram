import { connect } from 'react-redux';
import LikeDisplay from './like_display.jsx';
import  { likeAnswer, unlikeAnswer } from '../../actions/answer_actions.js';
import { likersAsArray } from "../../reducers/selectors";

const mapStateToProps = ({ questionDetail, session }, ownProps) => ({
  currentUser: session.currentUser,
  likers: likersAsArray(questionDetail.answers[ownProps.answerId]),
  answerId: ownProps.answerId
});

const mapDispatchToProps = dispatch => ({
  likeAnswer: answerId => dispatch(likeAnswer(answerId)),
  unlikeAnswer: answerId => dispatch(unlikeAnswer(answerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeDisplay);
