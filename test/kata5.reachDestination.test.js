const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(30, 23)).toBe("I should be there in 1.5 hours");
    expect(reachDestination(125, 42)).toBe("I should be there in 3 hours");
    expect(reachDestination(7, 3)).toBe("I should be there in 2.5 hours");
  });
  test("returns error message if user inputs negative distance or speed", () => {
    expect(reachDestination(-20, 30)).toBe(
      "Distance and Speed must both be positive"
    );
    expect(reachDestination(20, -30)).toBe(
      "Distance and Speed must both be positive"
    );
    expect(reachDestination(-10, -20)).toBe(
      "Distance and Speed must both be positive"
    );
  });
  test("returns message if user inputs value of zero for distance or speed", () => {
    expect(reachDestination(0, 30)).toBe("Distance cannot be zero");
    expect(reachDestination(20, 0)).toBe("Speed cannot be zero");
  });
});
