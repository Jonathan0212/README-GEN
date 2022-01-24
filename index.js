// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
             } else {
              console.log('Please enter your project name!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'describe',
        message: 'Enter a description for your project (Required)',
        validate: describeInput => {
          if (describeInput) {
            return true;
          } else {
            console.log('Please enter a project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter installation instructions (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the installtion instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter what was used to create your project (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter what you used to create your project!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter who contributed to the project (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please enter who contributed!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Describe how to test your project (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter how to test your project!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your Github username (Required)',
        validate: userNameInput => {
          if (userNameInput) {
            return true;
          } else {
            console.log('Please enter your Github username!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your contact email (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your contact email!');
            return false;
          }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache','MIT','Mozilla',]
    }
])

.then((answers) => {
    console.log(generateMarkdown(answers));
    const userAnswers = generateMarkdown(answers);
    const fileName = './gen/generatedREADME.md'
    writeToFile(fileName, userAnswers);
    })
};

const writeToFile = (fileName, data) => {
    console.log('Inside writeToFile' + 'File name:' + fileName);
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log('The README file has been generated!')
        }
    });
}

function init() {
    questions();


};

init();