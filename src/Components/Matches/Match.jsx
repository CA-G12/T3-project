import React from "react";

class Match extends React.Component {
  render() {
    const { matchData } = this.props;
    return (
      <li>
        <img src={matchData.thumbnail} />
      </li>
    );
  }
}

export default Match;
