import React, { useEffect, useRef, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Picker from '../../atoms/Picker/Picker'
import './FilterSectionStatistics.scss'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation'
import _moment from 'moment'
import 'twix'

const FilterSectionStatistics = () => {
    const getFormattedDate = (date) => {

        let year = date.getFullYear();
        let month = (1 + date.getMonth()).toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');

        return month + '-' + day + '-' + year;

    }

    const getDateList = (start, end) => {
        var itr = _moment.twix(new Date(start), new Date(end)).iterate("days");
        var range = [];
        while (itr.hasNext()) {
            range.push(itr.next().format("YYYY-MM-DD"))
        }

        return range;
    }

    const [date, setDate] = useState([]);
    const [equipment, setEquipment] = useState("Computer");
    const [month, setMonth] = useState("Year");
    const datePicker = useRef(null);
    const [iterator, setIterator] = useState("01-01-2020 - 01-01-2021");

    const handleClickLeftArrow = () => {

        const myDateStart = new Date(datePicker.current.innerHTML.slice(0, 11));
        const myDateEnd = new Date(datePicker.current.innerHTML.slice(14, 24));

        switch (month) {
            case "Year": {
                myDateStart.setMonth(myDateStart.getMonth() - 12);
                myDateEnd.setMonth(myDateEnd.getMonth() - 12);
                break;
            }
            case "12 months": {
                myDateStart.setMonth(myDateStart.getMonth() - 12);
                myDateEnd.setMonth(myDateEnd.getMonth() - 12);
                break;
            }
            default: {
                myDateStart.setMonth(myDateStart.getMonth() - 12);
                myDateEnd.setMonth(myDateEnd.getMonth() - 12);
            }
        }
        const newDateStart = getFormattedDate(myDateStart);
        const newDateEnd = getFormattedDate(myDateEnd);
        setIterator(newDateStart.concat(" - " , newDateEnd));
    }
    const handleClickRightArrow = () => {
        const myDateStart = new Date(datePicker.current.innerHTML.slice(0, 11));
        const myDateEnd = new Date(datePicker.current.innerHTML.slice(14, 24));

        switch (month) {
            case "Year": {
                myDateStart.setMonth(myDateStart.getMonth() + 12);
                myDateEnd.setMonth(myDateEnd.getMonth() + 12);
                break;
            }
            case "12 months": {
                myDateStart.setMonth(myDateStart.getMonth() + 12);
                myDateEnd.setMonth(myDateEnd.getMonth() + 12);
                break;
            }
            default: {
                myDateStart.setMonth(myDateStart.getMonth() + 12);
                myDateEnd.setMonth(myDateEnd.getMonth() + 12);
            }
        }
        const newDateStart = getFormattedDate(myDateStart);
        const newDateEnd = getFormattedDate(myDateEnd);
        setIterator(newDateStart.concat(" - " , newDateEnd));
    }

    useEffect(() => {
        const dateList = getDateList(datePicker.current.innerHTML.slice(0, 11), datePicker.current.innerHTML.slice(14, 24));
        setDate(dateList);
        localStorage.setItem('dateList', JSON.stringify(date));
        localStorage.setItem('type', JSON.stringify(equipment));
    }, [date, equipment]);


    return (
        <div className='filter-section'>
            <div className='arrow-left' onClick={handleClickLeftArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
            </div>

            <div className='date-picker-box-statistics'>
                <Button buttonType="btn" type="button" id="dropdownMenuButton1">
                    <span ref={datePicker}>{iterator}</span>
                    <InsertInvitationIcon className="calendar-icon" fontSize="small"></InsertInvitationIcon>
                </Button>
            </div>

            <div className='arrow-right' onClick={handleClickRightArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>

            <div className='month-picker-box'>
                <Picker pickerType="form-select-month" aria-label="Month picker" value={month}
                    onChange={(e) => setMonth(e.target.value)}>
                    <option selected value="Year" key="Year">Year</option>
                    <option selected value="12 months" key="12 months">12 months</option>
                </Picker>
            </div>

            <div className='equipment-picker-box'>
                <Picker pickerType="form-select-equipment-statistics" aria-label="Equipment picker" value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}>
                    <option selected value="Computer" key="Computer">Computer</option>
                    <option value="Hard Disk" key="Hard Disk">Hard Disk</option>
                    <option value="Memory" key="Memory">Memory</option>
                    <option value="Monitor" key="Monitor">Monitor</option>
                    <option value="Processor" key="Processor">Processor</option>
                </Picker>
            </div>

        </div>
    )
}

export default FilterSectionStatistics