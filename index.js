// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const readmeFields = [
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
  // {
  //   type: "input",
  //   name: "projectDesc",
  //   message: "Enter your Project Description: ",
  //   default: "Project Description",
  //   validate: (projectDesc) => {
  //     if (!projectDesc.length) {
  //       return "Please provide a Project Description.";
  //     }
  //     if (projectDesc.length <= 10 || projectDesc.length > 50) {
  //       return "Please provide a Project Description of a length between ten (10) and fifty (50) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectDesc) => {
  //     return projectDesc.trim();
  //   },
  // },
  // {
  //   type: "input",
  //   name: "projectInstall",
  //   message: "Enter your Project Installation Instructions: ",
  //   default: "Project Installation",
  //   validate: (projectInstall) => {
  //     if (!projectInstall.length) {
  //       return "Please provide Project Installation Instructions.";
  //     }
  //     if (projectInstall.length <= 20 || projectInstall.length > 100) {
  //       return "Please provide Project Installation Instructions of a length between twenty (20) and one hundred (100) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectInstall) => {
  //     return projectInstall.trim();
  //   },
  // },
  // {
  //   type: "input",
  //   name: "projectUse",
  //   message: "Enter your Project Use Guidelines: ",
  //   default: "Project Use Guidelines",
  //   validate: (projectUse) => {
  //     if (!projectUse.length) {
  //       return "Please provide Project Use Guidelines.";
  //     }
  //     if (projectUse.length <= 20 || projectUse.length > 100) {
  //       return "Please provide Project Use Guidelines of a length between twenty (20) and one hundred (100) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectUse) => {
  //     return projectUse.trim();
  //   },
  // },
  // {
  //   type: "input",
  //   name: "projectContr",
  //   message: "Enter your Project Contribution Guidelines: ",
  //   default: "Project Contribution Guidelines",
  //   validate: (projectContr) => {
  //     if (!projectContr.length) {
  //       return "Please provide Project Contribution guidelines.";
  //     }
  //     if (projectContr.length <= 20 || projectContr.length > 100) {
  //       return "Please provide Project Contribution Guidelines of a length between twenty (20) and one hundred (100) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectContr) => {
  //     return projectContr.trim();
  //   },
  // },
  // {
  //   type: "input",
  //   name: "projectCredits",
  //   message: "Enter your Project Credits: ",
  //   default: "Project Credits",
  //   validate: (projectCredits) => {
  //     if (!projectCredits.length) {
  //       return "Please provide Project Contribution guidelines.";
  //     }
  //     if (projectCredits.length <= 20 || projectCredits.length > 100) {
  //       return "Please provide Project Credits of a length between twenty (20) and one hundred (100) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectCredits) => {
  //     return projectCredits.trim();
  //   },
  // },
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
      "GNU Lesser General Public License Version 2.1",
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
  // {
  //   type: "input",
  //   name: "projectFeat",
  //   message: "Enter your Project Features: ",
  //   default: "Project Features",
  //   validate: (projectFeat) => {
  //     if (!projectFeat.length) {
  //       return "Please provide Project Features.";
  //     }
  //     if (projectFeat.length <= 20 || projectFeat.length > 100) {
  //       return "Please provide Project Features of a length between twenty (20) and one hundred (100) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectFeat) => {
  //     return projectFeat.trim();
  //   },
  // },
  // {
  //   type: "input",
  //   name: "projectTests",
  //   message: "Enter your Project Test Instructions: ",
  //   default: "Project Tests",
  //   validate: (projectTests) => {
  //     if (!projectTests.length) {
  //       return "Please provide Project Test Instructions.";
  //     }
  //     if (projectTests.length <= 20 || projectTests.length > 100) {
  //       return "Please provide Project Test Instructions of a length between twenty (20) and one hundred (100) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectTests) => {
  //     return projectTests.trim();
  //   },
  // },
  // {
  //   type: "input",
  //   name: "projectRepo",
  //   message: "Enter your Project (GitHub) Repository Name: ",
  //   default: "Project Repository",
  //   validate: (projectRepo) => {
  //     if (!projectRepo.length) {
  //       return "Please provide your Project Repository Name.";
  //     }
  //     if (projectRepo.length <= 5 || projectRepo.length > 50) {
  //       return "Please provide Project Repository Name of a length between five (5) and fifty (50) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectRepo) => {
  //     return projectRepo.trim();
  //   },
  // },
  {
    type: "input",
    name: "projectUserName",
    message: "Enter your GitHub User Name: ",
    default: "GitHub User Name",
    validate: (projectUserName) => {
      if (!projectUserName.length) {
        return "Please provide your GitHub User Name.";
      }
      if (projectUserName.length <= 5 || projectUserName.length > 50) {
        return "Please provide your GitHub User Name of a length between five (5) and fifty (50) characters.";
      }
      return true;
    },
    filter: (projectUserName) => {
      return projectUserName.trim();
    },
  },
  // {
  //   type: "input",
  //   name: "projectEmail",
  //   message: "Enter your GitHub-associated Email Address: ",
  //   default: "GitHub Email Address",
  //   validate: (projectEmail) => {
  //     if (!projectEmail.length) {
  //       return "Please provide your GitHub-associated Email Address.";
  //     }
  //     if (projectEmail.length <= 5 || projectEmail.length > 50) {
  //       return "Please provide your GitHub-associated Email Address of a length between five (5) and fifty (50) characters.";
  //     }
  //     return true;
  //   },
  //   filter: (projectEmail) => {
  //     return projectEmail.trim();
  //   },
  // },
];

