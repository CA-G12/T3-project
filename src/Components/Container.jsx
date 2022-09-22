import axios from "axios";
import React from "react";
import Matches from "./Matches/Matches";
import PageHeader from "./PageHeader";
import PaginationBtns from "./PaginationBtns";
class Container extends React.Component {
  state = {
    dataList: [],
    err: false,
    matchNumber: 6,
    input: "",
    filteredData: [],
  };
  componentDidMount() {
    getData()
      .then(({ data }) => {
        this.setState({ dataList: data });
        this.setState({ filteredData: data });
      })
      .catch((err) => this.setState({ err: true }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.matchNumber !== this.state.matchNumber) {
      this.setState({ matchNumber: this.state.matchNumber });
    }
    if (prevState.input !== this.state.input) {
      this.setState({ input: this.state.input }, () => {
        this.setState({
          filteredData: filterData(this.state.dataList, this.state.input),
        });
      });
    }
    if (prevState.filteredData !== this.state.filteredData) {
      this.setState({ filteredData: this.state.filteredData });
    }
  }

  render() {
    const { filteredData, input, matchNumber, dataList, err } = this.state;
    if (err) {
      return <h1>Server Error 500</h1>;
    }

    if (!dataList) return <div>Loading...</div>;
    return (
      <div className="container">
        <PageHeader />
        <div className="search">
          <input
            placeholder="Search"
            onChange={(e) => this.setState({ input: e.target.value })}
          ></input>
        </div>
        <div>
          <Matches data={filteredData.slice(0, matchNumber)}></Matches>
          <PaginationBtns
            matchesNumber={matchNumber}
            filteredDataLength={filteredData.length}
            decrees={() => {
              this.setState({ matchNumber: matchNumber - 6 }, () => {
                window.scrollBy(0, -50);
              });
            }}
            increase={() => {
              this.setState({ matchNumber: matchNumber + 6 }, () => {
                window.scrollBy(0, 650);
              });
            }}
          />
        </div>
      </div>
    );
  }
}

const getData = () => {
  const options = {
    method: "GET",
    url: "https://free-football-soccer-videos.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "d9eaa4458amsh522d8196cf07d8ap1e6e60jsne6db8c623483",
      "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
    },
  };

  return axios.request(options);
};
const filterData = (data, q) => {
  return data.filter((d) => {
    return d.title.toLowerCase().includes(q.toLowerCase());
  });
};
export default Container;
