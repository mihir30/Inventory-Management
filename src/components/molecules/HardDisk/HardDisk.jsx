import React from 'react';
const HardDisk = ({setComputerModel}) => {

    return (
            <div className='group2'>
                <label className='form-label'>
                    Size,Gb
                    <span className='star-mark'>*</span>
                </label>
                <input className='form-control' type='number' defaultValue={160}/>
            </div>
    )
}
export default HardDisk;