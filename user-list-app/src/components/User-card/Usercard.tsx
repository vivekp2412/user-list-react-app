import { useSelector } from "react-redux";
import "./Usercard.css";
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
  __v: number;
}

interface State {
  data: DummyDataInter;
  showcard: false;
  pageData: [];
  pending: false;
  error: "";
}
function Usercard() {
  let data = useSelector((state: State) => state.data);
  let showCard = useSelector((state: State) => state.showcard);
  return (
    <div className={showCard ? "userCard show" : "userCard hidden"}>
      <div className="user-card-image">
        <img src={data.avatar} alt="" />
      </div>
      <div className="user-name user-name-card">
        {data.first_name} {data.last_name}
      </div>
      <div className="user-email">{data.email}</div>
      <div className="user-plan">Your Plan: Standard</div>
      <div className="active-button">
        <div className="activebutton">Active Users</div>
      </div>
      <div className="plan-progressbar">
        <div>
          <p>Plan Uses </p>
        </div>
        <progress
          className="user-card-progressbar"
          value="75"
          max="100"
        ></progress>
      </div>
      <div className="click-details">
        <div className="clicks-reviewed">
          <div className="clicks-value">2496</div>
          <div className="clicks-details-text">Clicks Reviewed</div>
        </div>
        <div className="monthly-clicks">
          <div className="clicks-reviewed">
            <div className="clicks-value">2496</div>
            <div className="clicks-details-text">Monthly clicks</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercard;
