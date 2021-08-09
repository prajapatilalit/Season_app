import React, { Component } from "react";
import Loader from "./Loader";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //Helper function

  renderContents = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please allow location request" />;
  };

  render() {
    return <div className="border">{this.renderContents()}</div>;
  }
}

export default App;
