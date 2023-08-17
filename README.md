# SVG-Logo-Maker
A user-friendly command-line app for creating custom SVG logos. The interface lets users define text, colors, and shapes. Generated SVGs meet defined criteria, ensuring high-quality images.

## Table of Contents
* [Description](#description)
* [Install](#install)
* [Tests](#tests)
* [Use](#use)

## Description
Design an SVG logo by selecting a shape (circle, square, or triangle), defining shape and text colors through color keywords or hexadecimal codes, and inputting text with a maximum of three characters. View a [video]() demonstration showcasing the fundamental features.

## Install
To verify Node.js installation, type "node -v" in your command line. If Node is absent, access the Node.js website for installation. Subsequently, clone this repository to your machine. Utilize "npm install" for dependency installation. For Jest as a devDependency, execute "npm install --save-dev jest".

## Tests
Every shape class (Circle, Square, and Triangle) is assessed through a render() method, producing SVG strings aligning with color and text preferences. Execute "npm test" in the terminal to trigger Jest, running all three tests concurrently.

## Use
* Navigate to the project directory in the terminal. 
* Initiate the application using either "node index.js" or the command "npm start". 
* You'll respond to a sequence of questions to create your logo. For color inputs, use valid keywords or hex codes; for text, limit to 3 characters. Retry prompts for invalid inputs. 
* After valid responses, a 'newlogo.svg' file will be generated in the 'examples' folder. Consult the provided video if needed.
