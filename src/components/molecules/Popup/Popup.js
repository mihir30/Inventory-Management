import React from "react";
 import './Popup.scss'
const Popup = props => {
  let itemstatus = localStorage.getItem("status");
  let itemAssigned = localStorage.getItem("Assigned to");
  let itemmodel = localStorage.getItem("model");
  let itemsize = localStorage.getItem("size");

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <div>Status   {itemstatus}</div>
          <div>Assigned to  {itemAssigned}</div>
          <div>Model  {itemmodel}</div>
          <div>Size,inch  {itemsize}</div>
          <div>Logs</div>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;