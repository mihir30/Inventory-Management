import React from "react";
import { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./AddNewUnit.scss";
import Button from '../../atoms/Button/Button';
import data from '../AddNewUnit/dropdowndata';
import Computer from '../../molecules/Computer/Computer';
import HardDisk from '../../molecules/HardDisk/HardDisk';
import Memory from '../../molecules/Memory/Memory';
import Monitor from '../../molecules/Monitor/Monitor';
import SubProcessor from '../../molecules/SubProcessor/SubProcessor';
const AddNewUnit = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [type, setType] = useState("Computer");
    const [computerModel, setComputerModel] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [tags, setTags] = useState("");
    const [assignedTo, setAssignedTo] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    let component = "";
    switch (type) {
        case "Computer":
            component = <Computer setComputerModel={setComputerModel} />;
            break;
        case "HardDisk":
            component = <HardDisk />;
            break;
        case "Memory":
            component = <Memory />;
            break;
        case "Monitor":
            component = <Monitor />;
            break;
        case "Processor":
            component = <SubProcessor />;
            break;
        default:
            break;
    }
    const HandleSubmit = () => {
       
        let dateVariable = null;
        console.log(startDate)
        dateVariable = startDate.getFullYear() + "-" + (Number(startDate.getMonth()+1)) + "-" + (Number(startDate.getDate()))
        console.log("month"+startDate.getMonth())
        console.log("day"+startDate.getDay())
        let body = "";
        switch (type) {
            case "Computer":
                body = {
                    "status": "Available",
                    "quantity": quantity,
                    "serial": computerModel,
                    "type": "Computer",
                    "name": tags,
                    "person": assignedTo,
                    "fromDate": dateVariable

                };
                break;
            case "HardDisk":
                body = {
                    "status": "Available",
                    "quantity": quantity,
                    "serial": computerModel,
                    "type": "HardDisk",
                    "name": tags,
                    "person": assignedTo,
                    "fromDate": dateVariable

                };
                break;
            case "Memory":
                body = {
                    "status": "Available",
                    "quantity": quantity,
                    "serial": computerModel,
                    "type": "Memory",
                    "name": tags,
                    "person": assignedTo,
                    "fromDate": dateVariable

                };
                break;
            case "Monitor":
                body = {
                    "status": "Available",
                    "quantity": quantity,
                    "serial": computerModel,
                    "type": "Monitor",
                    "name": tags,
                    "person": assignedTo,
                    "fromDate": dateVariable

                };
                break;
            case "Processor":
                body = {
                    "status": "Available",
                    "quantity": quantity,
                    "serial": computerModel,
                    "type": "Processor",
                    "name": tags,
                    "person": assignedTo,
                    "fromDate": dateVariable

                };
                break;
            default:
                break;
        }
        fetch("http://localhost:8000/units", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .catch(error => console.error("Error:", error))
            .then(response => props.fetch());

    }
    return (
        <>
            <i className='toolbar-icon' onClick={(evt) => {
                evt.preventDefault();
                setIsPopupOpen(true);
            }}><AddOutlinedIcon fontSize='small' /></i>

            {isPopupOpen && <div className='popup-box' aria-hidden='true' >
                <div className='box'>
                    <form className='add-form'>
                        <header className='add-header'>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setIsPopupOpen(false)} >
                                <span aria-hidden="true">&times; </span>
                            </button>
                            <span className='heading'>Add a new unit</span>
                            <div className='header-buttons'>
                                <Button buttonType='btn-header-cancel' type="button" onClick={(evt) => {
                                    evt.preventDefault();
                                    setIsPopupOpen(false);
                                }}>Cancel</Button>
                                <Button buttonType='btn-header-save' type="button" onClick={(e) => {
                                    HandleSubmit();

                                }}>Save</Button>
                            </div>
                        </header>
                        <div className='group1'>
                            <select className='form-control' onChange={(e) => setType(e.target.value)}>
                                {
                                    data.map((datum, index) => {
                                        return <option key={index} value={datum.label}>{datum.icon}{datum.label}</option>
                                    })
                                }
                            </select>
                            <div className='inner-group1'>
                                <label className='form-label'>Quantity</label>
                                <input type="number" min={1} defaultValue={1} className='form-control' onChange={(e) => setQuantity(e.target.value)} />
                            </div>
                        </div>
                        {
                            component
                        }
                        <div className='group2'>
                            <label className='form-label'>Serial<span className='star-mark'></span></label>
                            <input type="text" className='form-control' onKeyUp={(e) => setComputerModel(e.target.value)} />
                        </div>
                        <div className='group2'>
                            <label className='form-label'>Name</label>
                            <input type="text" className='form-control' onKeyUp={(e) => setTags(e.target.value)}></input>
                        </div>
                        <div className='group2'>
                            <label className='form-label'>Assigned To</label>
                            <input type="text" className='form-control' onKeyUp={(e) => setAssignedTo(e.target.value)}></input>
                        </div>
                        <div className='group2'>
                            <label className='form-label'>Start Date</label>
                            <input type="date" className='form-control' placeholder='YYYY-MM-DD' onClick={(e) => setStartDate(e.target.value)}></input>
                        </div>
                    </form>

                </div>
            </div>
            }
        </>
    )
}
export default AddNewUnit;