const questions = [
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape would you like?',
        choices: ['Square', 'Circle', 'Triangle'],
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to display (max 3 characters)?',
    },
    {
        type: 'input',
        name: 'textSize',
        message: 'What text size would you like to display (enter a number between 40-70)?',
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


module.exports = questions;
