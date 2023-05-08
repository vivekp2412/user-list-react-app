// import React from 'react';
import "./Usercard.css";
function Usercard() {
  return (
    <div className="userCard">
      <div className="user-card-image">
        <img src="https://reqres.in/img/faces/2-image.jpg" alt="" />
      </div>
      <div className="user-name">Emma W0ng</div>
      <div className="user-email">emma.wong2gmail.com</div>
      <div className="user-plan">Your Plan:Standard</div>
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
