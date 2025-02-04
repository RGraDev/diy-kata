const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("Returns array of [human years, cat years, dog years]", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(30)).toEqual([30, 136, 164]);
  });
  test("Correctly returns array when human years is zero", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
  });
});