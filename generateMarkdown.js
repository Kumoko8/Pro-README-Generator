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
  if (license ===licenseBadgeArray[0]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [0] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[1]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [1] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[2]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [2] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[3]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [3] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[4]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [4] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[5]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [5] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[6]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [6] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[7]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [7] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[8]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [8] + `-green.svg`;
    return licenseEndpt;
  } else if (license ==licenseBadgeArray[9]) {
    const licenseEndpt = `https://img.shields.io/badge/license-` + [9] + `-green.svg`;
    return licenseEndpt;
  } 
   else {
    return ""
  }
}


    
  
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("Apache") ) {
    return licenseLinkArray[0];
  } else if (license.includes("GPL-3")){
    return licenseLinkArray[1]
  } else if (license.includes("GPL-2")){
    return licenseLinkArray[2]
  } else if (license.includes("MIT")){
    return licenseLinkArray[3]
  }else if (license.includes("BSD-3")){
    return licenseLinkArray[4]
  }else if (license.includes("BSD-2")){
    return licenseLinkArray[5]
  }else if (license===("CC-BY-4.0")){
    return licenseLinkArray[6]
  }else if (license.includes("CC0-1.0")){
    return licenseLinkArray[7]
  }else if (license.includes("CC-BY-SA-")){
    return licenseLinkArray[8]
  }else if (license.includes("MPL-2.0")){
    return licenseLinkArray[9]
  }

  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const apacheSection = "Apache License 2.0: permissive open-source license that allows users to use, modify, and distribute the code under certain conditions. It includes patent grant provisions and offers more extensive liability and warranty disclaimers compared to the MIT License."
    const gplSection = "GNU General Public License (GPL) v2.0/3.0: A copyleft license that ensures the code remains open source and freely available. It requires any derivative works or modifications to also be released under the GPL, promoting the principles of free software."
    const mitSection = "MIT License: A permissive open-source license that allows users to use, modify, and distribute the code under certain conditions. It places minimal restrictions on the usage and is widely adopted in the open-source community."
    const bsdSection = "BSD 2/3-Clause License: A permissive open-source license that allows users to use, modify, and distribute the code under certain conditions. It includes attribution requirements and limitations on using the original author's name in endorsements."
    const ccbySection = "The CC BY (SA) 4.0 license encourages collaboration, innovation, and the sharing of knowledge while ensuring that the original creators receive appropriate recognition for their work. It enables a balance between openness and attribution, allowing others to benefit from and build upon creative works while maintaining the integrity of the original authorship."
    const ccZeroSection = "Creative Commons Zero v1.0 Universal: A public domain dedication license that effectively waives all copyright and related rights to the code, allowing users to freely use, modify, and distribute it without attribution or restrictions."
    const mplSection = "Mozilla Public License 2.0: A copyleft license that allows users to use, modify, and distribute the code under certain conditions. It requires any changes or modifications to be shared under the same license terms, ensuring the openness of the codebase."

  if(license ===licenseBadgeArray[0]) {
    return apacheSection;
    
  } else if(license ===licenseBadgeArray[1] || license ===licenseBadgeArray[2]) {
    return gplSection;
  }else if(license ===licenseBadgeArray[3]) {
      return mitSection;
  }else if(license ===licenseBadgeArray[4] || license ===licenseBadgeArray[5]) {
      return bsdSection;
  }else if(license ===licenseBadgeArray[6] || license===licenseBadgeArray[8]) {
      return ccbySection;
  }else if(license ===licenseBadgeArray[7]) {
      return ccZeroSection;
  }else if(license ===licenseBadgeArray[9]) {
      return mplSection;
  }else {
    return ""
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.license)
  return `# ${data.title}\n\n 
  # Description\n\n 
     ${data.description}\n\n
   # Table of Contents\n\n 
   [Installation](#installation) \n\n 
   [Usage]\n\n 
   [Configuration] \n\n 
   Contributing\n\n 
   Tests\n\n 
   [License](#license) \n\n 
   Authors\n\n
  # Installation <a name="installation"></a> \n\n <p> ${data.installation} </p>\n\n
  # Usage\n\n <p> ${data.usage}</p>\n\n
  # Contributing\n\n ${data.contributions}\n\n
  # Tests\n\n ${data.tests}\n\n
  # License <a name="license"></a>\n\n  
   ${licenseBadge}\n\n 
   ${licenseLink}\n\n 
   ${licenseSection} 
  # Questions
   \n\nGitHub:${data.username}
   \n\n Email:${data.email}
`;

}

module.exports = generateMarkdown;
