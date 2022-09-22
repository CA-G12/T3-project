import React from "react";
import Highlight from "./Highlight";
class Match extends React.Component {
  state = {
    videoLink: null,
  };

  componentDidUpdate(prevProps, prevState) {

    if (prevState.videoLink !== this.state.videoLink) {
      this.setState({ videoLink: this.state.videoLink });
    }

  }
  render() {
    const { matchData } = this.props;
    return (
      <>
        <div className="single-match">
          <img src={matchData.thumbnail} />
          <div className="hover">
            <p>{matchData.competition.name}</p>
            <p>{new Date(matchData.date).toLocaleDateString()}</p>
            <p>{matchData.title}</p>
            <button
              onClick={() => this.setState({ videoLink: matchData.embed })}
            >
              Watch Highlight
            </button>
          </div>
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
