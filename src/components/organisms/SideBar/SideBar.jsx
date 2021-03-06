import React from 'react';
import { NavLink } from "react-router-dom";
import './SideBar.scss';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StyleIcon from '@mui/icons-material/Style';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import { useState } from 'react';
const SideBar = (props) => {
    const [normal, setNormal] = useState(true);
    const show = () => {
        setNormal(!normal);
    }
    return <>
        {props.labelName === "Settings" ?
            <>
                <li className="nav-list-item" onClick={show}>
                    <i className="nav-icon">
                        {props.icon}
                    </i>
                    <label className="nav-label">
                        {props.labelName}
                    </label>
                    {normal ? <i className='side-icon'><ChevronLeftIcon fontSize='small' /></i> :
                        <i className='side-icon'><KeyboardArrowDownIcon fontSize='small' /></i>}
                </li>
                {
                    !normal ?
                        <ul className='dropdown'>
                            <NavLink to="/unittypes/1">
                                <li className='nav-list-item'>
                                    <i className="nav-icon nav-settings-icon">
                                        <AdUnitsIcon fontSize='small' />
                                    </i>
                                    <label className='nav-label-settings nav-label'>
                                        Unit Types
                                    </label>
                                </li>
                            </NavLink>
                            <NavLink to="/tags">
                                <li className='nav-list-item'>
                                    <i className="nav-icon nav-settings-icon">
                                        <StyleIcon fontSize='small' />
                                    </i>
                                    <label className='nav-label-settings nav-label'>
                                        Tags
                                    </label>
                                </li>
                            </NavLink>
                        </ul> : <></>
                }
            </>
            :
            <NavLink to={props.navPath}>
                <li className="nav-list-item">
                    <i className="nav-icon">
                        {props.icon}
                    </i>
                    <label className="nav-label">
                        {props.labelName}
                    </label>
                </li>
            </NavLink>
        }
    </>
}
export default SideBar;