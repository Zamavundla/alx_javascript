#!/ usr/bin/node

const request = require('request');

// Check if the API URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Define the character ID for Wedge Antilles
const characterId = 18;

// Function to fetch data from the API
function fetchMovies(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

// Function to count the movies where Wedge Antilles is present
async function countMoviesWithWedgeAntilles(apiUrl) {
  try {
    let moviesData = await fetchMovies(apiUrl);
    moviesData = JSON.parse(moviesData);

    if (moviesData.results) {
      const movies = moviesData.results;
      const count = movies.filter(movie =>
        movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      ).length;
      console.log(count);
    } else {
      console.error('Error: Unable to fetch movie data from the API.');
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// Call the function to count movies with Wedge Antilles
countMoviesWithWedgeAntilles(apiUrl);
