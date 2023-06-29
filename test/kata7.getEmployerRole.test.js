const { getEmployerRole } = require("../src");
const { employees } = require("../src/kata7.getEmployerRole.Array");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole("Jenny", employees)).toBe("Sales Associate");
    expect(getEmployerRole("Satti", employees)).toBe("Developer");
    expect(getEmployerRole("Javid", employees)).toBe("Human Recommended Reading Assistant");
  });
});
