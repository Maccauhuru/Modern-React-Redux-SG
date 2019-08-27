import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from './Loader';
import "./style.css";
class App extends React.Component {
  state = {
    latitude: null,
    errMessage: ""
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos =>
        this.setState({
          latitude: pos.coords.latitude
        }),
      err =>
        this.setState({
          errorMessage: err.message
        })
    );
  }

  componentDidUpdate() {
    console.log("component was updated & has re-rendered");
  }

  renderContent () {
    if (!this.state.errorMessage && this.state.latitude) {
      return (
          <div>
            <SeasonDisplay latitude={this.state.latitude} />
          </div>
      );
    }
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error : {this.state.errorMessage}</div>;
    } else {
      return <Loader  />
    }
  }

  render() {
 return (<div>{this.renderContent()}</div>)
  }
}

export default App;
