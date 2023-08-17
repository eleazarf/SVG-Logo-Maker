// colorKeywords array which checks input matches accepted colors
const colorKeywords = require('./colorKeywords.js')

const questions = [
    // shape logo prompt
    {
        name: 'shape',
        message: 'Which shape logo do you prefer?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    // shape color prompt, user choose keyword or hexadecimal for shapeColor
    {
        name: 'shapeColor',
        message: 'Which is the color of your logo? Choose a color format from the list: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal'],
    },
    // color keyword and validate with colorKeywords array
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if(answers.shapeColor === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // or hexadecimal and validate hexadecimal with RegEx
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (Eg. #FFFFFF)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    // Text for logo: validate user can only submit 3 characters
    {
        name: 'text',
        message: 'Which is you logo text? You can include up to three character',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    // Text color. User can choose a color keyword or hexadecimal for textColor
    {
        name: 'textColorChoice',
        message: 'Which is the color for text? first, choose a color format from list: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // color keyword and validate with colorKeywords array
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // or hexadecimal and validate hexadecimal with RegEx
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (Eg. #FFFFFF)",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;