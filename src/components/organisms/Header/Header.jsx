import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './Header.scss';
const Header = (props) => {
    const manage = () => {
        props.sethamstate(!props.hamstate);
    }
    return <header className='header' aria-label='header'>
        <div className='header-box'>
            <div className='left-aligned'>
                <div className='hamburger' onClick={manage}>
                    <MenuRoundedIcon fontSize='medium' />
                </div>
                <div className='app-title' data-testid="title">
                    INVENTORY APP
                </div>
            </div>
            <div className='owner-box'>
                <span className='owner-logo'>O</span>
                <div className='app-owner' data-testid="owner">
                    Owner
                </div>
            </div>
        </div>
    </header>
}
export default Header;