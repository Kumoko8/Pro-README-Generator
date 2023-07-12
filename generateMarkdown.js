// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArray = ["Apache License 2.0", "GNU General Public License v3.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "Boost Software 1.0", "Creative Commons", "Eclipse Public License 2.0","GNU Affero", "Mozilla Public License 2.0"]
function renderLicenseBadge(license) {
for (let i = 0; i < licenseArray.length; i++) {
  if (license ===[i]) {

  }
    
  }
  
  
    
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)
  const licenseSection = renderLicenseSection(data.license)
  return `# ${data.title} ${licenseBadge} ${licenseLink} ${licenseSection}
`;
//use this space to get the format of the ReadMe before you run it

}

module.exports = generateMarkdown;