// Calls GitHub API for Project User Information
async function getGitHub(answers) {
  const url = `https://api.github.com/users/${answers.projectUserName}`;

  try {
    const response = await fetch(url);
    const result = await response.json();

    // console.log("GitHub User Information: ", result);
    // console.log(`GitHub User Name: ${result.login}`);

    return result;
  } catch (error) {
    console.log(error);
  }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // const fileName = "README.md";

  let userInput = "\n";

  for (const [key, value] of Object.entries(data)) {
    userInput += `${value} \n`;
    console.log("Line 260: ", userInput);
  }

  fs.appendFile(fileName, userInput, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        `Line 268: User Inputs were sucessfully written to the file, ${fileName}.`
      );
    }
  });

  // projectInfo = inquirer.prompt(readmeFields).then((answers) => {
  //   console.log(answers);

  // DELETE !!!
  // userGitHubURL = getGitHub(result.html_url);
  // console.log(getGitHub(result.html_url));

  // MeanderingBrook

  // const fileName = "README.md";

  // let userInput = "\n";

  // for (const [key, value] of Object.entries(answers)) {
  //   userInput += `${value} \n`;
  //   // console.log(userInput);
  // }

  // fs.appendFile(fileName, userInput, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(
  //       `User Inputs were sucessfully written to the file, ${fileName}.`
  //     );
  //   }
  // });

  // fs.appendFile(fileName, userName, (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(`GitHub User Name is, ${userName}.`);
  //   }
  // });
  // });
}

// TODO: Create a function to initialize app
async function init() {
  if (fs.existsSync("README.md")) {
    try {
      const projectInfo = await inquirer.prompt(readmeFields);
      console.log("Line 316: ", projectInfo);

      // const projectGitHub = await getGitHub(projectInfo);
      // console.log("Line 319: ", projectGitHub);

      badgeContent = generateMarkdown(projectInfo);

      writeToFile("README.md", projectInfo);

      // NEW
      // writeToFile("README.md", badgeContent);
      fs.appendFile("README.md", badgeContent, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Line 328: Badge was successfully written to file.");
        }
      });

      // generateMarkdown = generateMarkdown(renderLicenseBadge(projectInfo));
    } catch (error) {
      console.log(error);
    }

    // const projectData = await writeToFile();
    // console.log(projectData);

    // const userInfo = await getGitHub(answers);
    // console.log("Line 299", userInfo);
  } else {
    const fileTitle = "# 09_Challenge_README-Generator";

    fs.writeFile("./README.md", fileTitle, { flag: "a+" }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Line 338: File Created Successfully");
        // writeToFile();

        try {
          const projectInfo = inquirer.prompt(readmeFields);
          console.log("Line 343: ", projectInfo);

          // const projectGitHub = await getGitHub(projectInfo);

          writeToFile("README.md", projectInfo);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
}

// Function call to initialize app
init();
