/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { getData } from '../../utils/common.utils'
import FilterSectionUnits from '../../molecules/FilterSectionUnits/FilterSectionUnits'
import NavigationBar from '../../molecules/NavigationBar/NavigationBar'
import UnitsByStateContentSection from '../../molecules/UnitsByStateContentSection/UnitsByStateContentSection'
import UnitsByStateEmptySection from '../../molecules/UnitsByStateEmptySection/UnitsByStateEmptySection'
import './UnitsByState.scss'
import '../../molecules/UnitsByStateContentSection/UnitsByStateContentSection.scss'

const UnitsByState = () => {

    const [unitsList, setUnitsList] = useState([]);
    const url = window.location.href;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const units = await getData('http://localhost:8000/units');
                setUnitsList(units);

            } catch (error) {
                console.log("error", error.message);
            }
        };
        fetchData();

    }, [url]);

    const typeOfAllUnits = ["Monitor", "Computer", "Memory", "Hard Disk", "Processor"];
    const [fromDate, setItems] = useState([]);
    const [status, setStatus] = useState("Added");
    const [type,setType] = useState("All units")
    useEffect(() => {
        const fromDateList = JSON.parse(localStorage.getItem('dateList'));
        if (fromDateList) {
            setItems(fromDateList);
        }

        const statusvalue = JSON.parse(localStorage.getItem('status'));
        if (statusvalue) {
            setStatus(statusvalue);
        }

        const typevalue = JSON.parse(localStorage.getItem('type'));
        if (typevalue) {
            setType(typevalue);
        }
        

    }, [fromDate,status,type]);

    const filterUnitsSection = () => {

        const results = unitsList.filter(element => {
            if (type === "All units") {
                if (status === "Added") {
                    return fromDate.includes(element.fromDate) && (typeOfAllUnits.includes(element.type)) && (element.status === "Taken" || element.status === "Available");
                }
                else {
                    return fromDate.includes(element.fromDate) && (typeOfAllUnits.includes(element.type)) && element.status === status;
                }
            } else {
                if (status === "Added") {
                    return fromDate.includes(element.fromDate) && element.type === type && (element.status === "Taken" || element.status === "Available");
                }
                else {
                    return fromDate.includes(element.fromDate) && element.type === type && element.status === status;
                }
            }
        });

        return results;

    }

    const results = filterUnitsSection();



    return (
        <div><NavigationBar></NavigationBar>
            <FilterSectionUnits></FilterSectionUnits>
            <div className='units-by-state-section'>
                <strong className='units-text'>All units</strong>: {results.length}
                <div className='table-section'>
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table table-fixed table-borderless table-hover bg-white">
                                <thead className="table-header-unitsbystate reports-table-thead">
                                    <tr className='reports-table-tr' >
                                        <th scope="col" className="col-2 status-column reports-table-th" style={{ paddingLeft: "3.2rem" }}>Status</th>
                                        <th scope="col" className="col-2 serial-column reports-table-th ">Serial</th>
                                        <th scope="col" className="col-2 type-column reports-table-th ">Type</th>
                                        <th scope="col" className="col-2 name-column reports-table-th ">Name</th>
                                        <th scope="col" className="col-2 assigned-column reports-table-th ">Assigned to</th>
                                        <th scope="col" className="col-2 reports-table-th ">From</th>
                                    </tr>
                                </thead>
                                <tbody className='reports-table-tbody'>
                                    {results && results.length > 0 ?
                                        results.map((unit) => (
                                            <UnitsByStateContentSection key={unit.id}
                                                id={unit.id}
                                                status={unit.status}
                                                serial={unit.serial}
                                                type={unit.type}
                                                name={unit.name}
                                                person={unit.person}
                                                fromDate={unit.fromDate}></UnitsByStateContentSection>
                                        ))
                                        :
                                        <UnitsByStateEmptySection></UnitsByStateEmptySection>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitsByState