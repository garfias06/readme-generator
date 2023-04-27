// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util=require('utils')

const readmeFile=require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [
  {
    type: 'input',
    message: 'What is the title for your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a detailed description for your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Required steps to install your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Credits (Collaborators, info resources):',
    name: 'credits',
  },
  {
    type: 'input',
    message: 'License:',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Features:',
    name: 'features',
  },
  {
    type: 'input',
    message: 'How to Contribute:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Tests (command to run test):',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Contact (Email): ',
    name: 'contactInfo',
  },
  {
    type: 'input',
    message: 'GitHub Profile: ',
    name: 'github',
  },
];

// inquirer
//   .prompt([])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

