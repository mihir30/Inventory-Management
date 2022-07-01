import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import Processor from './Processor';

describe("Processor Component", () => {

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><Processor></Processor></BrowserRouter>, divEl); 
        
    });

    it('should have the right processor component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});