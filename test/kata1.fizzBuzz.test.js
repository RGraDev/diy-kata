const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(12)).toBe("Fizz");
    expect(fizzBuzz(-3)).toBe("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
    expect(fizzBuzz(20)).toBe("Buzz");
    expect(fizzBuzz(50)).toBe("Buzz");
    expect(fizzBuzz(500)).toBe("Buzz");
    expect(fizzBuzz(-5)).toBe("Buzz");
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    expect(fizzBuzz(90)).toBe("FizzBuzz");
    expect(fizzBuzz(-15)).toBe("FizzBuzz");
    expect(fizzBuzz(-30)).toBe("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(-4)).toBe(-4);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(241)).toBe(241);
    expect(fizzBuzz(98)).toBe(98);
  });
});
