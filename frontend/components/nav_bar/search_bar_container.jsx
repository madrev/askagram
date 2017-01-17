import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchQuestions } from '../../actions/question_actions';

const mapStateToProps = ({ searchResults }) => ({
  searchResults
});

const mapDispatchToProps = dispatch => ({
  searchQuestions: query => dispatch(searchQuestions(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
