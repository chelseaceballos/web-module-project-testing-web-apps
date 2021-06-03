# Understanding Questions:
1. What are some possible tests for this application?
* The <App /> components correctly renders.
    - The Nav bar Renders
* The <ContactForm /> components correctly renders.
    - The Header "Contact Form" is on the page
    - select firstName input
    - user types in firstName input
    - select lastName input
    - user types into lastName input
    - select email input
    - user types valid email into email input
    - select message input
    - user types into message input
    
    - user clicks on button to submit
    - send inputted information to be displayed on card after clicking submit.
    
--------------🎯  FROM READ ME FILE TO DO LIST: 🎯 --------------
* [ ] the component renders the contact form component without errors.
* [ ] the header h1 element exists. Include three asserts, if the header is in the document, if the heads is truthy, if the header has the correct test content.
* [ ] the component renders ONE error message if the user enters less than 4 characters into the firstname field. Make sure to use async / await and the correct screen method to account for state change.
* [ ] the component renders THREE error messages if the user submits without filling in any values.
* [ ] the component renders ONE error message if the user submits without filling in the email field.
* [ ] the component renders the text *"email must be a valid email address"* if an invalid email address is typed into the email field.
* [ ] the component renders the text *"lastName is a required field"* the form is submitted without a last name.
* [ ] the component renders the firstname, lastname and email text when submitted with valued fields and does **not** render a message value when one is not entered into the message field.
* [ ] renders all fields when the user submits with valid text filled in for all fields.
-----------------------------------------------------------------