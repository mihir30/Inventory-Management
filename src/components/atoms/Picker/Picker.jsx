import React from 'react'

const Picker = ({children, pickerType ="", method, ...props}) => {
    return (
        <select className={pickerType} {...props} onClick={method}>
            {children}
        </select>
    )
}

export default Picker