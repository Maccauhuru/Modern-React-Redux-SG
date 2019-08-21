import React from "react";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude : null
        }
    }

    render(){
        window.navigator.geolocation.getCurrentPosition(
            pos => console.log(pos.coords.latitude),
            err => console.error(err)
        );
        return(<div>Latitude :</div>)
    }


};

export default App;
