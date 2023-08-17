// Import the Shape class from Shape.js module
const Shape = require('./shape.js');

// Define a class Triangle which inherits from Shape
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor); // Call parent class constructor
    };
    
    // Method to render Triangle SVG using template
    render() {
        return `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

// Export the Triangle class
module.exports = Triangle;