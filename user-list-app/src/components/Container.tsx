import { is } from "immer/dist/internal";
import { useSelector } from "react-redux";
import "../App.css";
import Displaytable from "./Displaytable/Displaytable";
import Pagination from "./Paginate/Pagination";
// import Paginate from "./Paginate/Paginate";

import Usercard from "./User-card/Usercard";
function Container() {
  return (
    <div className="table-container">
      <div className="main-content">
        <div className="user-table">
          <Displaytable />
          <Pagination />
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
