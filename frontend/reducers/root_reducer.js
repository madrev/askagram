import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import questionDetailReducer from './question_detail_reducer';
import questionsReducer from './questions_reducer';

const rootReducer = combineReducers( {
  session: sessionReducer,
  questions: questionsReducer,
  questionDetail: questionDetailReducer,
});

export default rootReducer;
