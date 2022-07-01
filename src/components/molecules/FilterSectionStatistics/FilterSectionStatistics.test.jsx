import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import FilterSectionStatistics from './FilterSectionStatistics';

describe("Filter Section Statistics Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><FilterSectionStatistics></FilterSectionStatistics></BrowserRouter>, divEl); 
        
    });


    it('should have the right filter section statistics component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});