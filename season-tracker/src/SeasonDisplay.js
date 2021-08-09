import React, { Component } from "react";

class SeasonDisplay extends Component {
  render() {
    return (
      <div>
        Latitude: {this.props.lat}
        {/* <i className={`${iconName} icon`} />
        <h1>text</h1>
        <i className={`${iconName} icon`} /> */}
      </div>
    );
  }
}

export default SeasonDisplay;
