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
        message: 'What would you like your border width to be (enter a number between 2-20)?',
        // when: (answers) => answers.shape === 'Circle', 
    },
    {
        type: 'input',
        name: 'radius',
        message: 'How big do you want your shape to be (enter a number between 20-90)?', 
        // when: (answers) => answers.shape === 'Circle', 
    },
];

module.exports = questions;
