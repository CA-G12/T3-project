import React from "react";
import Highlight from "./Highlight";
class Match extends React.Component {
  state = {
    videoLink: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.videoLink !== this.state.videoLink)
      this.setState({ videoLink: this.state.videoLink });
    
  }
  render() {
    const { matchData } = this.props;
    return (
      <>
        <div
          style={{ width: "200px" }}
          onClick={() => this.setState({ videoLink: matchData.embed })}
        >
          <img style={{ maxWidth: "100%" }} src={matchData.thumbnail} />
        </div>
        {this.state.videoLink && (
          <Highlight
            videoLink={this.state.videoLink}
            fun={(sta) => this.setState({ videoLink: sta })}
          ></Highlight>
        )}
      </>
    );
  }
}

export default Match;
