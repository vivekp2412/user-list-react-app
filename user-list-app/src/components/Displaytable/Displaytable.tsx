import "./Displaytable.css";
import Lock from "../../assets/lock-9c674c88.svg";
import Trash from "../../assets/trash.svg";

import { showCard, hideCard } from "../../slice/Dataslice";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCard from "../../Skeleton/Skeleton";
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
  _v: number;
}
interface Statetype {
  data: DummyDataInter;
  showCard: boolean;
  pageData: DummyDataInter[];
  pending: boolean;
  error: string;
}
//Display Table
function Displaytable(): JSX.Element {
  const dispatch = useDispatch();
  let DummyData = useSelector((state: Statetype) => state.pageData);
  let ispending = useSelector((state: Statetype) => state.pending);
  return (
    <>
      <div className="displayTable">
        {ispending ? (
          //Skeleton Made for Pending state
          <SkeletonCard />
        ) : (
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
                    <tr key={data._id + index}>
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
                  <tr key={data._id + index}>
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
                            <option selected>Inactive</option>
                            <option>Active</option>
                          </>
                        )}
                      </select>
                    </td>
                    <td className="access-details">
                      <select className="access-dropmenu">
                        <option>manager</option>
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
        )}
      </div>
    </>
  );
}

export default Displaytable;
