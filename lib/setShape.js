// In the index.js file, the createLogo function is invoked, which matches the user's response with the appropriate shape class to generate a new shape instance.

// Import the shape class
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

// Define a function to set the shape based on user response

function setShape(response) {

    // Create a Circle instance if user selected 'Circle' shape
    if (response.shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    // Create a Square instance if user selected 'Square' shape
    if (response.shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    // Create a Triangle instance if user selected 'Triangle' shape
    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
};

module.exports = setShape;