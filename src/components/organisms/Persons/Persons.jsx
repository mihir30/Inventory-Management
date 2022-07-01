import React, { useState, useEffect } from "react";
import "./Persons.scss";

const Persons = ({ id, personName, skype, email, info, setInformation, setName,handleInfoClick}) => {
    /*  const setInformation = (person) => {
         setType(person.information.type);
         setName(person.information.name);
       }; */
    

    return (
        <div className="column middle">

            <div className="persons-middle-heading">
                <div>
                    Name:<span className="persons-details-span" data-testid="name"> {personName}</span>
                </div>
            </div>
            <div className="persons-details">
                <p>
                    Email:<span className="persons-details-span" data-testid="email"> {email}</span>
                </p>
                <p>
                    Skype:<span className="persons-details-span" data-testid="skype"> {skype}</span>
                </p>
            </div>
            <table className="persons-table">
                <thead>
                    <tr className="table-header-row">
                        <th className="persons-table-header">Type</th>
                        <th className="persons-table-header">Serial</th>
                        <th className="persons-table-header">Name</th>
                        <th className="persons-table-header">From</th>
                    </tr>
                </thead>
                <tbody>

                    {info.map((information, index) => {
                        const { type, serial, name, fromDate } = information;
                        return (

                            <tr className="table-data-row" key={index} onClick={() => {setInformation(information);handleInfoClick()}}>
                                <td className="persons-table-data" data-testid={index + "-type"}>{type} </td>
                                <td className="persons-table-data">{serial}</td>
                                <td className="persons-table-data">{name}</td>
                                <td className="persons-table-data">{fromDate}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Persons;