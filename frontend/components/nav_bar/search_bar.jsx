import React from 'react';
import SearchResults from './search_results';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      resultLength: this.props.searchResults.length,
      activeRow: null
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  updateQuery(e) {
    this.setState( { query: e.target.value });
  }

  updateResults() {
    this.setState({
      resultLength: this.props.searchResults.length,
      activeRow: null
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if( this.state.query !== nextState.query) {
      this.props.searchQuestions(nextState.query).then( () =>
      this.updateResults());
    }
    if(this.props.location !== nextProps.location) {
      this.props.clearSearchResults();
      this.setState({ query: "" });
    }
  }

  handleKeyPress(e) {
    switch(e.key) {
      case 'ArrowUp':
        this.scrollUp();
        break;
      case 'ArrowDown':
        this.scrollDown();
        break;
      case 'Enter':
        this.navigateToResult();
        break;
    }
  }

  scrollUp() {
    let lastRow = this.state.resultLength - 1;
    if(this.state.activeRow === null || this.state.activeRow === 0) {
          this.setState({ activeRow: lastRow});
      } else {
          this.setState({ activeRow: this.state.activeRow - 1});
      }
  }

  scrollDown() {
    let lastRow = this.state.resultLength - 1;
    if(this.state.activeRow === null || this.state.activeRow === lastRow) {
        this.setState({ activeRow: 0 });
      } else {
        this.setState({ activeRow: this.state.activeRow + 1});
      }
  }

  navigateToResult() {
    if(this.state.activeRow !== null) {
      let activeResultId = this.props.searchResults[this.state.activeRow].id;
      this.props.router.push(`/questions/${activeResultId}`);
    }
  }


  render() {
    return <div className="search-container">
      <input type="text"
             placeholder="Search questions..."
             className = "search-field"
             onKeyDown= { this.handleKeyPress }
             value= { this.state.query }
             onChange= { this.updateQuery }>
      </input>
      { this.state.resultLength > 0 &&
        <SearchResults searchResults={this.props.searchResults }
                       activeRow= { this.state.activeRow }/> }
    </div>;


  }

}

export default withRouter(SearchBar);
