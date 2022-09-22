import React from "react";
import Highlight from "./Highlight";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Parser from "html-react-parser";
class Match extends React.Component {
  state = {
    videoLink: null,
    visible: false,
  };
  // componentDidMount() {
  //   const { matchData } = this.props;
  //   this.setState({ videoLink: matchData.embed });
  //   console.log(this.state.videoLink);
  // }

  componentDidUpdate(prevProps, prevState) {
    // re-fetch new pokemon if data prop has changed
    if (prevState.videoLink !== this.state.videoLink) {
      this.setState({ videoLink: this.state.videoLink });
    }
    if (prevState.visible !== this.state.visible) {
      this.setState({ visible: this.state.visible });
    }
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
