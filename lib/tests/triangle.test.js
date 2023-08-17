// Import the Triangle class from the Triangle.js module
const Triangle = require('../triangle.js');

// Describe test case for the Triangle class
describe('Triangle', () => {
    it('should return a logo with user-defined shape color, text, and text color', () => {
        // Create a Triangle instance with specified attributes
        const triangle = new Triangle('lime', 'SVG', 'white');
        
        // Compare the rendered SVG output with the expected template
        expect(triangle.render()).toEqual(`
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="lime"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">SVG</text>
        </svg>
        `);
    });
});