// TODO: Include packages needed for this application
//fs
const fs = require("fs");
//inquirer
const inquirer = require("inquirer");
//path
const path = require("path");
//generateMarkdown
const generateMarkdown = require("./generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message:"What's the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message:"Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message:"What are the instructions for installation?"
    },
    {
        type: "input",
        name: "usage",
        message:"How do you use this project?"
    },
    {
        type: "input",
        name: "contributions",
        message:"What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "tests",
        message:"Test instructions?"
    },
    {
        type: "list",
        name: "license",
        message:"What is your license?",
        choices:["Apache License 2.0", "GNU General Public License v3.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost Software 1.0", "Creative Commons", "Eclipse Public License 2.0","GNU Affero", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        name: "username",
        message:"What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message:"Email?"
    },
];

// TODO: Create a function to write README file
  fs.writeFile("README.md", data, function (err) {
    if (err) throw err;
    console.log("README created!");
  })



// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions)

.then
// Function call to initialize app
init();

