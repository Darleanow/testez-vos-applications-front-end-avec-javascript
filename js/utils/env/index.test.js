const { isInTestEnv } = require("./index");

describe("Test suite for test env", () => {
  it("Is true when in test env", () => {
    expect(isInTestEnv()).toBe(true);
  });
  it("Expect false if env isnt test", () => {
    process.env.NODE_ENV = "dev";
    expect(isInTestEnv()).toBe(false);
  });
});
