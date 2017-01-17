import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
  }

  resultsList() {
    const resultText = id => this.props.searchResults[id].result;
    return Object.keys(this.props.searchResults).map(
      id => <li key={ id }>
              <Link to={`/questions/${id}`}
                    dangerouslySetInnerHTML={{__html: resultText(id)}}/>
            </li>
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
