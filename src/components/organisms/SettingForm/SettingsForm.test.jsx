import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import SettingsForm from './SettingsForm';

describe("Settings form Component", () => {

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><SettingsForm></SettingsForm></BrowserRouter>, divEl); 
        
    });

    it('should have the right units by settings form component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});