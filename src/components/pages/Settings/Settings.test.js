import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import Settings from './Settings';
import NavSettings from '../../molecules/NavSettings/NavSettings';

describe("Settings Component", () => {

    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render (
            <BrowserRouter>
                <Settings></Settings>
            </BrowserRouter>,
            divEl
        );
    });

    it('renders the nav settings component', () => {

        const divEl = document.createElement("div");
        const handleCategoryChange = jest.fn();
        ReactDom.render (
            <BrowserRouter>
            <Settings><NavSettings handleCategoryChange={handleCategoryChange}></NavSettings></Settings>
            </BrowserRouter>,
            divEl
        );


    });


    it('should have the right settings component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});
