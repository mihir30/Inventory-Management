import React, { useEffect, useState } from 'react'
import ChartSection from '../../molecules/ChartSection/ChartSection'
import FilterSectionStatistics from '../../molecules/FilterSectionStatistics/FilterSectionStatistics'
import NavigationBar from '../../molecules/NavigationBar/NavigationBar'
import { getData } from '../../utils/common.utils'

const Statistics = () => {
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

    const [fromDate, setItems] = useState([]);
    const [type, setType] = useState("Computer")
    useEffect(() => {
        const fromDateList = JSON.parse(localStorage.getItem('dateList'));
        if (fromDateList) {
            setItems(fromDateList);
        }

        const typevalue = JSON.parse(localStorage.getItem('type'));
        if (typevalue) {
            setType(typevalue);
        }


    }, [fromDate, type]);

    const filterUnitsSection = () => {

        const results = unitsList.filter(element => {
            return fromDate.includes(element.fromDate) && element.type === type;
        });

        return results;

    }

    const results = filterUnitsSection();

    return (
        <div><NavigationBar></NavigationBar>
            <FilterSectionStatistics></FilterSectionStatistics>
            <ChartSection statusResults={results}></ChartSection>
        </div>

    )
}

export default Statistics