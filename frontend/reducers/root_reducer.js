import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import questionDetailReducer from './question_detail_reducer';

const rootReducer = combineReducers( {
  session: sessionReducer,
  questionDetail: questionDetailReducer
});

export default rootReducer;
