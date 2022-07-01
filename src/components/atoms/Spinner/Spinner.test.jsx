import React from 'react';
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import WithSpinner from './Spinner';

describe("Spinner component", () => {
    it('renders the component properly', () => {
        const divEl = document.createElement('div');
        ReactDom.render(<WithSpinner />, divEl);
    });

    it('should have the right Spinner component snapshot', () => {
        const tree = renderer.create(<WithSpinner />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});