const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./main/shapes.js');
const questions = require('./main/questions.js');


//from the users questions. The inputs are imported here along with the data the user typed in and a file is written as an SVG. 
//Each CASE has its own shape property.
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
                    )
                    fs.writeFile('./main/output-logo/logo.svg', circle.renderCircle(), (err) => {
                        err ? console.error(err) : console.log("Your circle has been created.")
                    })
                    break;
                case 'Square':
                    const square = new Square(
                        data.fillColor,
                        data.borderColor,
                        data.borderWidth,
                        data.textColor,
                        data.text,
                        data.textSize,
                    )
                    fs.writeFile('./main/output-logo/logo.svg', square.renderSquare(), (err) => {
                        err ? console.error(err) : console.log("Your square has been created.")
                    })
                    break;
                case 'Triangle':
                    const triangle = new Triangle(
                        data.fillColor,
                        data.borderColor,
                        data.borderWidth,
                        data.textColor,
                        data.text,
                        data.textSize,
                    )
                    fs.writeFile('./main/output-logo/logo.svg', triangle.renderTriangle(), (err) => {
                        err ? console.error(err) : console.log("Your triangle has been created.")
                    })
                    break;
            }
        })

}

init()
