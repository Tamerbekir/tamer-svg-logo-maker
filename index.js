const fs = require('fs');
const inquirer = require('inquirer'); 
const { Circle } = require('./main/shapes.js');
const questions = require('./main/questions.js');

const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            switch (data.shapes) { 
                case 'Circle':
                    const circle = new Circle(
                        data.fillColor, 
                        data.borderColor, 
                        data.borderWidth, 
                        data.textColor, 
                        data.text, 
                        data.textSize,
                        data.radius
                    )
                    fs.writeFile('./main/output-logo/logo.svg', circle.renderCircle(), (err) => {
                        err ? console.error(err) : console.log("Your circle has been created.")
                    })
                    break;
            }
        })
}

init()
