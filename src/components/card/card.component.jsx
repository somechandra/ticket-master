import React from "react";

import "./card.styles.css";

const Card = ({ record }) => {
  return (
    <div className="Card">
      <div className="CardA">
        <div className="Additional">
          <div className="Classes.UserCard">
            <span>City</span>
          </div>
          <div className="MoreInfo">
            <div className="CardTitle">{record.city.name}</div>
            {record.location && (
              <div className="CardText">
                {record.location.latitude + ", " + record.location.longitude}
              </div>
            )}
          </div>
        </div>
        <div className="General">
          <div className="CardTitle">{record.name}</div>
          <div className="CardText">{record.type}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
