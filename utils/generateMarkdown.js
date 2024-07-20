// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectLicense) {
  let licenseBadge;

  switch (projectLicense) {
    case "Apache License Version 2.0":
      licenseBadge = { name: "Apache_v2", color: "blue" };
      break;
    case "GNU General Public License Version 3.0":
      licenseBadge = { name: "GNU_v3", color: "yellow" };
      break;
    case "MIT License":
      licenseBadge = { name: "MIT", color: "darkred" };
      // console.log("genMD - Line 15:", licenseBadge);
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = { name: "BSD_2--Clause", color: "purple" };
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge = { name: "BSD_3--Clause", color: "orange" };
      break;
    case "Boost Software License":
      licenseBadge = { name: "Boost_1.0", color: "lightblue" };
      break;
    case "Creative Commons Zero Version 1.0 Universal":
      licenseBadge = { name: "CC0_1.0", color: "lightgrey" };
      break;
    case "Eclipse Public License Version 2.0":
      licenseBadge = { name: "Eclipse_v2", color: "darkblue" };
      break;
    case "GNU Affero General Public License Version 3.0":
      licenseBadge = { name: "GNU_Affero", color: "darkgreen" };
      break;
    case "GNU General Public License Version 2.0":
      licenseBadge = { name: "GNU_v2", color: "darkorange" };
      break;
    case "GNU Lesser General Public License Version 3.0":
      licenseBadge = { name: "GNU_Lesser", color: "green" };
      break;
    case "Mozilla Public License Version 2.0":
      licenseBadge = { name: "Mozilla_v2", color: "fuschia" };
      break;
    case "The Unlicense":
      licenseBadge = { name: "Unlicense", color: "darkyellow" };
      break;
    default:
      licenseBadge = "";
    // console.log("genMD - Line 57: No License Assigned");
  }

  badgeURL = `https://img.shields.io/badge/License-${licenseBadge.name}-${licenseBadge.color}`;
  // console.log("genMD - Line 53:", badgeURL);

  // console.log("genMD - Line 55: Badge URL Type of Object - ");
  // console.log(typeof badgeURL);

  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
  let licenseURL;

  switch (projectLicense) {
    case "Apache License Version 2.0":
      licensePath = "Apache-2.0";
      break;
    case "GNU General Public License Version 3.0":
      licensePath = "gpl-3.0";
      break;
    case "MIT License":
      // console.log("genMD - Line 74: MIT LICENSE");
      licensePath = "MIT";
      break;
    case "BSD 2-Clause 'Simplified' License":
      licensePath = "BSD-2-Clause";
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licensePath = "BSD-3-Clause";
      break;
    case "Boost Software License":
      // Non-Standard URL
      licensePath = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Creative Commons Zero Version 1.0 Universal":
      // Non-Standard URL
      licensePath = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse Public License Version 2.0":
      licensePath = "EPL-1.0";
      break;
    case "GNU Affero General Public License Version 3.0":
      licensePath = "agpl-3.0";
      break;
    case "GNU General Public License Version 2.0":
      licensePath = "old-licenses/gpl-2.0.en.html";
      break;
    case "GNU Lesser General Public License Version 3.0":
      licensePath = "lgpl-3.0";
      break;
    case "Mozilla Public License Version 2.0":
      licensePath = "MPL-2.0";
      break;
    case "The Unlicense":
      // Non-Standard URL
      licensePath = "http://unlicense.org/";
  }

  if (projectLicense === "Boost Software License") {
    licenseURL = "https://www.boost.org/LICENSE_1_0.txt";
    // console.log("genMD - Line 113:", licenseURL);
  } else if (projectLicense === "Creative Commons Zero Version 1.0 Universal") {
    licenseURL = "http://creativecommons.org/publicdomain/zero/1.0/";
    // console.log("genMD - Line 116:", licenseURL);
  } else if (projectLicense === "The Unlicense") {
    licenseURL = "http://unlicense.org/";
    // console.log("genMD - Line 119:", licenseURL);
  } else {
    licenseURL = `https://opensource.org/licenses/${licensePath}`;
    // console.log("genMD - Line 122:", licenseURL);
  }

  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {
  let licenseDecl;
  const licenseName = projectLicense;
  // console.log("genMD - Line 133:", licenseName);

  const licenseURL = renderLicenseLink(projectLicense);
  // console.log("genMD - Line 136:", licenseURL);

  licenseDecl = `This Application is Licensed under the terms of ${licenseName}. \nPlease refer to the License terms at the [${licenseName}](${licenseURL}) site.`;
  // console.log("genMD - Line 139:", licenseDecl);

  return licenseDecl;
}

// Calls GitHub API for Project User Information
async function getGitHub(projectUserName) {
  const url = `https://api.github.com/users/${projectUserName}`;

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.projectLicense);
  // console.log("genMD - Line 164:", licenseBadge);

  licenseURL = renderLicenseLink(answers.projectLicense);
  // console.log("genMD - Line 167:", licenseURL);

  licenseDecl = renderLicenseSection(answers.projectLicense);
  // console.log("genMD - Line 170:", licenseDecl);

  userGitHubID = getGitHub(answers.projectUserName);
  console.log(userGitHubID);

  return `
# ${answers.projectTitle}

## ![License Badge](${licenseBadge})

## Table of Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Credits and Source Code](#credits-and-source-code)
- [Contributing](#contributing)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [GitHub Repository Location (HTTPS)](#github-repository-location-https)
- [GitHub Pages Location](#github-pages-location)
- [GitHub Creator Identity](#github-creator-identity)
- [Contact Information](#contact-information)
- [Application Screenshots](#application-screenshots)


## Description
${answers.projectDesc}


## Install
${answers.projectInstall}


## Usage
${answers.projectUse}


## Credits and Source Code
${answers.projectCredits}


## Contributing
${answers.projectContr}


## License
${licenseDecl}


## Features
${answers.projectFeat}


## Tests
${answers.projectTests}


## GitHub Repository Location (HTTPS)
${answers.projectRepo}


## GitHub Pages Location


## GitHub Creator Identity
${answers.projectUserName}
${userGitHubID}


## Contact Information
${answers.projectEmail}


## Application Screenshots

  `;
}

module.exports = generateMarkdown;
