import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDom from "react-dom";
import IntegritySection from './IntegritySection';
import { render, screen } from '@testing-library/react';

describe("Integrity section Component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement("div");
        ReactDom.render(<BrowserRouter><IntegritySection archivedPartsValue={2} archivedStoredValue={7}></IntegritySection></BrowserRouter>, divEl); 
        
    });

    it('renders the component properly and should display the proper value', () => {
        render(<BrowserRouter><IntegritySection archivedPartsValue={2} archivedStoredValue={7}/></BrowserRouter>);
        expect(screen.getByTestId("archived-parts-value")).toHaveTextContent('Archived unit types as parts of other unit types: 2');
        expect(screen.getByTestId("archived-stored-value")).toHaveTextContent('Archived unit types that are still in store: 7');
    });


    it('should have the right integrity section component snapshot', () => {
        const tree = renderer.create().toJSON();
        expect(tree).toMatchSnapshot();
    })

});