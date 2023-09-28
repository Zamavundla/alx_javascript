#!/ usr/bin/node

const request = require('request');

// Check if the Movie ID is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node starwars_characters.js <Movie_ID>');
  process.exit(1);
}

const movieId = process.argv[2];

// Function to fetch data from the API
function fetchData(url) {
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

// Function to get and print characters of a Star Wars movie
async function printMovieCharacters(movieId) {
  try {
    const movieData = await fetchData(`https://swapi-api.alx-tools.com/api/films/${movieId}`);
    const movie = JSON.parse(movieData);

    if (movie.characters) {
      for (const characterUrl of movie.characters) {
        const characterData = await fetchData(characterUrl);
        const character = JSON.parse(characterData);
        console.log(character.name);
      }
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// Call the function to print characters of the specified movie
printMovieCharacters(movieId);
