import React, { useRef, useState } from "react";
import Persons from "../../organisms/Persons/Persons";
import PersonsList from "../../organisms/PersonsList/PersonsList";
import PersonsEquipmentInfo from "../../organisms/PersonsEquipmentInfo/PersonsEquipmentInfo";
import { IoMdClose } from "react-icons/io";
import './PersonsPage.scss'
const PersonsPage = () => {
    const [id, setId] = useState("")
    const [personName, setPersonName] = useState("")
    const [email, setEmail] = useState("")
    const [type, setType] = useState("")
    const [name, setName] = useState("")
    const [skype, setSkype] = useState("")
    const [information, setInformation] = useState("")
    const [info, setInfo] = useState([])
    // const [popupStatus,setPopupStatus] = useState("none");
    const personsPopup = useRef(null);

    const handleInfoClick = () => {
        if (personsPopup.current.style.display === "none") {
            personsPopup.current.style.display = "block";
        } else {
            personsPopup.current.style.display = "none";
        }
    }
    const closeFunction = () => {
        personsPopup.current.style.display = "none";
    }

    console.log(personsPopup);
    console.log(information);

    return (
        <div className="persons-container-wrapper" >
            <PersonsList setId={setId} setPersonName={setPersonName} setEmail={setEmail} setSkype={setSkype} setInfo={setInfo}></PersonsList>
            <Persons id={id} personName={personName} skype={skype} email={email} info={info} setType={setType} setName={setName} setInformation={setInformation} handleInfoClick={handleInfoClick}></Persons>
            
            <div className = "right" ref={personsPopup}>
            {information && 
            <PersonsEquipmentInfo type={type} personName={personName} name={name}  information={information}  personsPopup={personsPopup} closeFunction={closeFunction}></PersonsEquipmentInfo>

            

            }
            </div>
        </div>
)};
export default PersonsPage;
