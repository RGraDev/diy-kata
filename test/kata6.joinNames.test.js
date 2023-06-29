const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{ name: "Bart" }, { name: "Maggie" }, { name: "Lisa" }])).toBe("Bart, Maggie & Lisa");
    expect(joinNames([{ name: "Bart" }, { name: "Maggie" }])).toBe("Bart & Maggie");
    expect(joinNames([{ name: "Bart" }])).toBe("Bart");
    expect(joinNames([{ name: "Bart" }, { name: "Maggie" }, { name: "Lisa" }, {name: "Homer"}])).toBe("Bart, Maggie, Lisa & Homer");
  });
});
