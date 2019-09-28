import React from "react";
// import SeasonDisplay from "./SeasonDisplay";
// import Loader from './Loader';
// import "./style.css";
const App = () => {

  window.navigator.geolocation.getCurrentPosition(
    pos => console.log(pos),
    err => console.error(err)
  )
  return (
    <div>
      <h1>Latitude: </h1>
      <h1>Longitude: </h1>
    </div>
  );
}

export default App;
