import PersonsPage from "./PersonsPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";

test('should fetch name corresponding to a person', async () => {
    const onSetIsActive = (state) => {
    };
    render(
        <BrowserRouter>
            <PersonsPage setActive={onSetIsActive} />
        </BrowserRouter>
    );

    const personSelect = await screen.findByTestId("1");
    userEvent.click(personSelect);
    expect(await screen.findByTestId("name")).toHaveTextContent("Araceli Church");
});

test('should fetch email corresponding to a person', async () => {
    const onSetIsActive = (state) => {
    };
    render(
        <BrowserRouter>
            <PersonsPage setActive={onSetIsActive} />
        </BrowserRouter>
    );

    const personSelect = await screen.findByTestId("1");
    userEvent.click(personSelect);
    expect(await screen.findByTestId("email")).toHaveTextContent("araceli_church@gmail.com");
});

test('should fetch skype corresponding to a person', async () => {
    const onSetIsActive = (state) => {
    };
    render(
        <BrowserRouter>
            <PersonsPage setActive={onSetIsActive} />
        </BrowserRouter>
    );

    const personSelect = await screen.findByTestId("1");
    userEvent.click(personSelect);
    expect(await screen.findByTestId("skype")).toHaveTextContent("church7");
});

test('should fetch device type corresponding to a person', async () => {
    const onSetIsActive = (state) => {
    };
    render(
        <BrowserRouter>
            <PersonsPage setActive={onSetIsActive} />
        </BrowserRouter>
    );

    const personSelect = await screen.findByTestId("1");
    userEvent.click(personSelect);
    expect(await screen.findByTestId("0-type")).toHaveTextContent("Monitor");
});
