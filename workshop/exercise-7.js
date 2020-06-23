// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function
function createRecommendations(obj) {
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  const recommendations = [];
  for (i = 0; i < keys.length; i++) {
    recommendations.push(`With ${keys[i]}, it is best to have ${values[i]}`);
  }
  return recommendations;
}

// printRecommendations function
function printRecommendations(arr) {
  arr.forEach(function (str) {
    console.log(`- ${str}`);
  });
}

// function call (done)
printRecommendations(createRecommendations(foodPairings));
