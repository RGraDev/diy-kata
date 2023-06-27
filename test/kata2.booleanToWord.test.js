const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("Returns Yes when passed true", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });
  test("Returns No when passed false", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});
