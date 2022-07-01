import Header from "./Header";
import ReactDom from "react-dom";
import { render, screen } from '@testing-library/react';



describe("Header Component", () => {

    it("should render the component properly", () => {
        const headerEl = document.createElement("header");
        ReactDom.render(<Header/>, headerEl); 
    });

    it('should have the right title', () => {
        render(<Header/>);
        expect(screen.getByTestId("title")).toHaveTextContent("INVENTORY APP");
    })
    it('should have the right text', () => {
        render(<Header/>);
        expect(screen.getByTestId("owner")).toHaveTextContent("Owner");
    })
});