import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import Statistics from './Statistics';

describe("Statistics Component", () => {
    
    const filterUnitsSection = jest.fn(() => {
        return [];
    })

    const results = filterUnitsSection();

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><Statistics></Statistics></BrowserRouter>, divEl); 
    });

    it('should return results correctly', () => {
        expect(results).toEqual([]);
    })

    it('should have the right statistics component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});