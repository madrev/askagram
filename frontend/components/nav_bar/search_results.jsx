import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }

  resultsList() {
    const resultText = id => this.props.searchResults[id].result;
    return Object.keys(this.props.searchResults).map(
      id =>
            <Link to={`/questions/${id}`} key={id}>
              <li dangerouslySetInnerHTML={{__html: resultText(id)}}/>
            </Link>

    );
  }

  resultsClassName() {
    return (Object.keys(this.props.searchResults).length === 0 ? "hidden" : "") ;
  }


  render() {
    return <div className={`search-results ${this.resultsClassName()}`}>
      <ul>
        {this.resultsList()}
      </ul>
    </div>;
  }

}

export default SearchResults;
