import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
// import Loader from './Loader';
// import "./style.css";
class App extends Component {
    state = {
      lat: null,
      long: null
    };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({
          lat: pos.coords.latitude,
          long: pos.coords.longitude,
          errMsg: '',
        })
      },
      err => {
        this.setState({
          errMsg: err.message
        })
      }
    )
  }

  render() {
    if (!this.state.lat && this.state.errMsg) {
      return (<h1>{this.state.errMsg}</h1>)
    }
    if (this.state.lat && !this.state.errMsg) {
      return (
        <div>
         <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        </div>
      )
    }
    return (<Loader />)
  }

}

export default App;
