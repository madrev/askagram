import React from 'react';
import SearchResults from './search_results';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  // updateAndSearch(e) {
  //   const updateState = new Promise( () => {
  //     this.setState({ query: e.target.value});
  //   });
  //   console.log(updateState);
  //   updateState.then( () => {
  //     console.log(this.state.query);
  //     this.props.searchQuestions(this.state.query);
  //   } );
  //
  // }

  updateState(e) {
    this.setState( { query: e.target.value });
  }


  componentWillUpdate(nextProps, nextState) {
    if( this.state.query !== nextState.query) {
      this.props.searchQuestions(nextState.query);
    }
  }

  render() {
    console.log(this.props.searchResults);

    return <div className="search-container">
      <input type="text"
             placeholder="Search questions..."
             className = "search-field"
             value= { this.state.query }
             onChange= { this.updateState }></input>
      <SearchResults searchResults={this.props.searchResults}/>


    </div>;


  }




}

export default SearchBar;
