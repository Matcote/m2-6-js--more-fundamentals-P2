// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

function printGuestOrder(early, late) {
  let list = early.concat(late);
  for (i = 0; i < list.length; i++) {
    console.log(`${i + 1}. ${list[i]}`);
  }
}

printGuestOrder(earlyBirds, lateComers);
