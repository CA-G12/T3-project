import React from "react";
import Match from "./Match";

class Matches extends React.Component {
  render() {
    const { data } = this.props;
    if (!data) return <div>Loading...</div>;
    return (
      <div className="matches">
        {data.map((m) => (
          <div key={m.title}>
            <Match matchData={m} />
          </div>
        ))}
      </div>
    );
  }
}

export default Matches;
