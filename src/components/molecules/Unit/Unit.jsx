import React from 'react'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import "./Unit.scss"
const Unit = ({ status, serial, type, name, person, fromDate, id }) => {

  return (
    <>
      <tr className="unit-row units-table-tr table-bg-color">
        <td className="col-2 units-table-td"><i className='wrench-icon'><BuildOutlinedIcon fontSize='small' /></i>
          <span className={`badge rounded-pill bg-${status}`}>{status}</span></td>
        <td className="col-2 align-right units-table-td">{serial}</td>
        <td className="col-2 align-right units-table-td">{type}</td>
        <td className="col-2 align-right units-table-td">{name}</td>
        <td className="col-2 units-table-td ">{person}</td>
        <td className="col-2 units-table-td">{fromDate}</td>
      </tr>
    </>);
};

export default Unit
