import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import questionDetailReducer from './question_detail_reducer';
import questionsReducer from './questions_reducer';
import searchResultsReducer from './search_results_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers( {
  session: sessionReducer,
  questions: questionsReducer,
  questionDetail: questionDetailReducer,
  searchResults: searchResultsReducer,
  errors: errorsReducer
});

export default rootReducer;
