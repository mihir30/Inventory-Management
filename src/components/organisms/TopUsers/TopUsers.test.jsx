import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import TopUsers from './TopUsers';

describe("Top users Component", () => {
    

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><TopUsers></TopUsers></BrowserRouter>, divEl); 
    });


    it('should have the right top users component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});