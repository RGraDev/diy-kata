const humanCatDogYears = (humanAge) => {
  let catYears = 0;
  let dogYears = 0;

  if (humanAge === 0) {
    catYears = 0;
    dogYears = 0;
  } else {
    let years = 1;
    while (years <= humanAge) {
      if (humanAge === 0) {
        catYears = 0;
        dogYears = 0;
      } else if (years === 1) {
        catYears += 15;
        dogYears += 15;
      } else if (years === 2) {
        catYears += 9;
        dogYears += 9;
      } else {
        catYears += 4;
        dogYears += 5;
      }
      years += 1;
    }
  }
  return [humanAge, catYears, dogYears];
};

module.exports = humanCatDogYears;
