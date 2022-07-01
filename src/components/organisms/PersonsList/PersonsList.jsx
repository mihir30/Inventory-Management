import React, { useState, useEffect } from "react";
import "./PersonsList.scss";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

const PersonsList = ({
    setId, 
    setPersonName, 
    setEmail, 
    setSkype, 
    setInfo}) => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("")

    const getData = () => {
        fetch("http://localhost:8000/persons"
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
               
                return response.json();
            })
            .then((myJson) => {
                
                setData(myJson)
            });
        return data;
    }
    useEffect(() => {
        getData()
    }, [])

const setPerson = (person) => {
    setPersonName(person.personName);
    setId(person.id);
    setSkype(person.skype);
    setEmail(person.email);
    setInfo(person.information);
  };

    return (
        <div className="left">
            <div className="list-heading-box">
                <div className="list-heading flex-child">Persons</div>
                <span className="person-heading-icons">
                <span className="search-person-box">
                <input placeholder="Search" className="search-person-input " type="text" name="search-person-input" aria-label="search-box-input" onChange={event => setQuery(event.target.value)} />
                    <i className="search-button flex-child"><FaSearch /></i>
                    <i onClick={() => window.location.reload(false)} className="refresh-button flex-child"><FiRefreshCcw /></i>
                </span>
                </span>
            </div>
            {
                data.filter(item => {
                    if (query === '') {
                        return item;
                    } else if (item.personName.toLowerCase().includes(query.toLowerCase())) {
                        return item;
                    }
                }).map((item) => (
                    <div className="names-list-box" onClick={() => setPerson(item)} data-testid={item.id} >
                        <div className="name-box" key={item.id} >
                            <div className="name">{item.personName}</div>
                            <div className="emailId">{item.email}</div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default PersonsList;