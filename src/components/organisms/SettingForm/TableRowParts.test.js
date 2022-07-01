import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import TableRows from './TableRows';

describe("Table rows section Component", () => {
    
    const rowsData = [];
    const deleteTableRows = jest.fn();
    const handleChange = jest.fn();
    const handleCheckBox = jest.fn();

    it('renders the component properly', () => {
        const trEl = document.createElement("tr");
        ReactDom.render(<BrowserRouter><TableRows 
            rowsData={rowsData} 
            deleteTableRows={deleteTableRows} 
            handleChange={handleChange} 
            handleCheckBox={handleCheckBox}>
            </TableRows></BrowserRouter>, trEl); 
        
    });

    it('should have the right table rows component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});