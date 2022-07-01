import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import FilterSectionUnits from './FilterSectionUnits';

describe("Filter Section Units Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><FilterSectionUnits></FilterSectionUnits></BrowserRouter>, divEl); 
        
    });


    it('should have the right filter section units component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});