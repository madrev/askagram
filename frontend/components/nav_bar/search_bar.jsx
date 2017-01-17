import React from 'react';
import SearchResults from './search_results';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState( { query: e.target.value });
  }


  componentWillUpdate(nextProps, nextState) {
    if( this.state.query !== nextState.query) {
      this.props.searchQuestions(nextState.query);
    }
    if(this.props.location !== nextProps.location) {
      this.props.clearSearchResults();
      this.setState({ query: "" });
    }
  }



  render() {
    return <div className="search-container">
      <input type="text"
             placeholder="Search questions..."
             className = "search-field"
             value= { this.state.query }
             onChange= { this.updateState }></input>
      <SearchResults searchResults={this.props.searchResults }/>


    </div>;


  }




}

export default withRouter(SearchBar);
