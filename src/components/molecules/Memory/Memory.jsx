import React from 'react';

const Memory = () => {
    return (       
            <div className='group2'>
                <label className='form-label'>
                    Size,Gb
                    <span className='star-mark'>*</span>
                </label>
                <input className='form-control' type='number' defaultValue={8} />
            </div>
    )
}
export default Memory;