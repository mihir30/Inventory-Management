import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import UnitsByState from './UnitsByState';

describe("Units by state Component", () => {
    const typeOfAllUnits = ["Monitor", "Computer", "Memory", "Hard Disk", "Processor"];
    const type="All units";
    const status="Added";
    const fromDate="2020-01-02";

    const filterUnitsSection = jest.fn(() => {
        const results = [{type:"Monitor", status:"Available", fromDate:"2020-01-02"},{type:"Computer", status:"Available", fromDate:"2020-01-03"}].filter(element => {
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

        return results
    })

    const results = filterUnitsSection();

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><UnitsByState></UnitsByState></BrowserRouter>, divEl); 
    });

    it('should return results correctly', () => {
        expect(results).toEqual([{type:"Monitor", status:"Available", fromDate:"2020-01-02"}]);
    })

    it('should have the right units by state component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});