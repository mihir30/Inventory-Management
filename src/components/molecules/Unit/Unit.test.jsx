import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import Unit from './Unit';

describe("Units by State content section Component", () => {

    it('renders the component properly', () => {
        const trEl = document.createElement("tr");
        ReactDom.render(<BrowserRouter><Unit 
            status="Available" serial="PC-00017" type="Computer" name="Dell X2" person="Araceli" fromDate="2022-05-31"/></BrowserRouter>, trEl); 
        
    });

    it('should have the right units by state content section component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});