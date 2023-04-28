// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    type: 'list',
    message: 'License:',
    name: 'license',
    choices: ['MIT', 'Apache', 'None'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('readme has been created'))
 }

// TODO: Create a function to initialize app
function init() { 
  inquirer.prompt(questions)
  .then((data) => {
    console.log(data)
    writeToFile('README.md', readmeFile(data))
  })

}

// Function call to initialize app
init();

