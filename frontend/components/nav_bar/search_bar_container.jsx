import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchQuestions, clearSearchResults } from '../../actions/question_actions';
import { searchResultsAsArray } from '../../reducers/selectors';

const mapStateToProps = ({ searchResults }) => ({
  searchResults: searchResultsAsArray(searchResults)
});

const mapDispatchToProps = dispatch => ({
  searchQuestions: query => dispatch(searchQuestions(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
