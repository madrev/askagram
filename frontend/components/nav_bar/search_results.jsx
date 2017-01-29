import React from 'react';
import { Link } from 'react-router';


class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }


  resultsList() {

    return this.props.searchResults.map(
      (result, idx) =>
            <Link to={`/questions/${result.id}`} key={result.id} ref={idx}>
              <li dangerouslySetInnerHTML={{__html: result.resultText}}/>
            </Link>

    );
  }

  resultsClassName() {
    return (this.props.searchResults.length === 0 ? "hidden" : "") ;
  }


  render() {
    console.log(this.props.searchResults);
    return <div className={`search-results ${this.resultsClassName()}`}>
      <ul>
        {this.resultsList()}
      </ul>
    </div>;
  }

}

export default SearchResults;
