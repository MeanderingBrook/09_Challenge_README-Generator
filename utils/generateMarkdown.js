// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(projectLicense) {
  let licenseBadge = "";

  switch (projectLicense) {
    case "Apache License Version 2.0":
      console.log("genMD - Line 08: APACHE LICENSE");

      licenseBadge = { name: "Apache+v2", color: "blue" };

      badgeContent = `https://img.shields.io/badge/License-${licenseBadge.name}-${licenseBadge.color}`;
      console.log("genMD - Line 11: APACHE BADGE", badgeContent);

      // return badgeContent;
      return `(https://img.shields.io/badge/License-${licenseBadge.name}-${licenseBadge.color})`;

      break;
    case "MIT License":
      console.log("genMD - Line 11: MIT LICENSE");

      licenseBadge = { name: "MIT", color: "green" };

      badgeContent = `https://img.shields.io/badge/License-${licenseBadge.name}-${licenseBadge.color}`;
      console.log("genMD - Line 20: APACHE BADGE", badgeContent);

      // return badgeContent;
      return `(https://img.shields.io/badge/License-${licenseBadge.name}-${licenseBadge.color})`;

      break;
    default:
      console.log("genMD - Line 26: NO LICENSE");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data.title}
  renderLicenseBadge(data.projectLicense);

  // `;
}

module.exports = generateMarkdown;
