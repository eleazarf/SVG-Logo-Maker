// Import the inquirer library for user input handling
const inquirer = require('inquirer');

// Import the fs library for file system operations
const fs = require('fs');

// Import the questions module to use predefined prompts for user
const questions = require('./lib/questions.js');

// Define the file name and path for the generated SVG logo
const fileName = "./examples/newlogo.svg";

// Import the setShape module to manage shape selection
const setShape = require('./lib/setShape.js');

// function to create new svg file
function makeLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated newlogo.svg'));
}

// init the app, prompt questions and then makeLogo using responses, catch any errors to console
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        makeLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();
