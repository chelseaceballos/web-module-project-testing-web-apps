import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';
import { renderSync } from 'sass';
// 1
test('renders without errors', ()=>{
    render(<ContactForm />);
});
//2 -------------------------------------
test('renders the contact form header', ()=> {
    //Arrange: renders ContactForm
    render(<ContactForm />);
    //Act: search for the header on page
    const header = screen.queryByText(/contact form/i);
    //Assert: verify that header exists
    expect(header).toBeTruthy();
    expect(header).not.toBeFalsy();
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/contact form/i)
});
//3 -------------------------------------
test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    // Arrange -  Render ContactForm
    render(<ContactForm />);
    // Act - Fill firstname input with an error if less than 5 characters
        // - select first name input
        // - type name in FN input less than 5 characters => "bob"
        const firstNameInput = screen.getByLabelText("First Name*")
        userEvent.type(firstNameInput, 'bob'); // if > 5 char, it fails.
    // Assert - verify error message?
        const err = await screen.findByTestId(/error/i);
            expect(err).toBeInTheDocument();
});
//4 -------------------------------------
test('renders THREE error messages if user enters no values into any fields.', async () => {
    // Arrange
    render(<ContactForm />);
    // Act- user clicks on submit button 
    const button = screen.getByRole("button");
        userEvent.click(button);
    // Assert - that three error messages appear on page
    const err = await screen.findAllByTestId(/error/i);
            expect(err).toHaveLength(3); // there are 3 expected errors

});
//5 -------------------------------------
test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
// Arrange
    render(<ContactForm/>);
// Act
    // - select fNameInput 
    // - user types "Chelsea"
    const fNameInput = screen.getByLabelText("First Name*");
        userEvent.type(fNameInput, "Chelsea");
    // - select lNameInput 
    // - user types "Ceballos"
    const lNameInput = screen.getByLabelText("Last Name*");
        userEvent.type(lNameInput, "Ceballos");
    // - user clicks on submit
        const button = screen.getByRole('button');
            userEvent.click(button);
// Assert - that empty email results in a single err
    const err = await screen.findByTestId(/error/i);
        expect(err).toBeInTheDocument(); 
    
});

//6 -------------------------------------
test('renders "email must be a valid email address" if an invalid email is entered', async () => {
// Arrange
    render(<ContactForm/>);
// Act
    // - select fNameInput 
    // - user types "Chelsea"
    const fNameInput = screen.getByLabelText("First Name*");
        userEvent.type(fNameInput, "Chelsea");
    // - select lNameInput 
    // - user types "Ceballos"
    const lNameInput = screen.getByLabelText("Last Name*");
        userEvent.type(lNameInput, "Ceballos");
    // - select emailInput 
    // - user types "chelsea123@gmail." -> throws error
    const emailInput = screen.getByLabelText("Email*");
        userEvent.type(emailInput, 'Chelsea123@gmail.');
    // - user clicks on submit
    const button = screen.getByRole('button');
            userEvent.click(button);

// Assert    
     const err = await screen.findByTestId(/error/i);
    expect(err).toBeInTheDocument(); 
});
//7 -------------------------------------
test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});
//8 -------------------------------------
test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});
//9 -------------------------------------
test('renders all fields text when all fields are submitted.', async () => {
    
});