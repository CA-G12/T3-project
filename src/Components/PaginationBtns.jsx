import React from "react";
class PaginationBtns extends React.Component {
  render() {
    const { matchesNumber, filteredDataLength, decrees, increase } = this.props;
    return (
      <div className="btns">
        {matchesNumber > 6 && (
          <button className="show-less" onClick={() => decrees()}>
            Show Less
          </button>
        )}
        {filteredDataLength > 6 && matchesNumber < filteredDataLength && (
          <button className="show-more" onClick={() => increase()}>
            Show More
          </button>
        )}
      </div>
    );
  }
}

export default PaginationBtns;
