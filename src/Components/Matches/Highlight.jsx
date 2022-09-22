import React from "react";
import Parser from "html-react-parser";
class Highlight extends React.Component {
  render() {
    const { fun, videoLink } = this.props;
    if (!videoLink) return <div>Loading...</div>;
    return (
      <div className="popup">
        <div className="video">{Parser(videoLink)} </div>
        <button onClick={() => fun(null)}>x</button>
      </div>
    );
  }
}

export default Highlight;
