import React from "react";
import ManagementButtons from "./ManagementButtons";
import DrawCard from "./DrawCard";

const SummaryBox = () => {
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col">
              <DrawCard />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ManagementButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
