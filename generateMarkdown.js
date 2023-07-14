const markdown = require("markdown-it")();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadgeArray = ["Apache-2.0", "GPL-3.0", "GPL-2.0", "MIT", "BSD-3-Clause ", "BSD-2-Clause", "CC-BY-4.0", "CCO-1.0","CC-BY-SA-4.0", "MPL-2.0"]
const licenseLinkArray = [ "https://www.apache.org/licenses/LICENSE-2.0",
"https://www.gnu.org/licenses/gpl-3.0.en.html",  
"https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
"https://opensource.org/license/mit/",
"https://opensource.org/license/bsd-3-clause/",
 "https://opensource.org/license/bsd-2-clause/",
"https://creativecommons.org/licenses/by/4.0/",
"https://creativecommons.org/publicdomain/zero/1.0/",
"https://creativecommons.org/licenses/by-sa/4.0/",
"https://www.mozilla.org/en-US/MPL/2.0/"]

function renderLicenseBadge(license) {
for (let i = 0; i < licenseBadgeArray.length; i++) {
  if (license ===licenseBadgeArray[i]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [i] + `-green.svg`;
    return licenseEndpt;

    fs.appendFile("./Assets/README.md", licenseEndpt, (err) => {
      if(err) {
        console.error("Error appending to file:", err);
      } else {
        console.log("Successfully appended!");
      }
    })
  } else {
    return ""
  }
    
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  }else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license ===licenseBadgeArray[0]) {
    return apacheSection;
    
  } if(license ===licenseBadgeArray[1]) {
    return gplSection;
  }
    const apacheSection = "Apache License 2.0: permissive open-source license that allows users to use, modify, and distribute the code under certain conditions. It includes patent grant provisions and offers more extensive liability and warranty disclaimers compared to the MIT License."
    const gplSection = "GNU General Public License (GPL) v2.0/3.0: A copyleft license that ensures the code remains open source and freely available. It requires any derivative works or modifications to also be released under the GPL, promoting the principles of free software."
    const mitSection = "MIT License: A permissive open-source license that allows users to use, modify, and distribute the code under certain conditions. It places minimal restrictions on the usage and is widely adopted in the open-source community."
    const bsdSection = "BSD 2/3-Clause License: A permissive open-source license that allows users to use, modify, and distribute the code under certain conditions. It includes attribution requirements and limitations on using the original author's name in endorsements."
    const ccbySection = "The CC BY (SA) 4.0 license encourages collaboration, innovation, and the sharing of knowledge while ensuring that the original creators receive appropriate recognition for their work. It enables a balance between openness and attribution, allowing others to benefit from and build upon creative works while maintaining the integrity of the original authorship."
    const ccZeroSection = "Creative Commons Zero v1.0 Universal: A public domain dedication license that effectively waives all copyright and related rights to the code, allowing users to freely use, modify, and distribute it without attribution or restrictions."
    const mplSection = "Mozilla Public License 2.0: A copyleft license that allows users to use, modify, and distribute the code under certain conditions. It requires any changes or modifications to be shared under the same license terms, ensuring the openness of the codebase."

  } else {
    return ""
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const readmeContent = `# `
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.license)
  return `# ${data.title}\n\n # Description\n\n <p> ${data.description} <p> # Table of Contents\n\n Installation\n\ Usage\n\ Configuration\n\ Contributing\n\ Tests\n\ License\n\ Authors\n\
  # Installation\n\n <p> ${data.installation} <p>\n\n # Usage\n\n <p> ${data.usage}\n\n # Configuration\n\n ${data.configuration}\n\n # Contributing\n\n ${data.contributions}\n\n
  # Tests\n\n ${data.tests}\n\n # License\n\n  ${licenseBadge} ${licenseLink} ${licenseSection}
`;
//use this space to get the format of the ReadMe before you run it

}

module.exports = generateMarkdown;
