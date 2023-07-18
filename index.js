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
const filePath = "./Assets/README.md"

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
        choices:["Apache-2.0", "GPL-3.0", "GPL-2.0", "MIT", "BSD-3-Clause ", "BSD-2-Clause", "CC-BY-4.0", "CCO-1.0","CC-BY-SA-4.0", "MPL-2.0"]
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
function writeFile(data){
    fs.writeFile("./Assets/READMEsample.md", generateMarkdown(data), (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("README created!");
        }
       
     })
   
  }
    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer)=> {
        console.log(answer)
        writeFile(answer)
    })
}





// Function call to initialize app
init();

module.exports = writeFile;