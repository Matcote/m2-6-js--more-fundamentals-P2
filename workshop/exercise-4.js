// Exercise 4
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const converter = (obj) => {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let newArray = [keys, values];
  return newArray;
};

console.log(converter(foodPairings));
