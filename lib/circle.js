// Import the Shape class from shape.js module
const Shape = require('./shape.js')

// Define a class Circle which inherits from Shape
class Circle extends Shape { 
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    // Method to render Circle SVG
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Circle;