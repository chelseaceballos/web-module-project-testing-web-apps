import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("Renders The Component", () => {
    render(<App />);
});

test("Nav Bar Component Renders", () => {
//Arrange: renders App component
    render(<App />);
//Act: find the <a> text
    const navBar = screen.queryByText(/Lambda Integration Testing Challenge/i)
    console.log(navBar);
//Assert: verify that nav bar exists
expect(navBar).toBeInTheDocument();
expect(navBar).toHaveTextContent(/Lambda Integration Testing Challenge/i);
expect(navBar).toBeTruthy();
expect(navBar).not.toBeFalsy();
})