#!/ usr/bin/node

const request = require('request');

const url = process.argv[2]; // Get the URL from the command line argument

if (!url) {
  console.error('Please provide a valid URL as the first argument.');
  process.exit(1);
}

request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
