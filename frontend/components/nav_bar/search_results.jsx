import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }

  resultsList() {
    return Object.keys(this.props.searchResults).map(
      id => <li key={ id }><Link to={`/questions/${id}`}>{this.props.searchResults[id].result}</Link></li>
  );

  }

  render() {
    console.log(this.resultsList());
    return <div className="search-results">
      <ul>
        {this.resultsList()}
      </ul>
    </div>;
  }

}

export default SearchResults;
