const questions = [
{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like?',
    choices:['Square', 'Circle', 'Triangle']
},
{
    type: 'input',
    name: 'text',
    message: 'What text would you like to display?',
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
    name: 'border',
    message: 'What border color would you like your shape to have?',
},
{
    type: 'input',
    name: 'borderWidth',
    message: 'What would you like your border width to be?',
},
{
    type: 'input',
    name: 'radius',
    message: 'What would the radius of your shape to be?',
},]

module.exports = questions
