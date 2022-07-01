import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import TopUsersContentSection from './TopUsersContentSection';

describe("Top users content section Component", () => {

    it('renders the component properly', () => {
        const trEl = document.createElement("tr");
        ReactDom.render(<BrowserRouter><TopUsersContentSection id="1" person="Stutee" email="stu@gmail.com" skype="stutss" units="2"></TopUsersContentSection></BrowserRouter>, trEl); 
        
    });

    it('should have the right top users content section component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});