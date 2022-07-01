import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import NavSettings from './NavSettings';

describe("Nav settings Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        const handleCategoryChange = jest.fn();
        ReactDom.render(<BrowserRouter><NavSettings
            handleCategoryChange={handleCategoryChange}
          ></NavSettings></BrowserRouter>, divEl); 
        
    });


    it('should have the right nav settings component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});