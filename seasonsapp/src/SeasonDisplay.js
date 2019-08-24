import React from 'react'

const determineSeason =(lat, month) =>{
    return (month > 2 && month < 9 && lat > 0) ? 'Summer' : 'Winter'
}

const SeasonDisplay = (props) => {
    const season = determineSeason(props.latitude, new Date().getMonth())
return(<div>{season}</div>)
}

export default SeasonDisplay;