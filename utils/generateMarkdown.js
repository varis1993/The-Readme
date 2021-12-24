// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license==='Apache'){
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if(license==='GNU'){
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if(license==='ISC'){
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if(license==='MIT'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if(license==='Mozilla'){
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
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
    return `# ${data.projectTitle}
  
    ## Description 
    ${data.description}
    
    ## Table of Contents (Optional)
    
    If your README is very long, add a table of contents to make it easy for users to find what they need.
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [License](#license)
    * [Tests](#tests)
    
    
    ## Installation
    ${data.installation}
    
    ## Usage 
    ${data.usage}
  
    ## License
    ${renderLicenseBadge(data.license)}
    
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    ${data.email}
    ${data.username}
  `;
  }
  
  module.exports = generateMarkdown;
  