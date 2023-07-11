// TODO: Include packages needed for this application
//fs
const fs = require("fs");
//inquirer
const inquirer = require("inquirer");
//path
//generateMarkdown

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message:"What's the title of your project?"
    },
    {
        type: "input",
        name: "title",
        message:"What's the title of your project?"
    },
    {
        type: "input",
        name: "title",
        message:"What's the title of your project?"
    },
    {
        type: "input",
        name: "title",
        message:"What's the title of your project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", process.argv)

}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions)

.then
// Function call to initialize app
init();
