// Import the Square class from the Square.js module
const Square = require('../square.js');

// Describe test cases for the Square class
describe('Square', () => {
    it('should return a logo with user-defined shape color, text, and text color', () => {
        // Create a Square instance with specified attributes
        const square = new Square('red', 'SVG', 'white');
        
        // Compare the rendered SVG output with the expected template
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">SVG  </text>
        </svg>
        `);
    });
});