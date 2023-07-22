import React from "react";

export default function Main(props) {
  return (
    <div className="main">
      <div className="view">
        <img className="viewPicture" src={props.item.imageUrl} alt="viewPicture" />
      </div>
      <div className="info">
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          <p>{props.item.location}</p>
          <a className="maps" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2>{props.item.title}</h2>
        <div className="timePeriod">
          <p>{props.item.startDate}-</p>
          <p>{props.item.endDate}</p>
        </div>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
