import { set } from "immer/dist/internal";
import { useEffect, useState } from "react";
import "../App.css";
import Displaytable from "./Displaytable/Displaytable";
import Usercard from "./User-card/Usercard";
function Container() {
  //Container Containing All the element
  return (
    <div className="table-card-container">
      <div className="main-content">
        <div className="user-table">
          <Displaytable />
        </div>
        <div className="user-card">
          <Usercard />
          <div className="sidestrip"></div>
        </div>
      </div>
    </div>
  );
}

export default Container;
