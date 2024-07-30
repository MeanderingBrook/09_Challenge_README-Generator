// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Require Application Modules
const generateMarkdown = require("./utils/generateMarkdown.js");
const { Resolver } = require("dns");

// TODO: Create an array of questions for user input
const readmeQuestions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter your Project Title: ",
    default: "Projec Title",
    validate: (projectTitle) => {
      if (!projectTitle.length) {
        return "Please provide a Project Title.";
      }
      if (projectTitle.length <= 5 || projectTitle.length > 20) {
        return "Please provide a Project Title of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectTitle) => {
      return projectTitle.trim();
    },
  },
  {
    type: "input",
    name: "projectDesc",
    message: "Enter your Project Description: ",
    default: "Project Description",
    validate: (projectDesc) => {
      if (!projectDesc.length) {
        return "Please provide a Project Description.";
      }
      if (projectDesc.length <= 5 || projectDesc.length > 20) {
        return "Please provide a Project Description of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectDesc) => {
      return projectDesc.trim();
    },
  },
  {
    type: "input",
    name: "projectInstall",
    message: "Enter your Project Installation Instructions: ",
    default: "Project Installation",
    validate: (projectInstall) => {
      if (!projectInstall.length) {
        return "Please provide Project Installation Instructions.";
      }
      if (projectInstall.length <= 5 || projectInstall.length > 20) {
        return "Please provide Project Installation Instructions of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectInstall) => {
      return projectInstall.trim();
    },
  },
  {
    type: "input",
    name: "projectUse",
    message: "Enter your Project Use Guidelines: ",
    default: "Project Use Guidelines",
    validate: (projectUse) => {
      if (!projectUse.length) {
        return "Please provide Project Use Guidelines.";
      }
      if (projectUse.length <= 5 || projectUse.length > 20) {
        return "Please provide Project Use Guidelines of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectUse) => {
      return projectUse.trim();
    },
  },
  {
    type: "input",
    name: "projectCredits",
    message: "Enter your Project Credits: ",
    default: "Project Credits",
    validate: (projectCredits) => {
      if (!projectCredits.length) {
        return "Please provide Project Contribution guidelines.";
      }
      if (projectCredits.length <= 5 || projectCredits.length > 20) {
        return "Please provide Project Credits of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectCredits) => {
      return projectCredits.trim();
    },
  },
  {
    type: "input",
    name: "projectContr",
    message: "Enter your Project Contribution Guidelines: ",
    default: "Project Contribution Guidelines",
    validate: (projectContr) => {
      if (!projectContr.length) {
        return "Please provide Project Contribution guidelines.";
      }
      if (projectContr.length <= 5 || projectContr.length > 20) {
        return "Please provide Project Contribution Guidelines of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectContr) => {
      return projectContr.trim();
    },
  },
  {
    type: "list",
    name: "projectLicense",
    message: "Select your Project License: ",
    choices: [
      "Apache License Version 2.0",
      "GNU General Public License Version 3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License",
      "Creative Commons Zero Version 1.0 Universal",
      "Eclipse Public License Version 2.0",
      "GNU Affero General Public License Version 3.0",
      "GNU General Public License Version 2.0",
      "GNU Lesser General Public License Version 3.0",
      "Mozilla Public License Version 2.0",
      "The Unlicense",
    ],
    default: "Project License",
    validate: (projectLicense) => {
      if (!projectLicense.length) {
        return "Please select a License from the list above.";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "projectFeat",
    message: "Enter your Project Features: ",
    default: "Project Features",
    validate: (projectFeat) => {
      if (!projectFeat.length) {
        return "Please provide Project Features.";
      }
      if (projectFeat.length <= 5 || projectFeat.length > 20) {
        return "Please provide Project Features of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectFeat) => {
      return projectFeat.trim();
    },
  },
  {
    type: "input",
    name: "projectTests",
    message: "Enter your Project Test Instructions: ",
    default: "Project Tests",
    validate: (projectTests) => {
      if (!projectTests.length) {
        return "Please provide Project Test Instructions.";
      }
      if (projectTests.length <= 5 || projectTests.length > 20) {
        return "Please provide Project Test Instructions of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectTests) => {
      return projectTests.trim();
    },
  },
  {
    type: "input",
    name: "projectRepo",
    message: "Enter your Project (GitHub) Repository Name: ",
    default: "Project Repository",
    validate: (projectRepo) => {
      if (!projectRepo.length) {
        return "Please provide your Project Repository Name.";
      }
      if (projectRepo.length <= 5 || projectRepo.length > 20) {
        return "Please provide Project Repository Name of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectRepo) => {
      return projectRepo.trim();
    },
  },
  {
    type: "input",
    name: "projectUserName",
    message: "Enter your GitHub User Name: ",
    default: "GitHub User Name",
    validate: (projectUserName) => {
      if (!projectUserName.length) {
        return "Please provide your GitHub User Name.";
      }
      if (projectUserName.length <= 5 || projectUserName.length > 20) {
        return "Please provide your GitHub User Name of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectUserName) => {
      return projectUserName.trim();
    },
  },
  {
    type: "input",
    name: "projectEmail",
    message: "Enter your GitHub-associated Email Address: ",
    default: "GitHub Email Address",
    validate: (projectEmail) => {
      if (!projectEmail.length) {
        return "Please provide your GitHub-associated Email Address.";
      }
      if (projectEmail.length <= 5 || projectEmail.length > 20) {
        return "Please provide your GitHub-associated Email Address of a length between five (5) and twenty (20) characters.";
      }
      return true;
    },
    filter: (projectEmail) => {
      return projectEmail.trim();
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(readmePath, markdownContent) {
  fs.appendFile(readmePath, markdownContent, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Line 243: Data was successfuly written to file.");
    }
  });
}

// Determines if README file exists and creates new file if no
function checkForFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(readmePath, fs.constants.F_OK, (err) => {
      if (!err) {
        console.log(`${readmePath} already exists.`);
        resolve(true);
      }
      console.log(`${readmePath} does not exist.`);

      const fileHeader =
        "Full-Stack Developer Bootcamp Module 09 - Challenge: README Generator \n";
      fs.writeFile(readmePath, fileHeader, { flag: "a+" }, (err) => {
        if (err) {
          console.log(err);
          reject("Line 264: File Could Not Be Created.");
        } else {
          console.log("Line 266: File Created Successfully");
          resolve(false);
        }
      });
    });
  });
}

// TODO: Create a function to initialize app
async function init() {
  // Defines README File output location and File Name
  readmePath = "./output/README.md";

  // Determines if README file exists and creates new file if no
  await checkForFile(readmePath);

  // Deprecated in favor of Function, checkForFile
  // if (checkForFile(readmePath)) {
  //   // .then(userInput = await inquirer. etc. etc.)
  // }

  // Requests User Input to README Questions
  const userInput = await inquirer.prompt(readmeQuestions);
  // console.log("Line 280", userInput);

  // Generates Markdown Content based upon User responses to README Questions
  const markdownContent = generateMarkdown(userInput);
  // console.log("Line 284", markdownContent);

  // Writes generated Markdown Content to README file
  writeToFile(readmePath, markdownContent);

  // Deprecated in favor of Function, writeToFile
  // fs.appendFile(readmePath, markdownContent, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Line 368: Data was successfuly written to file.");
  //   }
  // });
}

// Function call to initialize app
init();
