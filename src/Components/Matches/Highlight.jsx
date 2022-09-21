import React from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Parser from "html-react-parser";
class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }
  render() {
    const { video } = this.props;
    if (!video) return <div>Loading...</div>;
    this.show.bind(this);
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div onLoad={this.show.bind(this)}>
          <Rodal
            width={"80%"}
            height={"80%"}
            visible={this.state.visible}
            onClose={this.hide.bind(this)}
          >
            {Parser(video)}
          </Rodal>
        </div>
      </div>
    );
  }
}

export default Highlight;
