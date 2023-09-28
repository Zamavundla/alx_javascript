#!/ usr/bin/node

const request = require('request');

// Check if the API URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

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

// Function to compute the number of completed tasks for each user
async function computeCompletedTasks(apiUrl) {
  try {
    const todosData = await fetchData(apiUrl);
    const todos = JSON.parse(todosData);

    const completedTasksByUser = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// Call the function to compute completed tasks by user
computeCompletedTasks(apiUrl);
