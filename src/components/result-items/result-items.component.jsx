import React from "react";

import Card from "../card/card.component";

import "./result-item.styles.css";

const ResultItem = ({ records }) => {
  return (
    <div className="Results">
      {records.map((record, index) => {
        return <Card key={record.id + "" + index} record={record} />;
      })}
    </div>
  );
};

export default ResultItem;
