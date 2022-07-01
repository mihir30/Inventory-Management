import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import Computer from './Computer';

describe("Computer Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><Computer setComputerModel={"PC-00019"}></Computer></BrowserRouter>, divEl); 
        
    });


    it('should have the right computer component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});