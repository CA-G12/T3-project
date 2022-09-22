import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Parser from "html-react-parser";
class Highlight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { videoLink } = this.props;
    const { fun } = this.props;
    console.log(fun);
    if (!videoLink) return <div>Loading...</div>;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "800px" }}>{Parser(videoLink)} </div>
        <button
          onClick={() => fun(null)}
          style={{
            width: "40px",
            height: "40px",
            position: "absolute",
            top: "40px",
            right: "40px",
            color: "red",
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default Highlight;
