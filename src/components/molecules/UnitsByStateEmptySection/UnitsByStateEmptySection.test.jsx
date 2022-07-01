import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import UnitsByStateEmptySection from './UnitsByStateEmptySection';

describe("Units by State empty section Component", () => {

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><UnitsByStateEmptySection/></BrowserRouter>, divEl); 
        
    });

    it('should have the right units by state empty section component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});