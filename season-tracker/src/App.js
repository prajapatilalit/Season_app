import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState(
          { lat: position.coords.latitude },
          { long: position.coords.longitude }
        ),
      (err) => this.setState({ errorMessage: err })
    );
  }

  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

export default App;
