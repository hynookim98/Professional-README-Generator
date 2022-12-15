// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if statement checks to see if license if equal to none
  if(license === 'None') {
    // returns an empty string if license if none
    return '';
  } else {
    return `![Github-License](https://img.shields.io/badge/license-${license}-blue.svg)\n`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return ` [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  Hello. My name is ${data.name} and this is my project, ${data.title}. 

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)
  
  * ${renderLicenseLink(data.license)}

  * [Tests](#tests)

  * [Credits](#credits)

  * [Questions](#questions)

  ## Installation
  ${data.install}

  To install any necessary dependencies, run the following command: 
  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Tests

  To run tests, run the following command:
  ${data.test}

  ## Credits
  ${data.credits}

  ## Questions

  If you have any questions feel free to email me at 
  ${data.email}. 
  You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
