import React from 'react'
import './UnitsByStateContentSection.scss'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'

const UnitsByStateContentSection = ({ status, serial, type, name, person, fromDate}) => {

    return (
                <tr className="unit-row reports-table-tr">
                  <td className="col-2 reports-table-td"><i className='wrench-icon'><BuildOutlinedIcon fontSize='small' /></i>
                  <span className={`badge rounded-pill bg-${status}`}>{status}</span></td>
                  <td className="col-2 align-right reports-table-tr">{serial}</td>
                  <td className="col-2 align-right reports-table-tr">{type}</td>
                  <td className="col-2 align-right reports-table-tr">{name}</td>
                  <td className="col-2 reports-table-tr ">{person}</td>
                  <td className="col-2 reports-table-tr">{fromDate}</td>
                </tr>
    )
}

export default UnitsByStateContentSection