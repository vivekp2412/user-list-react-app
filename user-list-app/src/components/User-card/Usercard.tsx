// import React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Usercard.css";
function Usercard() {
  const data = useSelector((state)=>state.data);
  const [show,setShow]=useState();
  return (
    <div className="userCard">
      <div className="user-card-image">
        <img src={data.avatar} alt="" />
      </div>
      <div className="user-name">{data.first_name} {data.last_name}</div>
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
