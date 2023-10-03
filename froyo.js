const userInputString = prompt(
  "Please enter some ice cream flavors separated by commas but don't put spaces after the commas please."
);

const flavorsArray = userInputString.split(",");

function getFlavorsCount(flavors) {
  const flavorCount = {};

  for (const flavor of flavors) {
    if (flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  }

  return flavorCount;
}

const icecream = {
  flavors: flavorsArray,
};

const flavorCounts = getFlavorsCount(icecream.flavors);

console.table(flavorCounts);