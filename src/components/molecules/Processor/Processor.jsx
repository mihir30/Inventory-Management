import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Processor.scss";
import SubProcessor from '../SubProcessor/SubProcessor';

const Processor = () => {
    const [open, setOpen] = useState(false);
    const [remove, setRemove] = useState(true);
    return (

        remove && <div className="processor-container">
            <div className='processor-header'>
                <div className='inner1' data-testid="inner-1">
                    {open ? <i className='processor-up-icon' onClick={() => setOpen(!open)}><ArrowDropUpIcon /></i> : <i className='processor-up-icon' onClick={() => setOpen(!open)}><ArrowDropDownIcon /></i>}
                    <span className='processor-label'>Processor</span>
                </div>
                <i className='delete-icon' onClick={() => setRemove(!remove)}><DeleteIcon /></i>
            </div>
            {open ?
                <div className='sub-group'>
                    <SubProcessor /></div> : <></>}
        </div>
    )
}


export default Processor;
