import axios from "axios";
import React from "react";
import Matches from "./Matches/Matches";
import PageHeader from "./PageHeader";
class Container extends React.Component {
  state = {
    dataList: [],
    err: false,
  };
  componentDidMount() {
    getData()
      .then(({data}) => {
        this.setState({ dataList: data });
      })
      .catch((err) => this.setState({ err: true }));
  }

  render() {
    if (this.state.err) {
      return <h1>Server Error 500</h1>;
    }
    if (!this.state.dataList) return <div>Loading...</div>;
    return (
      <div className="container">
        <PageHeader />
        <Matches data={this.state.dataList}></Matches>
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

export default Container;
