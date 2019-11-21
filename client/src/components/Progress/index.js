import React from "react";
import "./style.css";
import { ldBar } from "@loadingio/loading-bar";

export default props =>
 
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 prog">
          <h3>Lesson Progress</h3>
          <div className="progress-div">
            <div
              data-preset="stripe"
              className="ldBar label-center"
              data-value={props.value}
            ></div>
          </div>
        </div>
      </div>
    </div>
 

