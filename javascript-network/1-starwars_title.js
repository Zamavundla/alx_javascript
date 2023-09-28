#!/ usr/bin/node

const request = require('request');

const movieId = process.argv[2]; // Get the movie ID from the command line argument
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

if (!movieId) {
  console.error('Please provide a valid movie ID as the first argument.');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  } else {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  }
});
