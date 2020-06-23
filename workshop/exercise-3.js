// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];
let i = 1;
function addNum(str) {
  let numbered = `${str} (${i})`;
  i++;
  return numbered;
}
const foodWithRank = mostPopularFood.map(addNum);
foodWithRank.sort();
console.log(foodWithRank);
