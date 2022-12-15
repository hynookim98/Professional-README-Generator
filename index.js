// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description and purpose for the project',
    },
    {
        type: 'list',
        name: 'license',
        message: "What type of license does your project have?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'Does the user need to know anything to install the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be used to install dependencies?',
        // * sets default answer
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What does the user need to know about the credit and contributors to the project?',
        default: 'n/a',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), "final", fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userResponse) => {
        console.log("Creating README..");
        writeToFile('README.md', generateMarkdown({ ...userResponse }));
    });
}

// Function call to initialize app
init();
