// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectLicense) {
  let licenseBadge;

  switch (projectLicense) {
    case "Apache License Version 2.0":
      console.log("genMD - Line 08: APACHE LICENSE");

      licenseBadge = { name: "Apache_v2", color: "blue" };

      break;
    case "GNU General Public License Version 3.0":
      console.log("genMD - Line 14: GNU v3");

      licenseBadge = { name: "GNU_v3", color: "yellow" };
      break;
    case "MIT License":
      console.log("genMD - Line 19: MIT LICENSE");

      licenseBadge = { name: "MIT", color: "darkred" };
      console.log("genMD - Line 22:", licenseBadge);

      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = { name: "BSD-2_Clause", color: "purple" };
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge = { name: "BSD-3_Clause", color: "orange" };
      break;
    case "Boost Software License":
      licenseBadge = { name: "Boost_Software", color: "lightblue" };
      break;
    case "Creative Commons Zero Version 1.0 Universal":
      licenseBadge = { name: "CC_Universal", color: "lightgreen" };
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
  console.log("genMD - Line 60:", badgeURL);

  console.log("genMD - Line 63:");
  console.log(typeof badgeURL);

  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(projectLicense) {
  let licenseURL;

  switch (projectLicense) {
    case "Apache License Version 2.0":
      // console.log("genMD - Line 77: APACHE LICENSE");

      licensePath = "Apache-2.0";
      break;
    case "GNU General Public License Version 3.0":
      // console.log("genMD - Line 83: GNU v3");

      licensePath = "gpl-3.0";
      break;
    case "MIT License":
      // console.log("genMD - Line 88: MIT LICENSE");

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
    console.log("genMD - Line 130:", licenseURL);
  } else if (projectLicense === "Creative Commons Zero Version 1.0 Universal") {
    licenseURL = "http://creativecommons.org/publicdomain/zero/1.0/";
    console.log("genMD - Line 133:", licenseURL);
  } else if (projectLicense === "The Unlicense") {
    licenseURL = "http://unlicense.org/";
    console.log("genMD - Line 136:", licenseURL);
  } else {
    licenseURL = `https://opensource.org/licenses/${licensePath}`;
    console.log("genMD - Line 139:", licenseURL);
  }

  return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectLicense) {
  let licenseDecl;
  const licenseName = projectLicense;
  console.log("genMD - Line 150:", licenseName);

  const licenseURL = renderLicenseLink(projectLicense);
  console.log("genMD - Line 153:", licenseURL);

  licenseDecl = `This Application is Licensed under the terms of ${licenseName}. \nPlease refer to the License terms at [License](${licenseURL} site.)`;
  console.log("genMD - Line 156:", licenseDecl);

  return licenseDecl;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.projectLicense);
  console.log("genMD - Line 161:", licenseBadge);
  // return licenseBadge;

  licenseURL = renderLicenseLink(answers.projectLicense);
  console.log("genMD - Line 165:", licenseURL);
  // return licenseURL;

  licenseDecl = renderLicenseSection(answers.projectLicense);
  console.log("genMD - Line 169:", licenseDecl);
  // return licenseDecl;

  return `
# ${answers.projectTitle} \n
## ${licenseBadge} \n
## ${licenseURL} \n
## ${licenseDecl} \n
  `;
}

module.exports = generateMarkdown;
