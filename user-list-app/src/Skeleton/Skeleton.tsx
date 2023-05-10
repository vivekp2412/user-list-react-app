import "../components/Displaytable/Displaytable.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonCard() {
  return (
    <div>
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
          {Array(8)
            .fill(8)
            .map((index: number) => {
              return (
                <tr>
                  <td className="user-details">
                    <span className="user-image">
                      <Skeleton height={40} width={40} />
                    </span>
                    <span className="user-name-email">
                      <span className="user-name">
                        <Skeleton height={15} width={70} />{" "}
                        <Skeleton height={15} width={70} />
                      </span>
                      <span className="user-email">
                        {" "}
                        <Skeleton height={15} width={170} />
                      </span>
                    </span>
                  </td>
                  <td className="status-details">
                    <Skeleton height={40} width={100} />
                  </td>
                  <td className="access-details">
                    <Skeleton height={40} width={100} />
                  </td>
                  <td className="icon">
                    <Skeleton height={40} width={40} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default SkeletonCard;
