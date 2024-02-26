const fs = require('fs');
const inquirer = require('inquirer'); 
const { Circle } = require('./main/shapes.js');

const questions = require('./main/questions.js');


const init = () => {
    inquirer.prompt(questions)
        .then((data) => {
            console.log('\nPlease wait...creating circle');
            switch (`${data.shape}`) {
                case 'Circle':
                    const circle = new Circle(data.fillColor, data.border, data.borderWidth, data.text, data.textColor, data.radius)
                    fs.writeFile('./main/output-logo/logo.svg', circle.renderCircle(), (err) => {
                        err ? console.error(err) : console.log("Circle has been created been created.")
                    })
                    break
            }
        });
    //! adding other shapes here once one works

    // case 'circle':
};

init()
