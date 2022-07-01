import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import SubProcessor from './SubProcessor';

describe("Sub Processor Component", () => {

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><SubProcessor></SubProcessor></BrowserRouter>, divEl); 
        
    });

    it('should have the right sub processor component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});