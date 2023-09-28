#!/ usr/bin/node

// Create the studentHogwarts module
const studentHogwarts = (function () {
    // Private variables
    let privateScore = 0;
    let name = null;
  
    // Private method to change the score
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    // Public methods
    return {
      setName: function (newName) {
        name = newName;
      },
      rewardStudent: function () {
        changeScoreBy(1);
      },
      penalizeStudent: function () {
        changeScoreBy(-1);
      },
      getScore: function () {
        return name + ': ' + privateScore;
      },
    };
  })();
  
  // Create an instance of studentHogwarts for Harry
  const harry = Object.create(studentHogwarts);
  harry.setName('Harry');
  
  // Reward Harry four times
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  // Log Harry's name and score
  console.log(harry.getScore()); // Should display "Harry: 4"
  
  // Create an instance of studentHogwarts for Draco
  const draco = Object.create(studentHogwarts);
  draco.setName('Draco');
  
  // Reward Draco one time and penalize three times
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  // Log Draco's name and score
  console.log(draco.getScore()); // Should display "Draco: -2"
  