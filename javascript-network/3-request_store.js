#!/ usr/bin/node

const request = require('request');
const fs = require('fs');

// Check if the correct number of command-line arguments is provided
if (process.argv.length !== 4) {
  console.error('Usage: node request_store.js <URL> <outputFilePath>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Function to fetch the webpage content and store it in a file
function fetchAndStoreWebpage(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Error: Received status code ${response.statusCode}`);
      return;
    }

    // Write the webpage content to the specified file with UTF-8 encoding
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${err.message}`);
      } else {
        console.log(`Webpage content saved to ${filePath}`);
      }
    });
  });
}

// Call the function to fetch and store the webpage
fetchAndStoreWebpage(url, filePath);
