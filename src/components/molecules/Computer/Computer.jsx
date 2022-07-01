import React, { useState } from 'react';
import Processor from '../Processor/Processor';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Computer = ({setComputerModel}) => {
    const [count, setCount] = useState(1);
    const processors = [];
    for (let i = 0; i < count; i++) {
        processors.push(<Processor />);
    }
    
    return (
            <div className='group2'>
                <label className='form-label'>
                    Parts
                </label>
                {
                    processors
                }
                <div className='add-processor'><i className='processor-icon' fontSize="small" onClick={() => setCount(count + 1)}><AddOutlinedIcon /></i>Add processor</div>
            </div>
    )
}
export default Computer;