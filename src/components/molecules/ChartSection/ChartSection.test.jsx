import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import ChartSection from './ChartSection';

describe("Chart Section Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><ChartSection statusResults={[
            {
                "id": 2,
                "status": "Available",
                "serial": "PC-00017",
                "type": "Computer",
                "name": "Dell X2",
                "person": "Barbara Spears",
                "fromDate": "2020-08-08"
            },
            {
                "id": 5,
                "status": "Available",
                "serial": "PC-00018",
                "type": "Computer",
                "name": "Dell X2",
                "person": "Bailey Kerr",
                "fromDate": "2020-09-08"
            }
        ]}></ChartSection></BrowserRouter>, divEl); 
        
    });


    it('should have the right chart section component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});