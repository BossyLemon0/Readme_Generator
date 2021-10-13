// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
var markdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your project',
        default:'New Project'
    },
    {
        type:'input',
        name:'Description',
        message:'Give a short description explaining the what, why, and how of this project.',
        default:'Test'
    },
    {
        type:'input',
        name:'Installation',
        message:'Give a step-by-step instructional guide on what needs to be installed in order for you application to run.',
        default:'fork repo and run'
    },
    {
        type:'input',
        name:'usage',
        message:'Provide examples and instructions for usage. Include screenshots if needed.',
        default:'Figure it out yourself'
    },
    {
        type:'input',
        name:'contribution guidelines',
        message:'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.',
        default:'New Project'
    },
    {
        type:'input',
        name:'test instructions',
        message:'If you have any tests for your application, provide an example on how use them here.',
        default:'No tests'
    },
]
inquirer.prompt(questions)
.then((answers)=>{
    console.log(generateMarkdown(answers));
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README