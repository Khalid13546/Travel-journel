import React from "react";
import info from "./info";

function Travelinfo(props) {
  return (
    <div className="travel">
      <img src={props.imageUrl} className="img" />
      <div className="details">
        <h5 className="heading">{props.title}</h5>
        <h6 className="location">{props.location}</h6>
        <p className="dates">
          <strong>
            {props.startDate}-{props.endDate}
          </strong>
        </p>
        <p className="describe">{props.description}</p>

        <hr />
      </div>
    </div>
  );
}
export default Travelinfo;
