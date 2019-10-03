import React, { Component } from "react";
// import SeasonDisplay from "./SeasonDisplay";
// import Loader from './Loader';
// import "./style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lang: null
    }
  }

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
          <p>Latitude :{this.state.lat}</p>
          <p>Longitude :{this.state.long}</p>
        </div>
      )
    }
    return (<h1>Page loading...</h1>)
  }

}

export default App;
