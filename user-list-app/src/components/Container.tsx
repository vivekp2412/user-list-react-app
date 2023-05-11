import { is } from "immer/dist/internal";
import { useSelector } from "react-redux";
import "../App.css";
import Displaytable from "./Displaytable/Displaytable";
import Pagination from "./Paginate/Pagination";
import Usercard from "./User-card/Usercard";
//Container Containing All the Components
function Container() {
  return (
    <div className="table-container">
      <div className="main-content">
        <div className="user-table">
          <Displaytable />
          <div className="pagination">
            <Pagination />
          </div>
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
