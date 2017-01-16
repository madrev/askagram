import { connect } from 'react-redux';
import LikeDisplay from './like_display.jsx';
import  { likeAnswer, unlikeAnswer } from '../../actions/like_actions.js';

const mapStateToProps = ({ questionDetail, session }, ownProps) => ({
  currentUser: session.currentUser,
  likers: ownProps.likers,
  answerId: ownProps.answerId
});

const mapDispatchToProps = dispatch => ({
  likeAnswer: answerId => dispatch(likeAnswer(answerId)),
  unlikeAnswer: answerId => dispatch(unlikeAnswer(answerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeDisplay);
