import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import HardDisk from './HardDisk';

describe("Hard disk Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><HardDisk setComputerModel={"PC-00019"}></HardDisk></BrowserRouter>, divEl); 
        
    });


    it('should have the right hard disk component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});