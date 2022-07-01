/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './ChartSection.scss'
import {
    AreaChart, Area, XAxis, YAxis,
    CartesianGrid, Tooltip
} from 'recharts';

const ChartSection = ({ statusResults }) => {


    let finalObj = {}
    statusResults.forEach((statusResult) => {
        const date = statusResult.fromDate;
        if (finalObj[date]) {
            finalObj[date].push(statusResult.status);
        } else {
            finalObj[date] = [statusResult.status];
        }
    })
    const groupArrays = Object.keys(finalObj).map((date) => {
        return {
            date,
            status: finalObj[date]
        };
    });

    let uniqsArr = [];
    for (let i = 0; i < groupArrays.length; i++) {
        var uniqs = groupArrays[i].status.reduce((acc, val) => {
            acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
            return acc;
        }, {});

        uniqsArr.push(uniqs);

    }
    const groupArrays2 = Object.keys(groupArrays).map((date) => {
        return {
            date: groupArrays[date].date,
            counts: uniqsArr[date]
        };
    });

    let data = [];
    for(let i = 0 ;i <groupArrays2.length; i++) {
        data.push({ name: groupArrays2[i].date, "Available": groupArrays2[i].counts.Available, "Taken": groupArrays2[i].counts.Taken, "Broken": groupArrays2[i].counts.Broken, "Deprecated": groupArrays2[i].counts.Deprecated })
            
    }

    return (
        <div classname="chart-section">
            <AreaChart width={950} height={300} data={data} className="chart-image">
                <CartesianGrid />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip />
                <Area dataKey="Available" stackId="1"
                    stroke="#55cd97" fill="#55cd97" />
                <Area dataKey="Taken" stackId="1"
                    stroke="#1ca1c1" fill="#1ca1c1" />
                <Area dataKey="Broken" stackId="1" stroke="#ff5c4c" fill="#ff5c4c"></Area>
                <Area dataKey="Deprecated" stackId="1" stroke="#94A1B3" fill="#94A1B3"></Area>
            </AreaChart>
        </div>
    )
}

export default ChartSection