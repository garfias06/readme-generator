// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='None'){
    return ""
  }
  return `![${license}](https://img.shields.io/LICENSE-${license}-blue.svg)`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}.

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [How to contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}.

  ## Usage
  ${data.usage}.

  ## Credits
  ${data.credits}.

  ## License

  ## Features
  ${data.features}.

  ## How to Contribute
  ${data.contribution}.

  ## Tests
  To run tests, run the following command:
  ${data.tests}.

  ##Questions
  If you have questions about the repository, open an issue or contact me directly at ${data.contactInfo} or GitHub Profile: ${data.github}.`

}

module.exports = generateMarkdown;







