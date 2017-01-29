import React from 'react';
import { Link } from 'react-router';


class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeRow: this.props.activeRow
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeRow: nextProps.activeRow
    });
  }

  setActiveRow(idx) {
    return (e) => this.setState({activeRow: idx });
  }

  resultsList() {
    return this.props.searchResults.map(
      (result, idx) =>
            <Link to={`/questions/${result.id}`}
                  key={result.id}
                  ref={idx}
                  onMouseOver= {this.setActiveRow(idx)}
                  className={idx === this.state.activeRow && "active"}>
              <li dangerouslySetInnerHTML={{__html: result.resultText}}/>
            </Link>

    );
  }

  render() {
    return <div className={`search-results`}>
      <ul>
        {this.resultsList()}
      </ul>
    </div>;
  }

}

export default SearchResults;
