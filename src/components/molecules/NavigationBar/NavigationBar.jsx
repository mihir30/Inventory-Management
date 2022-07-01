import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import "./NavigationBar.scss"

const NavigationBar = () => {
    return (
        <nav className='navigation-bar'>
            <Button buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/statistics">Statistics</NavLink></Button>
            <Button buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/unitsbystate">Units by state</NavLink></Button>
            <Button buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/integrity">Integrity</NavLink></Button>
            <Button buttonType={"flex-sm-fill text-sm-center report-header-tile"}><NavLink className='navbar-link nav-link' to="/topusers">Top users</NavLink></Button>
        </nav>
    )
}

export default NavigationBar