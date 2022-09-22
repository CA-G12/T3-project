import React from "react";
import Highlight from "./Highlight";
import Match from "./Match";

class Matches extends React.Component {
  state = {
    matchesList: null,
  };
  componentDidMount() {
    const { data } = this.props;
    this.setState({ matchesList: data.data });
  }
  componentDidUpdate(prevProps) {
    const { data } = this.props;
    // re-fetch new pokemon if data prop has changed
    if (prevProps.data !== data) {
      this.setState({ matchesList: data.data });
    }
  }
  render() {
    console.log(this.state.matchesList);
    if (!this.state.matchesList) return <div>Loading...</div>;
    return (
      <div>
        <h1>Top Matches Highlights</h1>
        {this.state.matchesList.map((m) => (
          <div key={m.title}>
            <Match matchData={m} />
          </div>
        ))}
      </div>
    );
  }
}

export default Matches;
