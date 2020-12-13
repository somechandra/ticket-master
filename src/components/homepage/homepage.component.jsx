import React from "react";

import SearchInput from "../search-input/search-input.component";
import ResultItem from "../result-items/result-items.component";

import "./homepage.styles.css";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      searchField: "",
      histories: []
    };
  }

  getResults = (keyword) => {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/venues.json?keyword=${keyword}&apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0`
    )
      .then((response) => response.json())
      .then((res) =>
        this.setState({
          records: res._embedded ? res._embedded.venues : [],
          histories: [...this.state.histories, keyword]
        })
      );
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
    this.getResults(e.target.value);
  };

  render() {
    let updatedHistories = [];
    let count = 0;
    for (let i = this.state.histories.length - 1; i >= 0; i--) {
      updatedHistories.push(this.state.histories[i]);
      count++;
      if (count === 5) break;
    }
    return (
      <div>
        <SearchInput
          handleChange={this.handleChange}
          placeholder="Enter any keywords"
        />
        <div className="search-input-caption">
          Ex. (Type these words for example): "ticket", "universe",
          "ticketmaster" etc...
        </div>
        <div className="flex-container">
          <div className="flex-child magenta">
            <div className="title">Results</div>
            {this.state.records.length > 0 && (
              <ResultItem records={this.state.records} />
            )}
          </div>
          <div className="flex-child green">
            <div className="title">Histories</div>
            {updatedHistories.length > 0
              ? updatedHistories.map((name, idx) => <div key={idx}>{name}</div>)
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
