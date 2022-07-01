import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import TableRowsParts from './TableRowsParts';

describe("Table rows parts section Component", () => {
    
    const rowsData = [];
    const deleteTableRows = jest.fn();
    const handleChange = jest.fn();
    const handleCheckBox = jest.fn();

    it('renders the component properly', () => {
        const trEl = document.createElement("tr");
        ReactDom.render(<BrowserRouter><TableRowsParts 
            rowsData={rowsData} 
            deleteTableRows={deleteTableRows} 
            handleChange={handleChange} 
            handleCheckBox={handleCheckBox}>
            </TableRowsParts></BrowserRouter>, trEl); 
        
    });

    it('should have the right table rows parts component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});