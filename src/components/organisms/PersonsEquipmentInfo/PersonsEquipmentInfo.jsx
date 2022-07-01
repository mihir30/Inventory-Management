import React, { useRef } from "react";
import "./PersonsEquipmentInfo.scss";
import { IoMdClose } from "react-icons/io";
import Persons from "../Persons/Persons";


const PersonsEquipmentInfo = ({ type, personName, name, information, personsPopup, closeFunction }) => {

    console.log(personsPopup)
    return (
        <div className="pop-up-box">
            <div className="right-box">
            <div className="info-heading-box">
                <i className="close-button" onClick={closeFunction}><IoMdClose /></i>
                <div className="info-heading">{information.type} {information.serial}</div>
            </div>
            <div className="info-box">
                <div>
                    <span className="info-parameter">Status: </span> <span className="info-result blue">Taken</span>
                </div>
                <div>
                    <span className="info-parameter">Assigned to: </span><span className="info-result blue">{personName}</span>
                </div>
                <div>
                    <span className="info-parameter">Model: </span><span className="info-result ">{information.name}</span>
                </div>
                <div>
                    <span className="info-parameter">Size,inch:</span> <span className="info-result ">32</span>
                </div>
               

            </div>
            </div>
        </div>
    )
}
export default PersonsEquipmentInfo;