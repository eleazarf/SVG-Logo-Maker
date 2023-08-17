// Import the Shape class from Shape.js module
const Shape = require('./shape.js');

// Define a class Square which inherits from Shape
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor); // Call parent class constructor
    };
    
    // Method to render Square SVG using template
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

// Export the Square class
module.exports = Square;