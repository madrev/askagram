import { RECEIVE_SEARCH_RESULTS } from "../actions/question_actions";

const _defaultState = {};

const searchResultsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

export default searchResultsReducer;
