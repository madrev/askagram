import React from 'react';
import { Link } from 'react-router';
// import keydown, { Keys } from 'react-keydown';
//
// const { ENTER, UP, DOWN } = Keys;

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resultLength: Object.keys(this.props.searchResults).length,
      activeRow: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      resultLength: Object.keys(nextProps.searchResults).length,
      activeRow: null
    });
  }




  resultsList() {
    const resultText = id => this.props.searchResults[id].result;
    return Object.keys(this.props.searchResults).map(
      (id, idx) =>
            <Link to={`/questions/${id}`} key={id} ref={idx}>
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
