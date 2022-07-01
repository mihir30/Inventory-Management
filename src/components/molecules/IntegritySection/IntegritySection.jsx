import React from 'react'
import "./IntegritySection.scss"

const IntegritySection = ({archivedPartsValue, archivedStoredValue}) => {
  return (
    <div className='integrity-layout'>
    <div className='integrity-template'><span class="integrity-information">Lost units (assigned to fired users): None</span></div>
    <div className='integrity-template'><span class="integrity-information">Broken or deprecated units, assigned to someone: None</span></div>
    <div className='integrity-template'><span class="integrity-information">Units and their parts that belong to different users: None</span></div>
    <div className='integrity-template' data-testid="archived-parts-value">{archivedPartsValue>0?<span class="integrity-information-archived">Archived unit types as parts of other unit types: {archivedPartsValue}</span>
    :<span class="integrity-information">Archived unit types as parts of other unit types: None</span>}</div>
    <div className='integrity-template' data-testid="archived-stored-value">{archivedStoredValue>0?<span class="integrity-information-archived">Archived unit types that are still in store: {archivedStoredValue}</span>
    :<span class="integrity-information">Archived unit types that are still in store: None</span>}</div>
    </div>
  )
}

export default IntegritySection