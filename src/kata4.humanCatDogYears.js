const humanCatDogYears = (number) => {
  let counter = 1;
  let catYears = 0;
  let dogYears = 0;

  while (counter <= number) {
    if (counter === 1) {
      catYears += 15;
      dogYears += 15;
      counter += 1;
    } else if (counter === 2) {
      catYears += 9;
      dogYears += 9;
      counter += 1;
    } else {
      catYears += 4;
      dogYears += 5;
      counter += 1;
    }
  }

  const array = [number, catYears, dogYears];
  return array;
};

module.exports = humanCatDogYears;
