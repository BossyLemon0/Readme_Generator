// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
generateMarkdown(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

if (data.license){
  var x = `## Licence
- - - - 
insert license info through if or case statements 
`;
// if(data.npm){
//   var npm = `npm i ${data.installation}`
// }
  // ${[license](licenselink)}
}

  return `# ${data.title}
badge placeholder for: ${data.license}

## Table of Contents
 - - - -
* [Description](#Description "Goto Description")
* [Installation](#Installation "Goto Installation")
* [Usage](#Usage "Goto Usage")
* [Contributions](#Contributions "Goto Contributions")
* [Tests](#Tests "Goto Tests")
* [Questions](#Questions "Goto Questions")

## Description
 - - - -
${data.description}
  
## Installation
 - - - -
${data.installation}

${npm}

## Usage
 - - - -
${data.usage}

[Application in action](${data.usagevideo})

## Contribution Guidelines
 - - - -
${data.contribution_guidelines}

## Tests
 - - - -
${data.tests}

${x}

## Questions
 - - - -
To see more of my projects visit my page below:
[My GitHub](https://github.com/${data.username})

If you have any questions you can contact me through my email:
${data.email}
- - - -
[Back to Top](#${data.title} "Goto top")
`;
}
module.exports = renderLicenseBadge;
module.exports = generateMarkdown;
