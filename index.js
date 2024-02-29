//const fs needed for reading the file
const fs = require('fs');
//the path module is also required to access the directory
const inquirer = require('inquirer');
//Descructing object. It creates three variables that imports the classes of circle, square and trianlge from the shapes.js file. 
const { Circle, Square, Triangle } = require('./main/shapes.js');
//A variable that imports the questions(or inputs) from the questions.js file
const questions = require('./main/questions.js');


//typed comments apply to all shapes
//from the users questions. The inputs are imported here along with the data the user typed in and a file is written as an SVG. 
//Each CASE has its own shape property.
const init = () => {
    //grabbing the prompt questions that were imported
    inquirer.prompt(questions)
        .then((data) => {
            //using switch case to determine which shape class will be used based on
            switch (data.shapes) {
            //grabbing Circle class
                case 'Circle':
                    //creating a new circle with user input data passed into it
                    const circle = new Circle(
                        //the circle that the user chose + the attributes typed in will apply here
                        data.fillColor,
                        data.borderColor,
                        data.borderWidth,
                        data.textColor,
                        data.text,
                    )
                    //the file is then written into the main/output folder and render a circle
                    fs.writeFile('./main/output-logo/logo.svg', circle.renderCircle(), (err) => {
                        //using canary to throw an error is something is wrong, otherwise user will get  message saying "logo Created"
                        err ? console.error(err) : console.log("Generated logo.svg")
                    })
                    break;
                case 'Square':
                    const square = new Square(
                        data.fillColor,
                        data.borderColor,
                        data.borderWidth,
                        data.textColor,
                        data.text,
                    )
                    fs.writeFile('./main/output-logo/logo.svg', square.renderSquare(), (err) => {
                        err ? console.error(err) : console.log("Generated logo.svg")
                    })
                    break;
                case 'Triangle':
                    const triangle = new Triangle(
                        data.fillColor,
                        data.borderColor,
                        data.borderWidth,
                        data.textColor,
                        data.text,
                    )
                    fs.writeFile('./main/output-logo/logo.svg', triangle.renderTriangle(), (err) => {
                        err ? console.error(err) : console.log("Generated logo.svg")
                    })
                    break;
            }
        })

}

//calling the fucntion to initialize rendering/writing the shapes 
init()
