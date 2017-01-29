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
    if(e.key === "ArrowUp") this.scrollUp();
    else if(e.key === "ArrowDown") this.scrollDown();
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
    console.log("scrolling down...");
    if(this.state.activeRow === null || this.state.activeRow === lastRow) {
        console.log(this.state.activeRow);
        console.log(`null or ${lastRow}...`);
        this.setState({ activeRow: 0 });
      } else {
        console.log('adding one...');
        this.setState({ activeRow: this.state.activeRow + 1});
      }
  }



  render() {
    return <div className="search-container">
      <input type="text"
             placeholder="Search questions PLZZZ..."
             className = "search-field"
             onKeyDown= {this.handleKeyPress}
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
