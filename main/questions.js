// Questions that are being prompt to the user via terminal command line as they are exported to index.js to be writtena as a file after user types their input.
const questions = [
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape would you like for your logo?',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to display (max 3 characters)?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
    },
    {
        type: 'input',
        name: 'fillColor',
        message: 'What background color would you like your shape to be?',
    },
    {
        type: 'input',
        name: 'borderColor',
        message: 'What border color would you like your shape to have?',
    },
    {
        type: 'input',
        name: 'borderWidth',
        message: 'What would you like your border width to be (enter a number between 0-20)?',
    },
];

//Typed responses by the users are exported to index.js
module.exports = questions;
