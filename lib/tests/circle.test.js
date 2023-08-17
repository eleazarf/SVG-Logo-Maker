// Import the Circle class from the Circle.js module
const Circle = require('../circle.js');

// Describe test case for the Circle class
describe('Circle', () => {
    it('should return a logo with user-defined shape color, text, and text color', () => {
        // Create a Circle instance with specified attributes
        const circle = new Circle('blue', 'SVG', 'white');
        
        // Compare the rendered SVG output with the expected template
        expect(circle.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="blue" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `);
    });
});