import React from "react";

const seasonConfig = {
    summer : {
        text:'Lets hit the beach!',
        iconName : 'sun'
    },
    winter : {
        text : 'It is chilly',
        iconName: 'snowflake'
    }
}

const determineSeason = (lat, month) => {
  return month > 2 && month < 9 && lat > 0 ? "summer" : "winter";
};

const SeasonDisplay = props => {
  const season = determineSeason(props.latitude, new Date().getMonth());
  const { text , iconName } = seasonConfig[season]

    return <div className={`season-display ${season}`}>
        <i className={`${iconName} icon massive left`} />
        <h1 className={'main-text'}>{text}</h1>
        <i className={`${iconName} icon massive right`} />
    </div>;
};

export default SeasonDisplay;
