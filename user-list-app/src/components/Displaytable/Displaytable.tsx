import "./Displaytable.css";
import Lock from "../../assets/lock-9c674c88.svg";
import Trash from "../../assets/trash.svg";
import { DummyData } from "../../slices/Dataslice";
import { showCard, hideCard } from "../../slices/Dataslice";
import { useDispatch } from "react-redux";
interface DummyDataInter {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  active: boolean;
  owner: boolean;
  role: string;
  removable: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
function Displaytable() {
  const dispatch = useDispatch();
  return (
    <div className="displayTable">
      <table>
        <thead className="table-head">
          <tr>
            <th className="table-heading-text name-heading">Name </th>
            <th className="table-heading-text status-heading">Status </th>
            <th className="table-heading-text access-heading">Access </th>
            <th className="icon-heading"> </th>
          </tr>
        </thead>
        <tbody>
          {DummyData.map((data: DummyDataInter, index: number) => {
            if (index == 0) {
              return (
                <tr key={index}>
                  <td
                    className="user-details"
                    onMouseOver={() => dispatch(showCard(data._id))}
                    onMouseOut={() => dispatch(hideCard())}
                  >
                    <span className="user-image">
                      <img
                        className="user-image"
                        aria-activedescendant=""
                        src={data.avatar}
                      ></img>
                    </span>
                    <span className="user-name-email">
                      <span className="user-name">
                        {data.first_name} {data.last_name}
                      </span>
                      <span className="user-email">{data.email}</span>
                    </span>
                  </td>
                  <td className="status-details">Active</td>
                  <td className="access-details">Owner</td>
                  <td className="icon">
                    <img src={Lock} alt="" />
                  </td>
                </tr>
              );
            }
            return (
              <tr key={index}>
                <td
                  className="user-details"
                  onMouseOver={() => dispatch(showCard(data._id))}
                  onMouseOut={() => dispatch(hideCard())}
                >
                  <span className="user-image">
                    <img
                      className="user-image"
                      aria-activedescendant=""
                      src={data.avatar}
                    ></img>
                  </span>
                  <span className="user-name-email">
                    <span className="user-name">
                      {data.first_name} {data.last_name}
                    </span>
                    <span className="user-email">{data.email}</span>
                  </span>
                </td>
                <td className="status-details">
                  <select className="status-dropmenu">
                    {data.active ? (
                      <>
                        <option selected>Active</option>
                        <option>Inactive</option>
                      </>
                    ) : (
                      <>
                        <option selected>InActive</option>
                        <option>Active</option>
                      </>
                    )}
                  </select>
                </td>
                <td className="access-details">
                  <select className="access-dropmenu">
                    <option>{data.role}</option>
                  </select>
                </td>
                <td className="icon">
                  <img src={Trash} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Displaytable;
