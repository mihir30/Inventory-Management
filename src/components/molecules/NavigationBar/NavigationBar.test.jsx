import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import NavigationBar from './NavigationBar';

describe("Navigation bar Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><NavigationBar></NavigationBar></BrowserRouter>, divEl); 
        
    });


    it('should have the right navigation bar component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});